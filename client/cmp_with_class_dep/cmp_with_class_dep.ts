import {
  Component,
  Inject,
  forwardRef
} from 'angular2/core';

@Component({
  selector: 'cmp-with-class-dep',
  template: `
    <p>yo</p>
  `,
  providers: [forwardRef(() => SomeDep)]
})
export class CmpWithClassDep {
  constructor(@Inject(forwardRef(() => SomeDep)) public someDep: SomeDep) {

  }
}

class SomeDep {
  info: string = 'some-info';
}
