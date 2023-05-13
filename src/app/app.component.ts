import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'demo2';
  counter = 0;
  title = environment.api;
  search(event: MouseEvent) {
    console.log(event);
    this.counter++;
    console.log('test');
  }

  inputKeyup(event: KeyboardEvent) {
    console.log(event.key);
    if (event.key == 'Enter') {
      console.log((event.target as HTMLInputElement).value);
    }
  }

  searchByEnter(event: Event) {
    const newEvent = event as KeyboardEvent;
    console.log('search by enter', newEvent.altKey);
  }
}
