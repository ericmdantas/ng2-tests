import {
  it,
  expect,
  injectAsync,
  TestComponentBuilder,
  describe
} from 'angular2/testing';

import {SimpleCmp} from './simple_cmp.js';

describe('simple_cmp', () => {
  it('should init the cmp correctly', injectAsync([TestComponentBuilder], (tcb) => {
    return tcb.createAsync().then((fixture) => {
      fixture.detectChanges();

      expect('true').toBe(true);
    });
  }));
});
