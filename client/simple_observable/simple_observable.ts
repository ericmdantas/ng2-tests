import {Observable} from 'angular2/angular2';

export class SimpleObservable {
  doSomething():Observable<any> {
    return Observable.create((o) => {
      o.next({done: 1});
    });
  }
}
