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

  // VARIABILI USATE NELLA FUNZIONE SUBMIT PER GENERARE I BANNER ERROR o BENVENUTO
  error = 0;
  errorState = false;
  errorStateEmpty = false;
  errorStatePwd = false;
  errorStatePwdSpaces = false;
  errorStateEmail = false;
  errorStatePwdLength = false;
  welcome = false;
  spinner = false;

  register() {
    //rinomino le variabili per una migliore lettura
    let firstName = this.firstName;
    let lastName = this.lastName;
    let usernameInput = this.username;
    let emailInput = this.email;
    let pwdInput = this.pwd;
    let pwdRepeat = this.pwdRepeat;

    //attiva il login spinner
    this.spinner = true;
    //contatore degli errori: se diverso da 0 non fa il sumbit
    this.error = 0;

    // CICLA IL JSON
    for (let i = 0; i < users.length; i++) {

      // [test]CICLA TUTTI GLI UTENTI; STESSA COSA POTRAI FARLA CON IL RESTO DELLE CHIAVI DEL JSON
      // console.log(users[i].user);

      // [ciclo] controlla se gli input iniziali so vuoti o meno !è un ciclo vincolante per i successivi!
      if (
        (<HTMLInputElement>document.getElementById('floatingFN')).value == '' ||
        (<HTMLInputElement>document.getElementById('floatingLN')).value == '' ||
        (<HTMLInputElement>document.getElementById('floatingUN')).value == '' ||
        (<HTMLInputElement>document.getElementById('floatingEmail')).value == '' ||
        (<HTMLInputElement>document.getElementById('floatingPassword')).value == '' ||
        (<HTMLInputElement>document.getElementById('floatingPasswordRepeat')).value == ''
      ) {
        this.spinner = false;
        this.errorStatePwd = false;
        this.errorStateEmpty = true;
        this.error == 1;
      }


      //[ciclo] controllo email
      if (
        (emailInput).includes("@") == false ||
        (emailInput).includes(".it") == false
        // (emailInput).toLowerCase().includes(".com") == false
        // emailInput.includes(".tech") == false
      ) {
        this.spinner = false;
        this.errorStateEmpty = false;
        this.errorStateEmail = true;
        this.error == 1;

        (<HTMLInputElement>document.getElementById('floatingEmail')).value == '';

        break
      }

      //[ciclo] controllo password
      if (pwdInput != pwdRepeat) {
        this.spinner = false;
        this.errorStateEmpty = false;
        this.errorStateEmail = false;
        this.errorStatePwd = true;
        this.error == 1;

        break
      }
      //[ciclo] se la passweord contiene spazi stampa il messaggio di errore
      else if (
        (pwdInput).includes(" ") ||
        (pwdRepeat).includes(" ")
      ) {
        this.spinner = false;
        this.errorStateEmpty = false;
        this.errorStateEmail = false;
        this.errorStatePwd = false;
        this.errorStatePwdSpaces = true;
        this.error == 1;

        break
      }
      //[ciclo] se la passweord contiene meno di 6 caratteri stampa l'error
      else if (
        (pwdInput).length <= 6 ||
        (pwdRepeat).length <= 6
      ) {
        this.spinner = false;
        this.errorStateEmpty = false;
        this.errorStateEmail = false;
        this.errorStatePwd = false;
        this.errorStatePwdSpaces = false;
        this.errorStatePwdLength = true;
        this.error == 1;

        break
      }

      if (this.error == 0) {
        // elimina i caratteri speciali dai vari input
        firstName = (firstName).replace(/[!_@&\/\\#,+()$~%'":*?<>{}\s]/g, '');
        lastName = (lastName).replace(/[!_@&\/\\#,+()$~%'":*?<>{}\s]/g, '');
        usernameInput = (usernameInput).replace(/[!&\/\\#,+()$~%'":*?<>{}]/g, '');
        emailInput = (emailInput).toLowerCase().replace(/[!&\/\\#,+()$~%'":*?<>{}]/g, '');
        // per la password invece ci sono meno restrizioni
        pwdInput = (pwdInput).replace(/[\/\\,+()~'":*<>{}]/g, '');
        pwdRepeat = (pwdRepeat).replace(/[\/\\,+()~'":*<>{}]/g, '');
      }

      // una volta trovato l'oggetto con i valori test dovrà "memorizzarli"
      if (
        users[i].firstName == "test" &&
        users[i].lastName == "test" &&
        users[i].user == "test" &&
        users[i].email == "test" &&
        users[i].pwd == "test" &&
        this.error == 0
      ) {

        //per far sparire il banner di errore in caso di successivo login corretto
        // this.errorState = false;
        this.errorStateEmpty = false;
        this.errorStateEmail = false;
        this.errorStatePwd = false;
        this.errorStatePwdSpaces = false;

        // "memorizza" nel json
        users[i].firstName = firstName;
        users[i].lastName = lastName;
        users[i].user = usernameInput;
        users[i].email = emailInput;
        users[i].pwd = pwdInput;

        console.log(users);


        //timeout per finto caricamento
        setTimeout(() => {
          //termina la visualizzazione dello spinner login
          this.spinner = false;

          // se welcome è true parte l'ngIf nell'html
          this.welcome = true;
        }, 1500);

        //simulazione delay reindirizzamento alla home
        setTimeout(() => {
          // REDIRECT SULLA HOME AD AVVENUTO LOGIN [pt.3]
          this.router.navigate(['/login']);
        }, 4500);

        break
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
        }, true)
      })
  }

}
