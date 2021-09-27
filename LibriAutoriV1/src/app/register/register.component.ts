import { Component, OnInit } from '@angular/core';

//IMPORTO IL JSON PER POTERLO USARE IN PAGINA
import users from '../_services/users.json';

// IMPORT PER IL REDIRECT DELLE PAGINE [pt.1]
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // AGGIUNTA "private router: Router" ALL'INTERNO DEL COSTRUTTORE PER IL REDIRECT DELLA PAGINA NELLA FUNZIONE SUBMIT [pt.2]
  constructor(public router: Router) { }

  ngOnInit() {
  }

  //usersList sarà l'array di oggetti che potrai usare con l'*ngFor e dovrà avere la stessa struttura del json
  usersList: {
    firstName: String,
    lastName: String,
    user: String,
    email: String,
    pwd: String
  }[] = users;


  // VARIABILI USATE NELLA FUNZIONE SUBMIT PER RECUPERARE I DATI DALL'INPUT
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  pwd: string;
  pwdRepeat: string;

  // VARIABILI USATE NELLA FUNZIONE SUBMIT PER GENERARE IL BANNER LOGIN ERRATO E BENVENUTO
  error = 0;
  errorState = false;
  welcome = false;
  spinner = false;

  register() {

    const usernameInput = this.username;
    const emailInput = this.email;
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

      // CICLA TUTTI GLI UTENTI; STESSA COSA POTRAI FARLA CON IL RESTO DELLE CHIAVI DEL JSON
      // console.log(users[i].user);

      // SE TROVA CORRISPONDENZE CON TUTTI E 3 I CAMPI DI INPUT STAMPA OK E SI FERMA ALTRIMENTI AUMENTA IL COUNTER error  DI 1
      if (users[i].user == usernameInput && users[i].pwd == pwdInput) {//users[i].email == emailInput &&

        //per far sparire il banner di errore in caso di successivo login corretto
        this.errorState = false;

        //timeout per finto caricamento
        setTimeout(() => {
          //termina la visualizzazione dello spinner login
          this.spinner = false;

          // se welcome è true parte l'ngIf nell'html
          this.welcome = true;

          // REDIRECT SULLA HOME AD AVVENUTO LOGIN [pt.3]
          // this.router.navigate(['/home']);
        }, 1500);

        //simulazione delay reindirizzamento alla home
        setTimeout(() => {
          // REDIRECT SULLA HOME AD AVVENUTO LOGIN [pt.3]
          this.router.navigate(['/home']);
        }, 4500);

        break

      } else {
        this.error++;
      }

      // SE CICLA TUTTO IL JSON E NON TROVA CORRISPONDENZE CON GLI UTENTI ALLORA STAMPA UN MESSAGGIO DI ERRORE
      if (this.error == users.length) {


        setTimeout(() => {
          this.spinner = false;
          this.error = 0;
        }, 1000);

        setTimeout(() => {
          //per accedere all'id con il typescript bisogna aggiungere (<HTMLInputElement>)
          (<HTMLInputElement>document.getElementById('floatingInput')).value = '';
          (<HTMLInputElement>document.getElementById('floatingPassword')).value = '';
          this.errorState = true;
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
