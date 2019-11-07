import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure } from 'firebaseui-angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  returnUrl: string;

  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      retUrl => {
        this.returnUrl = retUrl.returnUrl || '/';
        console.log("You are set to redirected to " + this.returnUrl);
      }
    );
  }



  successCallback(signInSuccessData) {
    console.log("Child Callback, Logged in! Redirecting to " + this.returnUrl);
    this.router.navigateByUrl(this.returnUrl);
  }

  errorCallback(errorData) {
    console.log("Login failure!");

  }
}
