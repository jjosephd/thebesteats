import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYelp,
} from '@fortawesome/fontawesome-free-brands';
import { faFire } from '@fortawesome/fontawesome-free-solid';
@Component({
  selector: 'app-topbar',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
})
export class TopbarComponent {
  faFire = faFire;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faYelp = faYelp;
}
