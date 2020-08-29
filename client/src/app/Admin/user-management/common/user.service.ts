import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { User } from './user.interface';

@Injectable()
export class UserService {
  endpoint: string = environment.apiEndpoint + '/api/users';
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private httpClient: HttpClient) {}

  AddUser(users: User): Observable<User> {
    const apiUrl = `${this.endpoint}/create`;

    return this.httpClient
      .post<User>(apiUrl, users, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }
  getUser(): Observable<User[]> {
    const apiUrl = `${this.endpoint}/getall`;
    return this.httpClient.get<User[]>(apiUrl);
  }

  getUserByID(userId: number): Observable<User> {
    const apiUrl = `${this.endpoint}/${userId}`;
    return this.httpClient.get<User>(apiUrl);
  }

  updateUser(user: User, userId): Observable<User> {
    const apiUrl = `${this.endpoint}/'update-user'/${userId}`;
    return this.httpClient
      .put<User>(apiUrl, user, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  deleteUsers(userId): Observable<User> {
    const apiUrl = `${this.endpoint}/'delete'/${userId}`;
    return this.httpClient
      .delete<User>(apiUrl)
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
