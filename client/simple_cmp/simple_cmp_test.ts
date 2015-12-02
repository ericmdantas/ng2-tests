import {
  it,
  expect,
  injectAsync,
  TestComponentBuilder,
  describe
} from 'angular2/testing';

import {SimpleCmp} from './simple_cmp.js';

describe('simple_cmp', () => {
  it('should init the cmp correctly', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(SimpleCmp).then((fixture) => {
      fixture.detectChanges();

      let compiled = fixture.debugElement.nativeElement;

      expect(compiled).toBeDefined();
    });
  }));

  it('should have the right value for name', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(SimpleCmp).then((fixture) => {
      fixture.detectChanges();

      let compiled = fixture.debugElement.nativeElement;

      expect(compiled.innerText).toEqual('hello there :D');
    });
  }));
});
