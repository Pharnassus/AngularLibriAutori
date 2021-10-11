import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SearchBooksV1 } from "./search-books-v1/search-books-v1.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { SearchBooksV2ByAuthors } from './search-books-v2-byAuthors/search-books-v2-byAuthors.component';


const routes: Routes = [
  { path: "home", component: SearchBooksV1 },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "searchByAuthor", component:  SearchBooksV2ByAuthors},

  // otherwise redirect to home
  { path: "**", redirectTo: "login" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
