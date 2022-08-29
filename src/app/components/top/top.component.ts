import { transition, trigger, state , animate, style,  } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons'




@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
  animations: [
    trigger('fade', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('out', style({
        transform: 'translate3d(100%,0,0)'
      })),
      transition('in => out', animate('600ms ease-in-out')),
      transition('out => in', animate('600ms ease-in-out'))
    ])
  ]
  
})
export class TopComponent implements OnInit {

  constructor() { }

  
  ngOnInit(): void {
  }


  
  faBars = faBars
  
  sidenav:string = 'out';
  
  
  onclick(){
    this.sidenav = this.sidenav === 'out' ? 'in' : 'out'
    }
    
}
