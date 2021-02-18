import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './Components/user/user.component'
import { ProductComponent } from './Components/product/product.component'
import { CommentComponent } from './Components/comment/comment.component'
import { PageNoFoundComponent } from './Components/page-no-found/page-no-found.component'
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { MainComponent } from './Components/main/main.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register' , component: RegisterComponent },
  { path: 'users' , component: UserComponent }, //QUITAR
  { path: 'products' , component: ProductComponent }, //QUITAR
  { path: 'comments' , component: CommentComponent },// QUITAR
  { path: 'main' , component: MainComponent }, //agregar Guard de inicio de sesion.
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // redireccion por default a INDEX
  { path: '**', component: PageNoFoundComponent }, // pagina que se muestra si no encuentra ruta
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
