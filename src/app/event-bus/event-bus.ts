import * as _ from "lodash";

// Defining event types
export const LESSONS_LIST_AVAILABLE = "NEW_LIST_AVAILABLE";
export const ADD_NEW_LESSON = "ADD_NEW_LESSON";

export interface Observer {
    notify(data: any);
}

interface Subject {
    registerObserver(eventType: string, obs: Observer);
    unregisterObserver(eventType: string,obs: Observer);
    notifyObservers(eventType: string,data: any);
}

class EventBus implements Subject {

    private observers: {[key: string]: Observer[]} = {};

    registerObserver(eventType: string, obs: Observer) {
        this.observersPerType(eventType).push(obs);
    }    
    
    unregisterObserver(eventType: string, obs: Observer) {
         _.remove(this.observersPerType(eventType), el => el === obs);
    }
    notifyObservers(eventType: string, data: any) {
         this.observersPerType(eventType)
            .forEach(el => el.notify(data));
    }


    private observersPerType(eventType: string){
        const observersPerType = this.observers[eventType];
        if(!observersPerType) {
            this.observersPerType[eventType] = [];
        }
        return this.observersPerType[eventType];
    }

}

export const globalEventBus = new EventBus();