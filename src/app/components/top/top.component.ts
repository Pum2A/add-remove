import { Component, OnInit } from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faBars = faBars

  sidenav: boolean = false;


    onclick(){
      this.sidenav = !this.sidenav
    }
    
}
