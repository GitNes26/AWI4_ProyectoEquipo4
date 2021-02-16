import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { UserComponent } from './Components/user/user.component';
import { ProductComponent } from './Components/product/product.component';
import { CommentComponent } from './Components/comment/comment.component';
import { PageNoFoundComponent } from './Components/page-no-found/page-no-found.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserComponent,
    ProductComponent,
    CommentComponent,
    PageNoFoundComponent,
    LoginComponent,
    SignUpComponent,
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
