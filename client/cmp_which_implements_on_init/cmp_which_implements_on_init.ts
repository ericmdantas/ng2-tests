import {
  Component,
  Inject
} from 'angular2/angular2';

export class SomethingService {
  doIt() {
    console.log('doing it');
  }
}

@Component({
  selector: 'cmp-which-implements-on-init',
  template: `
    <p>cmp-which-implements-on-init</p>
  `,
  providers: [SomethingService]
})
export class CmpWhichImplementsOnInit {
  constructor(@Inject(SomethingService) private _ss: SomethingService) {

  }

  ngOnInit() {
    this._ss.doIt();
  }
}
