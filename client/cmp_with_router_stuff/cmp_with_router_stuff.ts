import {
  Component
} from 'angular2/core';

import {
  ROUTER_PROVIDERS,
  CanActivate
} from 'angular2/router';

@Component({
  selector: 'cmp-with-router-stuff',
  template: `
    <div>
      <p>cmp-with-router-stuff</p>
    </div>
  `,
  providers: [ROUTER_PROVIDERS]
})
@CanActivate(() => {
  return false;
})
export class CmpWithRouterStuff {
  info: string = 'info-router';
}
