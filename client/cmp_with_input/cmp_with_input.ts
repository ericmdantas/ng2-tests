import {
  Component,
  Input
} from 'angular2/core';

@Component({
  selector: 'cmp-with-input',
  template: `
    <p>{{inp}}</p>
  `
})
export class CmpWithInput {
  @Input('inp') inp: string = 'abc';
}
