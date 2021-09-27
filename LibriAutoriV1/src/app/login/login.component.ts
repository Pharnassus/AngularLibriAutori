import { Component, OnInit } from '@angular/core';

//IMPORTO IL JSON PER POTERLO USARE IN PAGINA
import users from '../_services/users.json';

// IMPORT PER IL REDIRECT DELLE PAGINE [pt.1]
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // AGGIUNTA "private router: Router" ALL'INTERNO DEL COSTRUTTORE PER IL REDIRECT DELLA PAGINA NELLA FUNZIONE SUBMIT [pt.2]
  constructor(public router: Router) { }

  ngOnInit() {

  }

  //usersList sarà l'array di oggetti che potri usare con l'*ngFor e dovrà avere la stessa struttura del json
  usersList:{
    user: String,
    email: String,
    pwd: String
  }[]=users;


  // VARIABILI USATE NELLA FUNZIONE SUBMIT PER RECUPERARE I DATI DALL'INPUT
  username : number;
  email : string;
  pwd : string;

  // VARIABILI USATE NELLA FUNZIONE SUBMIT PER GENERARE IL BANNER LOGIN ERRATO E BENVENUTO
  error = 0;
  errorState = false;
  welcome = false;
  spinner = false;

  submit() {

    const usernameInput= this.username;
    const emailInput= this.email;
    const pwdInput= this.pwd;
    // CONTROLLO STAMPE INPUT E RICERCA JSON
    // console.log("user is " + usernameInput,"\n",
    //             "email is " + emailInput,"\n",
    //             "password is " + pwdInput,"\n",
    //             "JSON utenti:" + users[0].email,
    //             );

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
        setTimeout (() => {
          //termina la visualizzazione dello spinner login
          this.spinner = false;

          // se welcome è true parte l'ngIf nell'html
          this.welcome = true;

          // REDIRECT SULLA HOME AD AVVENUTO LOGIN [pt.3]
          // this.router.navigate(['/home']);
       }, 1000);

        setTimeout (() => {
          // REDIRECT SULLA HOME AD AVVENUTO LOGIN [pt.3]
          this.router.navigate(['/home']);
       }, 2000);



          break
      } else {
        this.error++;
      }

      // SE CICLA TUTTO IL JSON E NON TROVA CORRISPONDENZE CON GLI UTENTI ALLORA STAMPA UN MESSAGGIO DI ERRORE
      if (this.error == users.length) {
        this.errorState = true;
        // console.log(this.errorState);
      }

    }

  }

}

