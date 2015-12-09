import {
  Directive
} from 'angular2/core';

@Directive({
  selector: '[simple-directive]',
  host: {
    'class': 'simple-dir-class'
  }
})
export class SimpleDirective {
  name: string = 'simple-dir';
}
