import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { User } from '../user.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public token = '';
  public currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public endpoint: string = environment.apiEndpoint + '/api/auth/login';
  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('loggInUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get LoggInUserValue(): User {
    return this.currentUserSubject.value;
  }
  public Login = (login: User) => {
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post<User>(this.endpoint, login, { headers })
      .pipe(
        map((data) => {
          debugger;
          if (data.token != null) {
            if (data.role === 'user') {
              localStorage.setItem('user', JSON.stringify({ data }));
              this.currentUserSubject.next(data);
              return data;
            } else if (data.role === 'admin') {
              localStorage.setItem('admin', JSON.stringify({ data }));
              this.currentUserSubject.next(data);
              return data;
            } else {
              localStorage.setItem('guest', JSON.stringify({ data }));
              this.currentUserSubject.next(data);
              return data;
            }
          }
        }),
        catchError(this.handleError)
      );
  };
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
