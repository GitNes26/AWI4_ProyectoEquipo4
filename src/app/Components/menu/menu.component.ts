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

  sessionInit = false

  constructor(private authService:AuthService, private router:Router) {
    if (localStorage.getItem('myToken') != "null") {
      console.log('sesion iniciada | Menu | '+localStorage)
      console.log(this.sessionInit)
      this.sessionInit = true
      console.log('sesion iniciada | Menu | sesion'+ this.sessionInit)
    }else {
      this.sessionInit = false
    }
    console.log('if: '+this.sessionInit)
   }

  ngOnInit(): void {
  }

  logout(){
    timeMessage('Cerrando Sesion...',1500).then(() => {
      localStorage.clear()
      this.sessionInit = false
      console.log('en metodo logout', this.sessionInit, localStorage)
      this.router.navigate(['/login'])
    })
  }

}