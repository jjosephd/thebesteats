import { Component } from '@angular/core';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faMapPin,
  faBookOpen,
  faDollarSign,
  faUser,
} from '@fortawesome/fontawesome-free-solid';

@Component({
  selector: 'app-details',
  imports: [FontAwesomeModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  faMapPin = faMapPin;
  faBookOpen = faBookOpen;
  faDollarSign = faDollarSign;
  faUser = faUser;
}
