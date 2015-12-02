import {
  it,
  expect,
  describe
} from 'angular2/testing';

import {SimpleObservable} from './simple_observable.js';

describe('simple_observable', () => {
  it('should create it correctly', () => {
    let _s = new SimpleObservable();

    expect(_s).toBeDefined();
  });

  it('should return an observable', () => {
    let _s = new SimpleObservable();

    _s.doSomething()
      .subscribe((r) => {
        expect(r).toEqual({done: 1});
      });
  });
});
