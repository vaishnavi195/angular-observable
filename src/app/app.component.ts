import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
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

    test$.subscribe((x) => {
      console.log('1', x);
    });
    test$.subscribe((y) => {
      console.log('2', y);
    });
  }
}
