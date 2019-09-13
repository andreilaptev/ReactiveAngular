import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'browser-events',
  templateUrl: './browser-events.component.html',
  styleUrls: ['./browser-events.component.css']
})
export class BrowserEventsComponent implements OnInit {

  hoverSection: HTMLElement;

  constructor() { }

  ngOnInit() {

    this.hoverSection = document.getElementById('hover');
    this.hoverSection.addEventListener('mousemove', onMouseMove);
  }

  unsubscribe(){
    console.log('unsubscribe');

    this.hoverSection.removeEventListener('mousemove', onMouseMove);
  }

}

function onMouseMove(ev: MouseEvent){
  console.log(ev)
}
