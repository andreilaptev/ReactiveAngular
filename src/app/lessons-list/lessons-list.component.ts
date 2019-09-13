import { Component, OnInit } from '@angular/core';
import { globalEventBus, Observer } from '../event-bus/event-bus';
import { testLessons } from '../shared/model/test-lesson';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit, Observer {

  constructor() { 
    console.log("Subscribed");
    globalEventBus.registerObserver(this);
  }

  lessons: Lesson[] = [];

  ngOnInit() {

   // console.log("Subscribed");
   // globalEventBus.registerObserver(this);
  }

  notify(data: Lesson[]) {

    console.log("data received");
    this.lessons = data;
  }


}
