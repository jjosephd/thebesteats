import { Component } from '@angular/core';
import { TopbarComponent } from '../topbar/topbar.component';

@Component({
  selector: 'app-header',
  imports: [TopbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
