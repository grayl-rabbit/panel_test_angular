import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <div  id="sidemenu">
      <tabset></tabset>
    </div>
  `
})
export class AppComponent {
  title = 'app';
}
