import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { User } from '../common/user.interface';
import { UserService } from '../common/user.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit , AfterViewInit {
  title = 'Manage Users';
  displayColumns: string[] = ['firstName', 'lastName', 'email', 'mobile', 'gender', 'isActive'];
  columnsToDisplay: string[] = this.displayColumns.slice();
  userList: User[] = [];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userServices: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUserList();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getUserList(): void {
    this.userServices.getUser().subscribe((result) => {
      this.userList = result;
    });
  }
  addUser(): void {
    this.router.navigate([`/UserManagement/create-user`]);
  }
  editUser(userId): void {

  }
  deleteUser(userId): void { }

}
