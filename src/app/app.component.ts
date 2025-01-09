import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { MainInputComponent } from './main-input/main-input.component';
import { DealsComponent } from './deals/deals.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    NavComponent,
    MainInputComponent,
    HeroComponent,
    DealsComponent,
    DetailsComponent,
    RouterModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my_app';
}
