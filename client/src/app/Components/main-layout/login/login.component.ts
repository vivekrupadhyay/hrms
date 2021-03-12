import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
//import { ToasterService } from '../../../Shared/Common/services/toaster.service';
import { LoginService } from '../common/services/login.service';
import { Login } from '../login/common/Login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public loading: boolean;
  public isLoggedIn: boolean;
  @Output() messageEvent = new EventEmitter<boolean>();
  public loginData: Login = { email: null, password: null };
  constructor(
    private loginService: LoginService,
    //private toaster: ToasterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }
  doLogin(): void {
    this.loading = true;
    this.loginService
      .Login(this.loginForm.value)
      .pipe(take(1))
      .subscribe((data) => {
        if (data.token == null && data.role == null) {
          this.loading = false;
          //this.toaster.info('Unauthorise user !!');
          this.router.navigate(['/login']);
        } else if (data.role === 'user') {
          this.loading = false;
          this.isLoggedIn = true;
          this.messageEvent.emit(this.isLoggedIn);
          this.router.navigate(['/dashboard']);
          //this.toaster.success('Success !!');
        } else if (data.role === 'admin') {
          this.loading = false;
          this.router.navigate(['/dashboard']);
        } else {
          this.loading = false;
          // this.toaster.info('Unauthorise user !!');
        }
      });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  };
}
