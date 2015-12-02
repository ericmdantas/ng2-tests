import {
  Component,
  Inject,
  Observable
} from 'angular2/angular2';

export class SomeService {
  add():Observable<any> {
    return Observable.create((o) => {
      o.next(1);
    });
  }

  remove():Observable<any> {
    return Observable.create((o) => {
      o.next(2);
    });
  }
}

@Component({
  selector: 'cmp-with-complex-class-dep',
  template: `
    <p>yo</p>
  `
})
export class CmpWithComplexClassDep {
  addResult: number = 0;
  removeResult: number = 0;

  constructor(@Inject(SomeService) private _someService: SomeService) {

  }

  add() {
    this._someService
        .add()
        .subscribe((r) => {
          this.addResult = r;
        });
  }

  remove() {
    this._someService
        .remove()
        .subscribe((r) => {
          this.removeResult = r;
        });
  }
}
