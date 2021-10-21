import { Component, OnInit } from '@angular/core';

//IMPORTO IL JSON PER POTERLO USARE IN PAGINA
import users from '../_services/users.json';

@Component({
  selector: 'app-admin-privileges',
  templateUrl: './admin-privileges.component.html',
  styleUrls: ['./admin-privileges.component.scss']
})
export class AdminPrivilegesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    for (let i = 0; i < users.length; i++) {

      this.arrayUsers.push(users[i]);

    }

  }

  arrayUsers: string[] = [];

}
