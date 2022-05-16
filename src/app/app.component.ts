import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { custObservable } from '../custObservable';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor() {
    const test$ = new Observable((sub) => {
      sub.next('vaish'), sub.next('var');
    });

    const check$ = new custObservable((sub) => {
      sub.next('vaish'), sub.next('var');
    });

    test$.subscribe((x) => {
      console.log('1', x);
    });
    test$.subscribe((y) => {
      console.log('2', y);
    });

    check$.subscribe((x) => {
      console.log('1', x);
    });
    check$.subscribe((y) => {
      console.log('2', y);
    });
  }
}
