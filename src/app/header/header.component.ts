import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title = 'The Will Will Web';
  url = 'http://blog.miniasp.com/';
  isHighlight = false;
  h3Color = 'red';
  displayHeader = false;

  toggleHighlight() {
    this.displayHeader = !this.displayHeader;
    this.isHighlight = !this.isHighlight;
    this.h3Color = this.h3Color === 'red' ? 'black' : 'red';
  }
}
