import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { AuthService } from 'src/app/services/auth.service';
import IUser from 'src/app/models/user.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {
  name= new FormControl('',[
    Validators.required,
    Validators.minLength(3)
  ])

  inSubmission = false

constructor(
  private auth: AuthService
  ) {
  
}
  email= new FormControl('',[
    Validators.email,
    Validators.required
  ])

    age = new FormControl<number | null>(null,[
      Validators.required,
      Validators.min(18),
      Validators.max(60)
    ])

    password = new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
    ])

    confirm_password= new FormControl('', [
      Validators.required,
    ])

    phone_number= new FormControl('', [
      Validators.required,
      Validators.minLength(13),
      Validators.maxLength(13)
    ])

    alertColor = 'blue'
    showAlert = false
    alertMsg = 'Please wait! Your account is being created. '


  registerForm = new FormGroup ({
    name: this.name,
    email:this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phone_number: this.phone_number

  })
   
  async register() {
    this.showAlert = true
    this.alertMsg = 'Please wait! Your account is being created. '
    this.alertColor = 'blue'
    this.inSubmission = true

    try {
      await this.auth.createUser(this.registerForm.value as IUser)
    } catch(e) {
      console.error(e)

      this.alertMsg = 'An unexpected error occured. Please try again later'
      this.alertColor = 'red'
      this.inSubmission = false
      return
    }
    
    this.alertMsg = 'Success! Your account has been created.'
    this.alertColor = 'green'
  }
}
