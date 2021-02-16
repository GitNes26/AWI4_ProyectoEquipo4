import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { User } from '../../Models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usersArray: User[] = [
    {/*id:1, name:"Admin", lastName:"Administrador",*/ username:"admin", password:"123", email:"admin@gmail.com"},
    {/*id:2, name:"Nestor", lastName:"Puentes",*/ username:"npuentes", password:"123", email:"npuentes@gmail.com"},
    {/*id:3, name:"Usuario 3", lastName:"Nuevo",*/ username:"usuario", password:"123", email:"usuario@gmail.com"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  selected: User = new User()

  // create(){
  //   if (this.formG.valid){ // verifica las validaciones de los campos
  //     if (this.selected.id == 0) {
  //       this.selected.id = this.usersArray.length + 1
  //       this.usersArray.push(this.selected)
        
  //       this.selected = new User() 
  //     }
  //   } else { // si no ha sido tocado ningun campo, marcar como tocado para arrojar errores
  //     this.formG.markAllAsTouched()
  //   }
  // }

  update(user:User){
    this.selected = user
  }

  // delete(user:User){
  //   
  // }

}
