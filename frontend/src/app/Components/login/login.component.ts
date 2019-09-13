import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { HttpService } from '../../Services/http.service'
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  hide = true;
  constructor(private httpService: HttpService,
    private snackbar: MatSnackBar,
    private router: Router) { }

  user: User = new User();

  onClickedLogin() {
    this.user.email = this.email.value;
    this.user.password = this.password.value;

    let userData = {
      'email': this.user.email,
      'password': this.user.password
    }
    console.log("data in login component==>", userData);


    this.httpService.postLogin(userData, 'login').subscribe(
      (res: any) => {
        if (res.status == 200) {
          this.snackbar.open("login Suceessfully", "end now", { duration: 4000 });
        }
        else {
          this.snackbar.open("login failed", "end now", { duration: 4000 });
        }
      },
      err => {
        console.log("error in login component==>", err);
        this.snackbar.open("login failed", "end now", { duration: 4000 });

      }
    );
  }

  ngOnInit() {
  }

}