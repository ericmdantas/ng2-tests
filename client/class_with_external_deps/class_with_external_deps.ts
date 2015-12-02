import {Http} from 'angular2/http';

export class ClassWithExternalDeps {
  constructor(private _http: Http) {
    this._http = _http;
  }
}
