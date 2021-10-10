import { Component } from '@angular/core';

// IMPORT PER IL JSON
// import users from '../assets/users.json';
import users from './_services/users.json';
import books_authors from './_services/books_authors.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'LibriAutoriV1';

  //usersList sarà l'array di oggetti che potri usare con l'*ngFor e dovrà avere la stessa struttura del json
  usersList: {
    user: String,
    email: String,
    pwd: String
  }[] = users;

  // struttura json libri e autori
  books_authorsList: {
    name: String,
    author: String,
    genre: String,
    publish_date: Date,
  }[] = books_authors;
}
