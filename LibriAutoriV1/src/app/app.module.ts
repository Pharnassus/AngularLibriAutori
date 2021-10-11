import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { MinispinnerComponent } from './minispinner/minispinner.component';
import { SearchBooksV1 } from './search-books-v1/search-books-v1.component';
import { SearchBooksV2ByAuthors } from './search-books-v2-byAuthors/search-books-v2-byAuthors.component';
import { SearchBooksV3IntesaStyleComponent } from './search-books-v3-intesa-style/search-books-v3-intesa-style.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SearchBooksV1,
    MinispinnerComponent,
    SearchBooksV2ByAuthors,
    SearchBooksV3IntesaStyleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        { path: "login", component: LoginComponent },
        { path: "searchBooksV1", component: SearchBooksV1 },
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



