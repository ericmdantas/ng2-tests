import {
  it,
  expect,
  beforeEachProviders,
  xdescribe
} from 'angular2/testing';

import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {provide} from 'angular2/core';

import {ClassWithExternalDeps} from './class_with_external_deps.js';

beforeEachProviders(() => [
                            HTTP_PROVIDERS,
                            provide(ClassWithExternalDeps, {
                                    useFactory: () => new ClassWithExternalDeps(new Http())
                                  })
                          ]);

xdescribe('class_with_external_deps', () => {
  it('should have _http defined', () => {
    let _c = new ClassWithExternalDeps();

    expect(_c._http).toBeDefined();
  });

  it('should have Http as a dep', () => {

  });
});
