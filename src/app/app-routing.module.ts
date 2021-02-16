import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './Components/user/user.component'
import { ProductComponent } from './Components/product/product.component'
import { CommentComponent } from './Components/comment/comment.component'
import { PageNoFoundComponent } from './Components/page-no-found/page-no-found.component'
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signUp' , component: SignUpComponent },
  { path: 'users' , component: UserComponent },
  { path: 'products' , component: ProductComponent },
  { path: 'comments' , component: CommentComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // redireccion por default a INDEX
  { path: '**', component: PageNoFoundComponent }, // pagina que se muestra si no encuentra ruta
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
