import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { User } from '../../Models/user';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  formG:FormGroup

  constructor() {
    this.buildForm()
   }

  ngOnInit(): void {
  }

  private buildForm() {
    this.formG = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      user: new FormControl('', [Validators.required]),
      pwd: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  save(event: Event) {
    event.preventDefault()
    if (this.formG.valid){ // verifica las validaciones de los campos
      const value = this.formG.value;
      console.log(value);
    } else { // si no ha sido tocado ningun campo, marcar como tocado para arrojar errores
      this.formG.markAllAsTouched()
    }
  }

}
