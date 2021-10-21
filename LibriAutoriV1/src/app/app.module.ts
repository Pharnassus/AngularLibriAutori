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
import { NavIntesaSanpaoloComponent } from './nav-intesa-sanpaolo/nav-intesa-sanpaolo.component';
import { AdminPrivilegesComponent } from './admin-privileges/admin-privileges.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MinispinnerComponent,
    SearchBooksV1,
    SearchBooksV2ByAuthors,
    SearchBooksV3IntesaStyleComponent,
    NavIntesaSanpaoloComponent,
    AdminPrivilegesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        { path: "login", component: LoginComponent },
        { path: "register", component: RegisterComponent },
        { path: "searchBooksV1", component: SearchBooksV1 },
        { path: "searchByAuthor", component:  SearchBooksV2ByAuthors},
        { path: "searchByAuthorIS", component:  SearchBooksV3IntesaStyleComponent},
      ]
    ),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



