import { Component, OnInit } from '@angular/core';

//IMPORTO IL JSON PER POTERLO USARE IN PAGINA
import books_authors from '../_services/books_authors.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  testLog = true;
  ngOnInit() {
    console.log(this.testLog);
    this.testLog;
  }

  // struttura json libri e autori
  books_authorsList: {
    name: String,
    author: String,
    genre: String,
    publish_date: String,
  }[] = books_authors;

  // VARIABILI USATE NELLA FUNZIONE SUBMIT PER RECUPERARE I DATI DALL'INPUT
  searchBookInput: string;

  // VARIABILI USATE NELLA FUNZIONE SUBMIT PER GENERARE I BANNER ERROR o BENVENUTO
  // test : boolean;
  error = 1;
  counterJson: boolean;
  cardsShow = false;
  spinner = false;
  //chiedi
  arrayBooks: string[] = [];

  //[funzione al click dentro l'input]
  //cambia la label e imposta la ricerca a null cosi da poter entrare nel 3° if piu in basso
  inputFunctionFocus() {
    (<HTMLInputElement>document.getElementById('m_labelError')).innerHTML = 'Start your search';
    this.searchBookInput = null;
  }

  searchBookFunction() {
    //rinomino le variabili per una migliore lettura
    let searchBookInput = this.searchBookInput;

    //se non dovesse entrare il primo if nel for questo counter true ti permetterà di entrare nell'if successivo
    this.counterJson = true;


    //[ciclo] cancella l'array ad ogni click cosi da non duplicarlo
    if (this.arrayBooks.length >= 0) {
      while (this.arrayBooks.length) {
        this.arrayBooks.pop();
      }
    }


    //[ciclo] cicla il json
    for (let i = 0; i < books_authors.length; i++) {

      //[ciclo] evita l'errore in console che genera se parte la ricerca con l'input vuoto interrompendo il ciclo in partenza
      //[ciclo] prende in considerazione l'input se è minore di 3 blocca tutto
      if (
        searchBookInput == null ||
        (searchBookInput).length <= 3
      ) {
        //azzerato il valore dell'input e cambiata la label, porta il counterJson a false cosi che dopo il break non entri nell'if dopo il ciclo for
        (<HTMLInputElement>document.getElementById('m_searchBook')).value = '';
        (<HTMLInputElement>document.getElementById('m_labelError')).innerHTML = 'Minimum 3 Characters!';
        this.counterJson = false;
        break
      }

      //[ciclo] controlla e valida l'input (è il ciclo piu complesso)
      if (
        //prende l'input, lo trasforma in minuscolo, toglie gli spazi e confronta con un match nel json a cui vengono applicate le stesse regole
        (searchBookInput).toLowerCase().replace(/[\s+]/g, '') == ((books_authors[i].name).toLowerCase().replace(/[\s+]/g, '')) ||
        (searchBookInput).toLowerCase().replace(/[\s+]/g, '') == ((books_authors[i].author.name).toLowerCase().replace(/[\s+]/g, '')) ||
        (searchBookInput).toLowerCase().replace(/[\s+]/g, '') == ((books_authors[i].author.gender).toLowerCase().replace(/[\s+]/g, '')) ||
        (searchBookInput).toLowerCase().replace(/[\s+]/g, '') == ((books_authors[i].genre).toLowerCase().replace(/[\s+]/g, '')) ||
        (searchBookInput).toLowerCase().replace(/[\s+]/g, '') == ((books_authors[i].publish_date).toLowerCase().replace(/[\s+]/g, '')) ||
        //la funzione includes è booleana: se la propr name nel json (in minuscolo e senza spazi) include l'input con le stesse regole allora è true
        ((books_authors[i].name).toLowerCase().replace(/[\s+]/g, '').includes((searchBookInput).toLowerCase().replace(/[\s+]/g, ''))) ||
        ((books_authors[i].author.name).toLowerCase().replace(/[\s+]/g, '').includes((searchBookInput).toLowerCase().replace(/[\s+]/g, ''))) ||
        ((books_authors[i].publish_date).toLowerCase().replace(/[\s+]/g, '').includes((searchBookInput).toLowerCase().replace(/[\s+]/g, '')))
      ) {
        //fa partile lo spinner animandolo
        this.spinner = true;
        //fa sparire l'html delle card prima di farle ricomparire dopo
        this.cardsShow = false;
        //switcha in false se la ricerca va a buon fine e non entra così nell'if seguente
        this.counterJson = false;

        //PUSH IN UN ARRAY SECONDARIO CREATO PER LA VISUALIZZAZIONE DOPO IL FILTRO
        this.arrayBooks.push(books_authors[i]);
        console.log(this.arrayBooks);

        //solo per grafica: ritarda di Xsecondi la visualizzazione
        setTimeout(() => {
          this.spinner = false;
          this.cardsShow = true;
        }, 1000);

      }
    }

    //[ciclo] se non entra nel primo if azzera l'input e cambia il placeholder(label). Inoltre fa sparire le ricerche in pagina
    if (this.counterJson) {
      //per accedere all'id con il typescript bisogna aggiungere (<HTMLInputElement>)
      (<HTMLInputElement>document.getElementById('m_searchBook')).value = '';
      (<HTMLInputElement>document.getElementById('m_labelError')).innerHTML = 'Book or Author not found...';
      this.cardsShow = false;
    }

    if (searchBookInput == null) {
      (<HTMLInputElement>document.getElementById('m_searchBook')).value = '';
      (<HTMLInputElement>document.getElementById('m_labelError')).innerHTML = 'A research parameter is needed';
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

  // flipBook() {

  //   let pages = document.getElementsByClassName('page');
  //   let page1id = (<HTMLInputElement>document.getElementById('m_page1')).innerHTML;

  //   // if (page1id == 'ciao' ) {
  //   //   pages[1].classList.add('flipped');
  //   //   console.log(pages[1]);

  //   // }



  //   for (var i = 0; i < pages.length; i++) {

  //       if (page1id == 'ciao' ) {
  //         pages[i].classList.remove('flipped');
  //         pages[i].classList.remove('flipped');
  //         break

  //       }
  //       else {
  //         console.log(pages[i].classList);
  //         pages[i].classList.add('flipped');
  //         pages[i].classList.add('flipped');

  //         break
  //       }

  //   }
  // }

}
