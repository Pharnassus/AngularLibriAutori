import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SearchBooksV1 } from "./search-books-v1/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { SearchByAuthorComponent } from './search-by-author/search-by-author.component';


const routes: Routes = [
  { path: "home", component: SearchBooksV1 },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "searchByAuthor", component:  SearchByAuthorComponent},

  // otherwise redirect to home
  { path: "**", redirectTo: "login" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
