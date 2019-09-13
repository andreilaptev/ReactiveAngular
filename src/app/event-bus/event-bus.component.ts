import { Component, OnInit } from '@angular/core';
import { globalEventBus } from './event-bus';
import { testLessons } from '../shared/model/test-lesson';

@Component({
  selector: 'event-bus',
  templateUrl: './event-bus.component.html',
  styleUrls: ['./event-bus.component.css']
})
export class EventBusComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    console.log ("Data broadcasted");
    globalEventBus.notifyObservers(testLessons);
    }

  addLesson(val){

  }

}
