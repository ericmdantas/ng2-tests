import {
  it,
  expect,
  describe,
  injectAsync,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

import {setBaseTestProviders} from 'angular2/testing';

import {
  TEST_BROWSER_PLATFORM_PROVIDERS,
  TEST_BROWSER_APPLICATION_PROVIDERS
} from 'angular2/platform/testing/browser';

import {provide} from 'angular2/core';

import {CmpWithComplexClassDep} from './cmp_with_complex_class_dep.js';
import {SomeService} from './cmp_with_complex_class_dep.js';

class MockSomeService extends SomeService {
  add() {
    return {
      subscribe: (cb) => {
        cb(1);
      }
    }
  }

  remove() {
    return {
      subscribe: (cb) => {
        cb(2);
      }
    }
  }
}

describe('cmp_with_complex_class_dep', () => {
  beforeEachProviders(() => {
    return [
      provide(SomeService, {useClass: MockSomeService})
    ]
  });

  it('should create the cmp correctly', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(CmpWithComplexClassDep).then((fixture) => {
      fixture.detectChanges();

      let compiled = fixture.debugElement.nativeElement;

      expect(compiled).toBeDefined();
    });
  }));

  it('should call add and return 1', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(CmpWithComplexClassDep).then((fixture) => {
      fixture.detectChanges();

      let instance = fixture.debugElement.componentInstance;

      instance.add();

      expect(instance.addResult).toBe(1);
    });
  }));

  it('should call remove and return 2', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(CmpWithComplexClassDep).then((fixture) => {
      fixture.detectChanges();

      let instance = fixture.debugElement.componentInstance;

      instance.remove();

      expect(instance.removeResult).toBe(2);
    });
  }));
});
