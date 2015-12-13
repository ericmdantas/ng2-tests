import {
  it,
  expect,
  injectAsync,
  TestComponentBuilder,
  describe
} from 'angular2/testing';

import {Component} from 'angular2/core';

import {SimpleDirective} from './simple_directive.js';

describe('simple_directive', () => {
  it('should create the directive correctly', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(FakeCmp).then((fixture) => {
      fixture.detectChanges();

      let compiled = fixture.debugElement.nativeElement;

      expect(compiled.getElementsByTagName('p')[0].className).toBe('simple-dir-class');
    });
  }));
});

@Component({
  selector: 'fake-cmp',
  template: `
    <p simple-directive>hello</p>
  `,
  directives: [SimpleDirective]
})
class FakeCmp {

}
