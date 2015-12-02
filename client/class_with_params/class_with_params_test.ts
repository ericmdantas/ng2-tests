import {
  it,
  expect,
  describe
} from 'angular2/testing';

import {ClassWithParams} from './class_with_params.js';

describe('class_with_params', () => {
  it('should have the default value for name', () => {
    let _c = new ClassWithParams();

    expect(_c.name).toBe('abc');
  });

  it('should have the right values passed in constructor', () => {
    let _name = '123';
    let _c = new ClassWithParams(_name);

    expect(_c.name).toBe(_name);
  });
});
