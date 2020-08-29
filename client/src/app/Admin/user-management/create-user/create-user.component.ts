import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { UserService } from '../common/user.service';
import { Router } from '@angular/router';
import { User } from '../common/user.interface';
import { PasswordValidation } from '../../../Shared/Common/must-match.validator';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  title = 'Create User';
  userForm: FormGroup;
  submitted = false;
  allUsers: Observable<User[]>;
  userId = 0;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      email: new FormControl('', [Validators.required, Validators.maxLength(60), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      mobile: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      // password: ['', [Validators.required, Validators.minLength(6)]],
      // confirmPassword: ['', Validators.required]
      // }, {
      // validator: PasswordValidation.MatchPassword

    });
    this.getUser();
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.userForm.controls[controlName].hasError(errorName);
  }
  getUser(): void {
    this.allUsers = this.userService.getUser();
  }
  // getUserByID(userId: string) {
  //   this.userService.getUserByID(userId).subscribe(result => {
  //     console.log(result);
  //     // this.userId = result.userId;
  //     // this.userForm.controls['firstName'].setValue(result.values.firstName);
  //     // this.userForm.controls['lastName'].setValue(result.values.lastName);
  //     // this.userForm.controls['email'].setValue(result.values.email);
  //   })
  // }
  saveUser(): void {
    this.submitted = true;
    if (this.userForm.invalid)
    {
      return;
    }
    else
    {
      const newUser: any = {
        firstName: this.userForm.get('firstName').value,
        lastName: this.userForm.get('lastName').value,
        email: this.userForm.get('email').value,
        password: this.userForm.get('password').value,
        gender: this.userForm.get('gender').value,
        mobile: this.userForm.get('mobile').value,
        isActive: this.userForm.get('isActive').value,
        createdBy: 1,
        createdDate: new Date()
      };
      this.userService.AddUser(newUser).subscribe(() => {

        this.router.navigateByUrl('/UserManagement/user-list');
      });
    }
  }

  onCancel(): void {
    // this.location.back();
  }
}
