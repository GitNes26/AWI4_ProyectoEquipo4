import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './Components/users/users.component';
import { ProductsComponent } from './Components/products/products.component';
import { CommentsComponent } from './Components/comments/comments.component';
import { MenuComponent } from './Components/menu/menu.component';
import { PageNoFoundComponent } from './Components/page-no-found/page-no-found.component';
import { LoginComponent } from './Components/login/login.component';
import { SingUpComponent } from './Components/sing-up/sing-up.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ProductsComponent,
    CommentsComponent,
    MenuComponent,
    PageNoFoundComponent,
    LoginComponent,
    SingUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
