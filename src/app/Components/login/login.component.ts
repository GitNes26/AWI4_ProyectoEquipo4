import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validator, Form, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'
import { User } from '../../Models/user';
import { AuthService } from '../../Services/auth.service';
import { errorMessage, timeMessage, successDialog } from '../../Functions/Alerts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formG:FormGroup
  user:User

  constructor(private formBuilder:FormBuilder, private authService:AuthService, private router:Router) {
    this.buildForm()
   }

  ngOnInit(): void {
  }

  private buildForm() {
    this.formG = this.formBuilder.group({
      // username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.required]],
    });
  }

  ValidateErrorTextField(tf:string){
    return (this.formG.get(tf).errors && this.formG.get(tf).touched)
  }

  ValidateTextField(tf:string){
    return (this.formG.get(tf).invalid && this.formG.get(tf).touched)
  }

  save(event: Event) {
    event.preventDefault(); console.log('si entra')
    if (this.formG.valid){ // verifica las validaciones de los campos
      // const value = this.formG.value;  console.log(value);
      this.setData()
      this.authService.login(this.user).subscribe((data:any) => {
        timeMessage('Iniciando...', 1500).then(() => {
          successDialog('Bienvenido').then(() => {
            this.router.navigate(['/comments'])
          })
        })
      }, error => {
        console.log(error)
        errorMessage('Credenciales incorrectas')
      })
    } else { // si no ha sido tocado ningun campo, marcar como tocado para arrojar errores
      this.formG.markAllAsTouched()
    }
  }

  setData() {
    this.user = {
      // id: 1,
      username: '',
      email: this.formG.get('email').value,
      password: this.formG.get('pwd').value,
    }
  }

}