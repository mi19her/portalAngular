import { Injectable } from '@angular/core';
import Auth from '@aws-amplify/auth';
import { AmplifyService } from 'aws-amplify-angular';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { resolve } from 'dns';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})

export class AuthServicesService {
  public loggedIn: boolean;
  codeSend = false;
  obj: any;

  signedIn: boolean;
  user: any;
  greeting: string;
  constructor(private amplifyService: AmplifyService) {
    this.amplifyService.authStateChange$
      .subscribe(authState => {
        console.log(authState, 'stateee');
        this.signedIn = authState.state === 'signedIn';
        if (!authState.user) {
          this.user = null;
        } else {
          this.user = authState.user;
          this.greeting = 'Hello ' + this.user.username;
        }
      });
  }

  signIn(username: string, password: string): Promise<CognitoUser | any> {
    return new Promise((resolve, reject) => {
      Auth.signIn(username, password)
        .then((user: CognitoUser | any) => {
          this.loggedIn = true;
          console.log(user, 'user');
          resolve(user);
        }).catch((error: any) => reject(error));
    });
  }

  firstpass(user: CognitoUser | any, newPassword: string): Promise<CognitoUser | any> {
    return new Promise((resolve, reject) => {
      Auth.completeNewPassword(user, newPassword, user.challengeParam.requiredAttributes)
        .then((data) => {
          console.log(data, 'dataaa');
          resolve(data);
        }).catch((error: any) => reject(error));
    });
  }

  forgot(username: string): Promise<any> {
    return new Promise((resolve, reject) => {
      Auth.forgotPassword(username)
        .then((data: any) => {
          this.codeSend = true;
          this.loggedIn = false;
          console.log(data, 'forgot');
          resolve();
        }).catch((error: any) => console.error(error, 'errorrrr'));
    });
  }
}
