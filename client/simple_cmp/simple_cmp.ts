import {Component} from 'angular2/angular2';

@Component({
  selector: 'simple-cmp',
  template: `
    {{name}}
  `
})
export class SimpleCmp {
  name: string = 'hello there :D';
}
