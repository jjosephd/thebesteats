import { Component } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-hero',
  imports: [
    LazyLoadImageModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  heroImgUrl: string = '/assets/hero/hero-splash.jpg';
}
