import { Component, OnInit } from '@angular/core';

//IMPORTO IL JSON PER POTERLO USARE IN PAGINA
import books_authors from '../_services/books_authors.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // struttura json libri e autori
  books_authorsList: {
    name: String,
    author: String,
    genre: String,
    publish_date: Date,
  }[] = books_authors;

  // VARIABILI USATE NELLA FUNZIONE SUBMIT PER RECUPERARE I DATI DALL'INPUT
  searchBook: string;

  // VARIABILI USATE NELLA FUNZIONE SUBMIT PER GENERARE I BANNER ERROR o BENVENUTO
  error = 0;
  cardsShow = false;
  spinner = false;
  arrayBooks = [];

  searchBookFunction(){

    const searchBook = this.searchBook;


    for (let i = 0; i < books_authors.length; i++) {

      if (searchBook == books_authors[i].author.name) {
        this.arrayBooks.pop();
        this.spinner = true;
        this.cardsShow = false;

        this.arrayBooks.push(books_authors[i]);
        console.log(this.arrayBooks);

        setTimeout(() => {
          this.spinner = false;
          this.cardsShow = true;
        }, 500);

      }

    }

  }

}
