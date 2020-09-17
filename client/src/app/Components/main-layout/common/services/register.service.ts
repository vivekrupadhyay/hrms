import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../user.interface';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  public endpoint: string = environment.apiEndpoint + '/api/auth';
  public headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private httpClient: HttpClient) {}
  AddUser(users: User): Observable<User> {
    const apiUrl = `${this.endpoint}/register`;

    return this.httpClient
      .post<User>(apiUrl, users, { headers: this.headers })
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
