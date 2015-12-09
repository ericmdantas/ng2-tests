import {
  it,
  expect,
  describe,
  injectAsync,
  TestComponentBuilder
} from 'angular2/testing';

import {CmpWhichImplementsOnInit, SomethingService} from './cmp_which_implements_on_init.js';

describe('cmp_which_implements_on_init', () => {
  it('should create the cmp correctly', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(CmpWhichImplementsOnInit).then((fixture) => {
      fixture.detectChanges();

      let compiled = fixture.debugElement.nativeElement;

      expect(compiled).toBeDefined();
    });
  }));

  it('should call the service right on init', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(CmpWhichImplementsOnInit).then((fixture) => {
      fixture.detectChanges();

      let instance = fixture.debugElement.componentInstance;

      spyOn(instance._ss, 'doIt').and.callFake(() => {});

      instance.ngOnInit();

      expect(instance._ss.doIt).toHaveBeenCalled();
    });
  }));
});
