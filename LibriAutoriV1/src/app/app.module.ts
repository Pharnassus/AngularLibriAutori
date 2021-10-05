import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MinispinnerComponent } from './minispinner/minispinner.component';
import { SearchByAuthorComponent } from './search-by-author/search-by-author.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MinispinnerComponent,
    SearchByAuthorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        { path: "login", component: LoginComponent },
        { path: "home", component: HomeComponent },
        { path: "register", component: RegisterComponent },
        { path: "searchByAuthor", component:  SearchByAuthorComponent},
      ]
    ),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



