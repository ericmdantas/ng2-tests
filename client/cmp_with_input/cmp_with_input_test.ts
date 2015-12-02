import {
  it,
  describe,
  injectAsync,
  TestComponentBuilder,
  expect
} from 'angular2/testing';

import {CmpWithInput} from './cmp_with_input.js';

describe('cmp_with_input', () => {
  it('should have the cmp created correctly', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(CmpWithInput).then((fixture) => {
      fixture.detectChanges();

      let compiled = fixture.debugElement.nativeElement;

      expect(compiled).toBeDefined();
    });
  }));

  it('should have the default value for Input', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(CmpWithInput).then((fixture) => {
      fixture.detectChanges();

      let compiled = fixture.debugElement.nativeElement;

      expect(compiled.innerText).toEqual('abc');
    });
  }));

  it('should have the value passed by the input', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.overrideTemplate(CmpWithInput, '{{inp}}')
              .createAsync(CmpWithInput)
              .then((fixture) => {
                  fixture.detectChanges();

                  let compiled = fixture.debugElement.nativeElement;

                  expect(compiled.innerText).toBe('abc');
              });
  }));
});
