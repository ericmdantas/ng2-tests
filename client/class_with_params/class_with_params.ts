export class ClassWithParams {
  name: string;

  constructor(n: string = 'abc') {
    this.name = n;
  }
}
