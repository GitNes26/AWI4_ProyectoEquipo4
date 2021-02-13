import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validator, Form, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'
import { group } from '@angular/animations';

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
      pwd: new FormControl('', [Validators.required,Validators.min(3)]),
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
    const value = this.formG.value;
    console.log(value);
  }

}
