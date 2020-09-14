import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
import { User } from './common/user.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserService } from './common/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent
  implements OnInit, AfterViewInit, OnDestroy {
  public title = 'Manage Users';
  public displayColumns: string[] = [
    'userID',
    'firstName',
    'lastName',
    'email',
    'mobile',
    'gender',
    'isActive',
    'update',
    'delete',
  ];
  public columnsToDisplay: string[] = this.displayColumns.slice();
  public userList: User[] = [];
  public userForm: FormGroup;
  public submitted = false;
  public isLoading = false;
  public error = false;
  public allUsers: Observable<User[]>;
  public userIdUpdate = 0;
  public message: string;
  public userSubscription$: Subscription;
  public dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userServices: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.maxLength(30),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.maxLength(30),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.maxLength(60),
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
      // password: ['', [Validators.required, Validators.minLength(6)]],
      // confirmPassword: ['', Validators.required]
      // }, {
      // validator: PasswordValidation.MatchPassword
    });
    this.getUserList();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnDestroy(): void {
    this.userSubscription$.unsubscribe();
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.userForm.controls[controlName].hasError(errorName);
  };
  getUserList = (): void => {
    this.userSubscription$ = this.userServices.getUser().subscribe((result) => {
      this.userList = result;
    });
  };
  saveUser = (userForm) => {
    this.submitted = false;
    this.createUser(userForm);
    this.userForm.reset();
  };

  createUser = (user: User): void => {
    if (this.userIdUpdate == null) {
      if (this.userForm.valid) {
        this.userServices.AddUser(user).subscribe(() => {
          this.submitted = true;
          this.message = 'Record saved Successfully';
          this.getUserList();
          this.userIdUpdate = null;
          this.userForm.reset();
        });
      }
    } else {
      if (this.userForm.valid) {
        user.userID = this.userIdUpdate;
        this.userServices.updateUser(user, user.userID).subscribe(() => {
          this.submitted = true;
          this.message = 'Record Updated Successfully';
          this.getUserList();
          this.userIdUpdate = null;
          this.userForm.reset();
        });
      }
    }
  };
  deleteUser = (userId): void => {
    if (confirm('Are you sure you want to delete this ?')) {
      let massage = '';
      this.userServices.deleteUsers(userId).subscribe(() => {
        this.submitted = true;
        massage = 'Record Deleted Succefully';
        this.getUserList();
        this.userIdUpdate = null;
        this.userForm.reset();
      });
    }
  };
  editUser = (userId?: number): void => {
    this.userServices.getUserByID(userId).subscribe((result) => {
      this.message = null;
      this.submitted = false;
      this.userIdUpdate = result.userID;
      this.userForm.controls['firstName'].setValue(result.firstName);
      this.userForm.controls['lastName'].setValue(result.lastName);
      this.userForm.controls['email'].setValue(result.email);
      this.userForm.controls['mobile'].setValue(result.mobile);
      // this.userForm.controls['gender'].setValue(result.gender);
      // this.userForm.controls['isActive'].setValue(result.isActive);
    });
  };
  public customSort = (event) => {
    // console.log(event);
  };
  resetForm = (): void => {
    this.userForm.reset();
    this.message = null;
    this.submitted = false;
  };

  onCancel(): void {
    this.userForm.reset();
  }
}
