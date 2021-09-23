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

  username : string;
  email : string;
  pwd : string;

  submit() {

    const user= this.username;
    const email= this.email;
    const pwd= this.pwd;
    console.log("user is " + user,"\n",
                "email is " + email,"\n",
                "password is " + pwd,"\n",
                "JSON utenti:" + users[0].email,
                );

  }

}


// loginSubmit(value){
//   for(let i=0 ; i< this.login.length; i++)
//   {
//       if (this.login[i].username === value.username && this.login[i].password === value.password)
//       {
//           console.log("User Found" , this.login[i]);
//       }
//   }
// }
