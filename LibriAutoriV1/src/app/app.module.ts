import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchBooksV1 } from './search-books-v1/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MinispinnerComponent } from './minispinner/minispinner.component';
import { SearchBooksV2ByAuthors } from './search-books-v2-byAuthors/search-by-author.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SearchBooksV1,
    MinispinnerComponent,
    SearchBooksV2ByAuthors,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        { path: "login", component: LoginComponent },
        { path: "home", component: SearchBooksV1 },
        { path: "register", component: RegisterComponent },
        { path: "searchByAuthor", component:  SearchBooksV2ByAuthors},
      ]
    ),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



