import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  crendentials= {
    email: '',
    password: ''
  }

  showAlert = false
  alerMsg = 'Please wait! You are being logged in'
  alertColor = 'blue'
  inSubmission = false

  emailRegex = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
  passwordRegex ="/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm"
  
  constructor(private auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  async login() {
    this.showAlert = true
    this.alerMsg = 'Please wait! You are being logged'
    this.alertColor = 'blue'
    this.inSubmission = true

    try {
      await this.auth.signInWithEmailAndPassword(
        this.crendentials.email, this.crendentials.password
      )
    } catch (error) {
      this.inSubmission = false
      this.alerMsg = 'An error occurred. Please try again.'
      this.alertColor = 'red'

      console.log(error)
      return
    }

    this.alerMsg = 'Success! you are now logged in'
    this.alertColor = 'green'
    
  }

}
