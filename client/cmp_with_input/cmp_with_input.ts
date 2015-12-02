import {
  Component,
  Input
} from 'angular2/angular2';

@Component({
  selector: 'cmp-with-input',
  template: `
    <p>{{inp}}</p>
  `
})
export class CmpWithInput {
  @Input('inp') inp: string = 'abc';
}
