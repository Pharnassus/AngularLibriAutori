import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

//IMPORTO IL JSON PER POTERLO USARE IN PAGINA
import searchByAuthors from '../_services/searchByAuthors.json';

@Component({
  selector: 'app-search-books-v3-intesa-style',
  templateUrl: './search-books-v3-intesa-style.component.html',
  styleUrls: ['./search-books-v3-intesa-style.component.scss']
})
export class SearchBooksV3IntesaStyleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // struttura json libri e autori
  searchByAuthorsList: {
    name: String,
    author: String,
    genre: String,
    publish_date: String,
  }[] = searchByAuthors;

  // VARIABILI USATE NELLA FUNZIONE SUBMIT PER RECUPERARE I DATI DALL'INPUT
  searchBookInput: string;
  modalBook: string;

  // VARIABILI USATE NELLA FUNZIONE SUBMIT PER GENERARE I BANNER ERROR o BENVENUTO
  arrayBooks: string[] = [];
  error: number = 1;
  counterJson: boolean;
  cardsShow: boolean = false;
  coverCards: boolean = false;
  spinner: boolean = false;
  userSession: boolean = true;


  // FUNZIONI DELLA RICERCA LIBRI ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
    for (let i = 0; i < searchByAuthors.length; i++) {

      //[ciclo] evita l'errore in console che genera se parte la ricerca con l'input vuoto interrompendo il ciclo in partenza
      //[ciclo] prende in considerazione l'input se è minore di 3 blocca tutto
      if (
        searchBookInput == null ||
        (searchBookInput).length < 3
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
        (searchBookInput).toLowerCase().replace(/[\s+]/g, '') == ((searchByAuthors[i].debug).toLowerCase().replace(/[\s+]/g, '')) ||
        (searchBookInput).toLowerCase().replace(/[\s+]/g, '') == ((searchByAuthors[i].author.name).toLowerCase().replace(/[\s+]/g, '')) ||
        (searchBookInput).toLowerCase().replace(/[\s+]/g, '') == ((searchByAuthors[i].author.gender).toLowerCase().replace(/[\s+]/g, '')) ||
        //la funzione includes è booleana: se la propr name nel json (in minuscolo e senza spazi) include l'input con le stesse regole allora è true
        ((searchByAuthors[i].author.name).toLowerCase().replace(/[\s+]/g, '').includes((searchBookInput).toLowerCase().replace(/[\s+]/g, '')))
      ) {
        //fa partile lo spinner animandolo
        this.spinner = true;
        //fa sparire l'html delle card prima di farle ricomparire dopo
        this.cardsShow = false;
        //switcha in false se la ricerca va a buon fine e non entra così nell'if seguente
        this.counterJson = false;

        //PUSH IN UN ARRAY SECONDARIO CREATO PER LA VISUALIZZAZIONE DOPO IL FILTRO
        this.arrayBooks.push(searchByAuthors[i]);
        // console.log(this.arrayBooks);

        //solo per grafica: ritarda di Xsecondi la visualizzazione
        setTimeout(() => {
          this.spinner = false;
          this.cardsShow = true;
        }, 500);

        //ritarda la comparsa delle card per un effetto grafico nel caricamento
        setTimeout(() => {
          this.coverCards = true;
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


    //validazione bootstrap
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form: { addEventListener: (arg0: string, arg1: (event: any) => void, arg2: boolean) => void; checkValidity: () => any; classList: { add: (arg0: string) => void; }; }) {
        form.addEventListener('submit', function (event: { preventDefault: () => void; stopPropagation: () => void; }) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })

  }



  // SEZIONE ACCORDEON ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // variabili
  testFunction: boolean;
  accordeonVisibility: boolean = false;
  accordeonBookArray: string[] = [];

  accordeonFunction(item) {

    let authorName = item.author.name;
    console.log(authorName);

    //[ciclo] cancella l'array ad ogni click cosi da non duplicarlo
    if (this.accordeonBookArray.length >= 0) {
      while (this.accordeonBookArray.length) {
        this.accordeonBookArray.pop();
      }
    }

    for (let i = 0; i < searchByAuthors.length; i++) {

      if (searchByAuthors[i].author.name == authorName) {

        // riempie l'array temporaneo con le informazioni che mi servono
        this.accordeonBookArray.push(searchByAuthors[i]);

        this.accordeonVisibility = true;

        console.log(this.accordeonBookArray);

      }
    }
  }

  exitAccordeonFunction() {
    this.accordeonVisibility = false;
  }



  // SEZIONE MODAL ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  modalVisibility: boolean = false;
  modalBookArray: string[] = [];
  // manipolare il dom col typescript [part_1]; nell'html, all'interno del tag ho aggiunto #m_bookNameModel
  @ViewChild('m_bookNameModel', { read: ElementRef }) m_bookNameModel: ElementRef<HTMLElement>

  openModal(pippo) {

    // let bookName = (<HTMLInputElement>document.getElementById('m_bookNameModel')).innerHTML;
    // manipolare il dom col typescript [part_2]; è la stessa roba che ho scritto sopra ma in typescript
    // let bookName = this.m_bookNameModel.nativeElement.innerHTML;

    // pippo contiene l'itnero oggetto books passato nell'html e con .name filtro la chiave che mi serve
    let bookName = pippo.name;
    console.log("nome cliccato: " + bookName);


    //[ciclo] cancella l'array ad ogni click cosi da non duplicarlo
    if (this.modalBookArray.length >= 0) {
      while (this.modalBookArray.length) {
        this.modalBookArray.pop();
      }
    }

    //[ciclo] ciclo tutto il json
    for (let i = 0; i < searchByAuthors.length; i++) {
      //[ciclo] per ogni posizione degli oggetti del json prendo l'array di oggetti book e lo ciclo partendo da 0 (j)
      for (let j = 0; j < searchByAuthors[i].books.length; j++) {
        //[ciclo] grazie al j posso verificare ogni posizione dell'array di oggetti book e filtrare per nome; se trova quello che mi serve e lo trova sicuro allora pusha nell'array

        // let bookName = this.m_bookNameModel.nativeElement.innerHTML;
        if (bookName == searchByAuthors[i].books[j].name) {

          // riempie l'array temporaneo con le informazioni che mi servono
          this.modalBookArray.push(searchByAuthors[i].books[j]);
          // fa apparire il modal
          this.modalVisibility = true;
          // fa sparire le carte
          this.cardsShow = false;

        }
      }
    }
  }

  exitModal() {
    // fa apparire il modal
    this.modalVisibility = false;
    // fa sparire le carte
    this.cardsShow = true;
  }
}
