import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myid = 'Property';
  title = 'Angular Demo for Twoway data binding';
  GetData = (event: any) => console.log(event.target.value);
}
