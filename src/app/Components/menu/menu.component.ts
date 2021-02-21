import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { timeMessage } from '../../Functions/Alerts';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  sesionInit = false

  constructor(private authService:AuthService, private router:Router) {
    if (localStorage.getItem('myToken') != 'null') {
      console.log('sesion iniciada | Menu')
      console.log(this.sesionInit)
      this.sesionInit = true
    }else {
      this.sesionInit = false
    }
    console.log(this.sesionInit)
   }

  ngOnInit(): void {
  }

  logout(){
    timeMessage('Cerrando Sesion...',1500).then(() => {
      localStorage.setItem('myToken',"null")
      this.sesionInit = false
      console.log('en metodo logout', this.sesionInit, localStorage)
      this.router.navigate(['/login'])
    })
  }

}
