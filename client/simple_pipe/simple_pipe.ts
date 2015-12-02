import {Pipe, PipeTransform} from 'angular2/angular2';

@Pipe({
  name: 'simplePipe'
})
export class SimplePipe implements PipeTransform {
  transform(value: any, args: any[] = []) {
    return 'something';
  }
}
