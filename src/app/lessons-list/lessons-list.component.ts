import { Component, OnInit } from '@angular/core';
import { globalEventBus, Observer, LESSONS_LIST_AVAILABLE } from '../event-bus/event-bus';
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
    debugger
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);
    //globalEventBus.registerObserver1(this);
  }

  lessons: Lesson[] = [];

  ngOnInit() {

   console.log("Subscribed");
   globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);
  }

  notify(data: Lesson[]) {

    console.log("data received");
    this.lessons = data;
  }


}
