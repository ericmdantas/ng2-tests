import {
  it,
  expect,
  describe,
  injectAsync,
  TestComponentBuilder
} from 'angular2/testing';

import {Component} from 'angular2/angular2';

import {SimplePipe} from './simple_pipe.js';

describe('simple_pipe', () => {
  it('should create the pipe correctly', () => {
    let _s = new SimplePipe();

    expect(_s).toBeDefined();
  });

  it('should transform correctly', () => {
    let _s = new SimplePipe();

    expect(_s.transform()).toBe('something');
  })

  it('should transform the value in the component', injectAsync([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(FakeCmp).then((fixture) => {
      fixture.detectChanges();

      let compiled = fixture.debugElement.nativeElement;

      expect(compiled.innerText).toEqual('something');
    });
  }));
});

@Component({
  selector: 'fake-cmp',
  template: `
    {{info | simplePipe}}
  `,
  pipes: [SimplePipe]
})
class FakeCmp {
  info: string = 'abc';
}
