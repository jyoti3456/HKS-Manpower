import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userFormm: FormGroup = this.formBuilder.group({
    // userName: [''],
    // password: ['']
    email: ['', [
      Validators.required,
      Validators.pattern(/^(?!\.|\-)(?!.*?(\.\.|\-\-|\.\-|\-\.))(?!.*(\.|\-)@)(?!.*@(\.|\-))[\w.\-]+@{1}[\w.]+[.]{1}[a-zA-Z]{2,5}$/),
      Validators.maxLength(30),
      Validators.minLength(7)
    ]],
    password: ['', [
      Validators.required,
      Validators.maxLength(30),
      Validators.minLength(8)
    ]]
  })

  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    localStorage.removeItem('isloggedIn')
  }


  authenticate() {
    debugger
      let uname = this.userFormm.value.email;
      let pswd = this.userFormm.value.password;
    if(uname && pswd){
      // let pattern = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
      let pattern = new RegExp("^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$");
      let valid = pattern.test(this.userFormm.value.email);
      if(valid){
        localStorage.setItem('isloggedIn','true')
        this.router.navigate(['dashboard']);
      }
      else{
        alert("Please enter valid Email-Id")
      }
    }
    else{
      alert("Email & password is mandatory field")
    }
  }

  yauthenticate(){
    // localStorage.removeItem('isloggedIn')
    let uname = this.userFormm.value.email;
    let pswd = this.userFormm.value.password;
    debugger;
    if(uname == 'admin' && pswd == 'admin@1234'){
      this.router.navigate(['dashboard']);
      localStorage.setItem('isloggedIn','true')
    }
    else{
      alert("Incorrect email-id or password")
    }
  }

}
