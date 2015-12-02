import {
  it,
  describe,
  expect
} from 'angular2/testing';

import {SimpleClass} from './simple_class.js';

describe('simple_class', () => {
  it('should have the right values for the static', () => {
    expect(SimpleClass.PROP).toBe(1);
  });

  it('should have the right value for the initial number', () => {
    let _s = new SimpleClass();

    expect(_s.someNum).toBe(0);
  });

  it('should add 1 everytime add is called', () => {
    let _s = new SimpleClass();

    _s.add();

    expect(_s.someNum).toBe(1);

    _s.add();

    expect(_s.someNum).toBe(2);

    _s.add();

    expect(_s.someNum).toBe(3);
  });
});
