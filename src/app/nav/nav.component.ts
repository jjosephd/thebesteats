import { Component, HostListener } from '@angular/core';
import { NavlinksComponent } from '../navlinks/navlinks.component';

@Component({
  selector: 'app-nav',
  imports: [NavlinksComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {}
