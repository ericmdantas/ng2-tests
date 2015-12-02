import {
  Component,
  EventEmitter,
  Output
} from 'angular2/angular2';

@Component({
  selector: 'cmp-with-output',
  template: `
    <button type="button"
            (click)="go()">go</button>
  `
})
export class CmpWithOuput {
  @Output('out') out: EventEmitter = new EventEmitter();

  go() {
    this.out.next({done: true});
  }
}
