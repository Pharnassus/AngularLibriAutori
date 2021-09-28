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
  errorStateEmail = false;
  welcome = false;
  spinner = false;

  register() {

    const firstName = this.firstName;
    const lastName = this.lastName;
    const usernameInput = this.username;
    const emailInput = this.email;
    const pwdInput = this.pwd;
    const pwdRepeat = this.pwdRepeat;


    //attiva il login spinner
    this.spinner = true;
    this.error = 0;

    // CICLA IL JSON
    for (let i = 0; i < users.length; i++) {

      // [test]CICLA TUTTI GLI UTENTI; STESSA COSA POTRAI FARLA CON IL RESTO DELLE CHIAVI DEL JSON
      // console.log(users[i].user);

      // [ciclo] controlla se gli input iniziali so vuoti o meno
      if ((<HTMLInputElement>document.getElementById('floatingFN')).value == ''
        || (<HTMLInputElement>document.getElementById('floatingLN')).value == ''
        || (<HTMLInputElement>document.getElementById('floatingUN')).value == ''
        || (<HTMLInputElement>document.getElementById('floatingEmail')).value == ''
        || (<HTMLInputElement>document.getElementById('floatingPassword')).value == ''
        || (<HTMLInputElement>document.getElementById('floatingPasswordRepeat')).value == '') {
        this.spinner = false;
        this.errorStatePwd = false;
        this.errorStateEmpty = true;
        this.error == 1;
      }

      // else if (emailInput.includes("@") == false
      //   || emailInput.includes(".it") == false
      //   || emailInput.includes(".com") == false
      //   || emailInput.includes(".tech") == false) {
      //   this.spinner = false;
      //   this.errorStateEmpty = false;
      //   this.errorStateEmail = true;
      //   this.error == 1;
      // }

      else if (pwdInput != pwdRepeat) {
        this.spinner = false;
        this.errorStateEmpty = false;
        this.errorStatePwd = true;
        this.error == 1;
      }

      // una volta trovato l'oggetto con i valori test dovrà "memorizzarli"
      else if (users[i].firstName == "test"
        && users[i].lastName == "test"
        && users[i].user == "test"
        && users[i].email == "test"
        && users[i].pwd == "test"
        && this.error == 0) {

        //per far sparire il banner di errore in caso di successivo login corretto
        // this.errorState = false;
        this.errorStateEmpty = false;
        this.errorStatePwd = false;
        this.errorStateEmail = false;

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
