import {
  it,
  expect,
  describe,
  injectAsync,
  TestComponentBuilder
} from 'angular2/testing';

import {CmpWithRouterStuff} from './cmp_with_router_stuff.js';

describe('cmp-with-router-stuff', () => {
  it('should create the cmp correctly', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(CmpWithRouterStuff).then((fixture) => {
      fixture.detectChanges();

      let compiled = fixture.debugElement.nativeElement;

      expect(compiled).toBeDefined();
    });
  }));

  it('should have the right value for the prop', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(CmpWithRouterStuff).then((fixture) => {
      fixture.detectChanges();

      let instance = fixture.debugElement.componentInstance;

      expect(instance.info).toEqual('info-router');
    });
  }));
});
