import {
  Component,
  EventEmitter,
  Output
} from 'angular2/core';

@Component({
  selector: 'cmp-with-output',
  template: `
    <button type="button"
            (click)="go()">go</button>
  `
})
export class CmpWithOuput {
  @Output('out') out: EventEmitter<Object> = new EventEmitter();

  go() {
    this.out.next({done: true});
  }
}
