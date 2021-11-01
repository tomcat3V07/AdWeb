import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router,private auth2: AuthService) { }

  ngOnInit(): void {

  }

  signin(){
    console.log(this.authForm.value);
    this.auth2.signIn(this.authForm.value).subscribe(
      data => {
        if(data.status == true){
          this.router.navigate(['/products']);
        }else{
          alert('Username Or Password is incorrect!');
        }
      },
      err => {
        console.log(err);
        alert('Username or Password is incorrect!');
      }
    );
  }

  signup(){
    console.log(this.authForm.value);
    this.auth2.signUp(this.authForm.value).subscribe(
      data => {
        if(data.status == true){
          this.router.navigate(['/products']);
        }else{
          alert('Sign up successfully');
        }
      },
      err => {
        console.log(err);
        alert('Username or Password is incorrect!');
      }
    );
  }

}