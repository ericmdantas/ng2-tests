import {Observable} from 'angular2/core';

export class SimpleObservable {
  doSomething():Observable<any> {
    return new Observable((o) => {
      o.next({done: 1});
    });
  }
}
