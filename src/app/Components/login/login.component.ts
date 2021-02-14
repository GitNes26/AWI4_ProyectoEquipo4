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

  constructor() {
    this.buildForm()
   }

  ngOnInit(): void {
  }

  private buildForm() {
    this.formG = new FormGroup({
      user: new FormControl('', [Validators.required]),
      pwd: new FormControl('', [Validators.required,Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });

    // this.formG.valueChanges
    // .pipe(debounceTime(1000))
    // .subscribe(value => {
    //   console.log(value)
    // })
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
