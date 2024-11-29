import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm=new FormGroup({
    email:new FormControl("adming@mail.com"),
    password: new FormControl("adming1234")
  })
  funIngresar(){}
}
