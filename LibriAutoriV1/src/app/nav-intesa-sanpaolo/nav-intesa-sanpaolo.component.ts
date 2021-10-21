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
  adminPermission: boolean = true;
  openClosedNav: boolean = false;

  openNav() {
    if (this.openClosedNav == false) {

      // document.getElementById("m_loginNavigationSection").style.height = "calc(30vh - 65px)";
      document.getElementById("m_loginNavigationSection").style.height = "106px";
      this.openClosedNav = true;

    } else {

      document.getElementById("m_loginNavigationSection").style.height = "0";

      setTimeout(() => {
        this.openClosedNav = false;
      }, 250);

    }
  }
}
