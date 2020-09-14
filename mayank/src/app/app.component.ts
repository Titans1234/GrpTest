import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <div><h1>{{title}}</h1></div>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'mayank';
  //This line has been added by anant
  Hello;
}
