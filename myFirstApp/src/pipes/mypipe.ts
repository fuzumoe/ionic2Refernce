import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the Mypipe pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'mypipe'
})
@Injectable()
export class Mypipe {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value, args) {
    if(!value){
      value ="";
    }
    value = String(value)+ ' sweet dude'; // make sure it's a string
    return value;
  }
}
