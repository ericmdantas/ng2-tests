import {Component} from 'angular2/core';

@Component({
  selector: 'simple-cmp',
  template: `
    {{name}}
  `
})
export class SimpleCmp {
  name: string = 'hello there :D';
}
