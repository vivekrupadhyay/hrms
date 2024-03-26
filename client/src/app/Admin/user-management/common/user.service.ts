import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

import { throwError, Observable, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { User } from './user.interface';

@Injectable()
export class UserService {
  endpoint: string = environment.apiEndpoint + '/api/users';
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  public currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('authToken')).data.token
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get LoggInUserValue(): User {
    return this.currentUserSubject.value;
  }

  getToken() {
    return localStorage.getItem('authToken');
    //return JSON.parse(localStorage.getItem('authToken')).data.token;
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('authToken');
    return authToken !== null ? true : false;
  }

  AddUser(users: User): Observable<User> {
    const apiUrl = `${this.endpoint}/create`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: ` Bearer ${this.currentUserSubject.value.token}`,
    });

    return this.httpClient
      .post<User>(apiUrl, users, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }
  getUser(): Observable<User[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: ` Bearer ${this.currentUserSubject.value.token}`,
    });
    const apiUrl = `${this.endpoint}/getall`;
    return this.httpClient.get<User[]>(apiUrl, { headers: this.headers });
  }

  getUserByID(userId: number): Observable<User> {
    const apiUrl = `${this.endpoint}/${userId}`;
    return this.httpClient.get<User>(apiUrl, { headers: this.headers });
  }

  updateUser(user: User, userId:number): Observable<User> {
    const apiUrl = `${this.endpoint}/'update-user'/${userId}`;
    return this.httpClient
      .put<User>(apiUrl, user, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  deleteUsers(userId:number): Observable<User> {
    const apiUrl = `${this.endpoint}/'delete'/${userId}`;
    return this.httpClient
      .delete<User>(apiUrl, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }
  private handleError = (error: HttpErrorResponse) => {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  };
}
