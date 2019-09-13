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

    registerObserver1(obs: Observer);
    unregisterObserver1(obs: Observer);
    notifyObservers1(data: any);
}

class EventBus implements Subject {

    private observers: {[key: string]: Observer[]} = {};

    private observers1: Observer[] = [];
    
    registerObserver1(obs: Observer) {
        this.observers1.push(obs);
    }
    unregisterObserver1(obs: Observer) {
        _.remove(this.observers1, el => el === obs);
    }
    notifyObservers1(data: any) {
        this.observers1.forEach(el => el.notify(data));
    }

    /// Simplified version - no event types

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

    //

    private observersPerType(eventType: string): Observer[] {

        debugger
        const observersPerType = this.observers[eventType];
        if(!observersPerType) {
            this.observers[eventType] = [];
        }
        return this.observers[eventType];
    }

}

export const globalEventBus = new EventBus();