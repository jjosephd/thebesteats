import { Component, HostListener } from '@angular/core';
import { NavlinksComponent } from '../navlinks/navlinks.component';

@Component({
  selector: 'app-nav',
  imports: [NavlinksComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  /**@HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const nav = document.querySelector('.navContainer');
    if (window.scrollY > 0) {
      nav?.classList.add('bg-white');
    } else {
      nav?.classList.add('bg-blue-500');
    }
  }*/
}
