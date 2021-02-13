import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './Components/users/users.component'
import { ProductsComponent } from './Components/products/products.component'
import { CommentsComponent } from './Components/comments/comments.component'
import { PageNoFoundComponent } from './Components/page-no-found/page-no-found.component'
import { LoginComponent } from './Components/login/login.component';
import { SingUpComponent } from './Components/sing-up/sing-up.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'singUp' , component: SingUpComponent },
  { path: 'users' , component: UsersComponent },
  { path: 'products' , component: ProductsComponent },
  { path: 'comments' , component: CommentsComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // redireccion por default a INDEX
  { path: '**', component: PageNoFoundComponent }, // pagina que se muestra si no encuentra ruta
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
