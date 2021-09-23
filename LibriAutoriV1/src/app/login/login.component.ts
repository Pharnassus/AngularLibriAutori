import { Component, OnInit } from '@angular/core';
import users from '../_services/users.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }


  // VARIABILI USATE NELLA FUNZIONE SUBMIT PER RECUPERARE I DATI DALL'INPUT
  username : number;
  email : string;
  pwd : string;

  // VARIABILI USATE NELLA FUNZIONE SUBMIT PER GENERARE IL BANNER LOGIN ERRATO
  error = 0;
  errorState = false;
  welcome = false;

  submit() {

    const usernameInput= this.username;
    const emailInput= this.email;
    const pwdInput= this.pwd;
    // console.log("user is " + user,"\n",
    //             "email is " + email,"\n",
    //             "password is " + pwd,"\n",
    //             "JSON utenti:" + users[0].email,
    //             );

    // CICLA IL JSON
    for (let i = 0; i < users.length; i++) {

      // CICLA TUTTI GLI UTENTI; STESSA COSA POTRAI FARLA CON IL RESTO DELLE CHIAVI DEL JSON
      // console.log(users[i].user);

      // SE TROVA CORRISPONDENZE CON TUTTI E 3 I CAMPI DI INPUT STAMPA OK E SI FERMA ALTRIMENTI AUMENTA IL COUNTER error  DI 1
      if (users[i].user == usernameInput && users[i].email == emailInput && users[i].pwd == pwdInput) {
        this.errorState = false;
        this.welcome = true;
        break
      } else {
        this.error++;
      }

      // SE CICLA TUTTO IL JSON E NON TROVA CORRISPONDENZE CON GLI UTENTI ALLORA STAMPA UN MESSAGGIO DI ERRORE
      if (this.error == users.length) {
        this.errorState = true;
        console.log(this.errorState);
      }

    }

  }

}

