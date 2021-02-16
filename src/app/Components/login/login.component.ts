import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validator, Form, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'
import { User } from '../../Models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formG:FormGroup

  constructor(private formBuilder:FormBuilder) {
    this.buildForm()
   }

  ngOnInit(): void {
  }

  private buildForm() {
    this.formG = this.formBuilder.group({
      user: ['', [Validators.required]],
      pwd: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });

    // this.formG.valueChanges
    // .pipe(debounceTime(1000))
    // .subscribe(value => {
    //   console.log(value)
    // })
  }

  ValidateErrorTextField(tf:string){
    return (this.formG.get(tf).errors && this.formG.get(tf).touched)
  }

  ValidateTextField(tf:string){
    return (this.formG.get(tf).invalid && this.formG.get(tf).touched)
  }

  save(event: Event) {
    event.preventDefault();
    if (this.formG.valid){ // verifica las validaciones de los campos
      const value = this.formG.value;
      console.log(value);
    } else { // si no ha sido tocado ningun campo, marcar como tocado para arrojar errores
      this.formG.markAllAsTouched()
    }
  }

}