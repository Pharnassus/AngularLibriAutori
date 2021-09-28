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
  errorState = false;
  spinner = false;

  searchBookFunction(){

    this.spinner = true;

  }

}
