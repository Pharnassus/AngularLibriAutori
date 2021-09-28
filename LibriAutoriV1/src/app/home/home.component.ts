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
  searchBookInput: string;

  // VARIABILI USATE NELLA FUNZIONE SUBMIT PER GENERARE I BANNER ERROR o BENVENUTO
  // test : boolean;
  error = 1;
  counterJson : boolean;
  cardsShow = false;
  spinner = false;
  arrayBooks: string[] = [];

  searchBookFunction() {

    let searchBookInput = this.searchBookInput;

    //se non dovesse entrare il primo if questo counter true ti permetterà di entrare nell'if successivo
    this.counterJson = true;
    (<HTMLInputElement>document.getElementById('m_labelError')).innerHTML = 'Search result for';


    //[ciclo] cicla il json
    for (let i = 0; i < books_authors.length; i++) {


      if (
        //prende l'input, lo trasforma in minuscolo, toglie gli spazi e confronta con un match nel json a cui vengono applicate le stesse regole
        (searchBookInput).toLowerCase().replace(/\s+/g, '') == ((books_authors[i].name).toLowerCase().replace(/\s+/g, '')) ||
        (searchBookInput).toLowerCase().replace(/\s+/g, '') == ((books_authors[i].author.name).toLowerCase().replace(/\s+/g, '')) ||
        //la funzione includes è booleana: se la propr name nel json (in minuscolo e senza spazi) include l'input con le stesse regole allora è true
        ((books_authors[i].name).toLowerCase().replace(/\s+/g, '').includes((searchBookInput).toLowerCase().replace(/\s+/g, ''))) ||
        ((books_authors[i].author.name).toLowerCase().replace(/\s+/g, '').includes((searchBookInput).toLowerCase().replace(/\s+/g, '')))
        ) {
        //cancella l'array ad ogni click cosi da non duplicarlo
        this.arrayBooks.pop();
        this.spinner = true;
        //finge di ricaricare le card
        this.cardsShow = false;
        //switcha in false se la ricerca va a buon fine e non genera così errori nell'if seguente
        this.counterJson = false;

        //pusha la ricerca in un array provvisorio istanziato prima
        this.arrayBooks.push(books_authors[i]);
        console.log(this.arrayBooks);

        //solo per grafica: ritarda di mezzo secondo la visualizzazione
        setTimeout(() => {
          this.spinner = false;
          this.cardsShow = true;
        }, 500);

      }

      //[ciclo] se non entra nel primo if azzera l'input e cambia il placeholder(label). Inoltre fa sparire le ricerche in pagina
      if (this.counterJson) {
        //per accedere all'id con il typescript bisogna aggiungere (<HTMLInputElement>)
        (<HTMLInputElement>document.getElementById('m_searchBook')).value = '';
        (<HTMLInputElement>document.getElementById('m_labelError')).innerHTML = 'Book or Author not found...';
        this.cardsShow = false;
      }

    }

    //VALIDAZIONI FORM BOOTSTRAP
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })

  }

}
