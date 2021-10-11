import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SearchBooksV1 } from "./search-books-v1/search-books-v1.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { SearchBooksV2ByAuthors } from './search-books-v2-byAuthors/search-books-v2-byAuthors.component';
import { SearchBooksV3IntesaStyleComponent } from './search-books-v3-intesa-style/search-books-v3-intesa-style.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "searchBooksV1", component: SearchBooksV1 },
  { path: "searchByAuthor", component:  SearchBooksV2ByAuthors},
  { path: "searchByAuthorIS", component:  SearchBooksV3IntesaStyleComponent},


  // otherwise redirect to home
  { path: "**", redirectTo: "login" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
