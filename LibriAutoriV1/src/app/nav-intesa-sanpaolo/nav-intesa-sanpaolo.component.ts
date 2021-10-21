import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-intesa-sanpaolo',
  templateUrl: './nav-intesa-sanpaolo.component.html',
  styleUrls: ['./nav-intesa-sanpaolo.component.scss']
})
export class NavIntesaSanpaoloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // VARS
  userSession: boolean = true;
  adminPermission: boolean = false;

}
