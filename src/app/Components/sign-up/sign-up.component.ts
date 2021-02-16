import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { User } from '../../Models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  formG:FormGroup

  constructor(private formBuilder:FormBuilder) {
    this.buildForm()
   }

  ngOnInit(): void {
  }

  private buildForm() {
    this.formG = this.formBuilder.group({
      // name: ['', [Validators.required]],
      // lastName: ['', [Validators.required]],
      user: ['', [Validators.required]],
      pwd: ['', [Validators.required, Validators.minLength(3)]],
      pwd2: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  save(event: Event) {
    event.preventDefault()
    if (this.formG.valid){ // verifica las validaciones de los campos
      const values = this.formG.value;
      console.log(values);
      
    } else { // si no ha sido tocado ningun campo, marcar como tocado para arrojar errores
      this.formG.markAllAsTouched()
    }
  }

  ValidateErrorTextField(tf:string){
    return (this.formG.get(tf).errors && this.formG.get(tf).touched)
  }

  ValidateTextField(tf:string){
    return (this.formG.get(tf).invalid && this.formG.get(tf).touched)
  }
  get password2Validate(){
    const pass = this.formG.get('pwd').value
    const pass2 = this.formG.get('pwd2').value

    return pass === pass2 ? false : true
  }

}
