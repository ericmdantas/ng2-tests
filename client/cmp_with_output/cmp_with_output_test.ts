import {
  it,
  describe,
  injectAsync,
  TestComponentBuilder,
  expect
} from 'angular2/testing';

import {setBaseTestProviders} from 'angular2/testing';

import {
  TEST_BROWSER_PLATFORM_PROVIDERS,
  TEST_BROWSER_APPLICATION_PROVIDERS
} from 'angular2/platform/testing/browser';

import {CmpWithOuput} from './cmp_with_output.js';

describe('cmp_with_output', () => {
  it('should create the cmp correctly', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(CmpWithOuput).then((fixture) => {
      fixture.detectChanges();

      let compiled = fixture.debugElement.nativeElement;

      expect(compiled).toBeDefined();
    });
  }));

  it('should call the event correctly', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(CmpWithOuput).then((fixture) => {
      fixture.detectChanges();

      let instance = fixture.debugElement.componentInstance;

      instance.go();
    });
  }));
});
