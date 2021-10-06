import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

//IMPORTO IL JSON PER POTERLO USARE IN PAGINA
import users from '../_services/users.json';

// IMPORT PER IL REDIRECT DELLE PAGINE [pt.1]
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  // AGGIUNTA "private router: Router" ALL'INTERNO DEL COSTRUTTORE PER IL REDIRECT DELLA PAGINA NELLA FUNZIONE SUBMIT [pt.2]
  constructor(public router: Router) {

  }

  ngOnInit() {

  }

  //usersList sarà l'array di oggetti che potri usare con l'*ngFor e dovrà avere la stessa struttura del json
  usersList: {
    user: String,
    email: String,
    pwd: String
  }[] = users;


  // VARIABILI USATE NELLA FUNZIONE SUBMIT PER RECUPERARE I DATI DALL'INPUT
  username: string;
  email: string;
  pwd: string;

  // VARIABILI USATE NELLA FUNZIONE SUBMIT PER GENERARE IL BANNER LOGIN ERRATO E BENVENUTO
  error = 0;
  spinner = false;
  errorState = false;
  errorStateEmpty = false;
  welcome = false;
  userSession: boolean = true;

  submit() {

    const usernameInput = this.username;
    const pwdInput = this.pwd;
    // CONTROLLO STAMPE INPUT E RICERCA JSON
    // console.log("user is " + usernameInput,"\n",
    //             "email is " + emailInput,"\n",
    //             "password is " + pwdInput,"\n",
    //             "JSON utenti:" + users[0].email,
    //             );

    //attiva il login spinner
    this.spinner = true;


    // CICLA IL JSON
    for (let i = 0; i < users.length; i++) {

      // [test]CICLA TUTTI GLI UTENTI; STESSA COSA POTRAI FARLA CON IL RESTO DELLE CHIAVI DEL JSON
      // console.log(users[i].user);

      // [ciclo] controlla se gli input iniziali so vuoti o meno
      if ((<HTMLInputElement>document.getElementById('floatingPassword')).value == '' || (<HTMLInputElement>document.getElementById('floatingInput')).value == '') {
        this.spinner = false;
        this.error = 0;
        this.errorStateEmpty = true;

      }
      // [ciclo] SE TROVA CORRISPONDENZE CON TUTTI E 3 I CAMPI DI INPUT STAMPA OK E SI FERMA ALTRIMENTI AUMENTA IL COUNTER error  DI 1
      // .replace(/\s+/g, '') serve ad eliminare gli spazi bianchi prima, dopo o dentro una stringa
      else if (users[i].user == usernameInput.replace(/\s+/g, '') && users[i].pwd == pwdInput.replace(/\s+/g, '')) {

        // per far sparire il banner di errore in caso di successivo login corretto
        this.errorState = false;
        this.errorStateEmpty = false;

        // timeout per finto caricamento
        setTimeout(() => {
          // termina la visualizzazione dello spinner login
          this.spinner = false;

          // se welcome è true parte l'ngIf nell'html
          this.welcome = true;

          // REDIRECT SULLA HOME AD AVVENUTO LOGIN [pt.3]
          // this.router.navigate(['/home']);
        }, 1500);

        // simulazione delay reindirizzamento alla home
        // setTimeout(() => {
          // REDIRECT SULLA HOME AD AVVENUTO LOGIN [pt.3]
          this.router.navigate(['/home']);
          console.log(this.userSession);
          this.userSession = true;
          console.log(this.userSession);

        // }, 4500);

        break

      } else {
        this.error++;
      }

      // SE CICLA TUTTO IL JSON E NON TROVA CORRISPONDENZE CON GLI UTENTI ALLORA STAMPA UN MESSAGGIO DI ERRORE
      if (this.error == users.length) {

        // scomparsa dopo un secondo dello spinner ed azzera in contatore degli utenti non trovati
        setTimeout(() => {
          this.spinner = false;
          this.error = 0;
        }, 1000);

        // azzera i valori degli input dopo 1.5 secondi e stampa un messaggio di errore eliminando l'altro (errore campi vuoti)
        setTimeout(() => {
          //per accedere all'id con il typescript bisogna aggiungere (<HTMLInputElement>)
          (<HTMLInputElement>document.getElementById('floatingInput')).value = '';
          (<HTMLInputElement>document.getElementById('floatingPassword')).value = '';
          this.errorState = true;
          this.errorStateEmpty = false;
          // console.log(this.errorState);
        }, 1500);
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

