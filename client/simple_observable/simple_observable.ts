import {Observable} from 'rxjs/Observable';

export class SimpleObservable {
  doSomething():Observable<any> {
    return new Observable((o) => {
      o.next({done: 1});
    });
  }
}
