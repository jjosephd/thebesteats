import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';

interface popularItems {
  popularItem: string;
}
@Component({
  selector: 'app-popular-items',
  imports: [CommonModule, LazyLoadImageModule],
  templateUrl: './popular-items.component.html',
  styleUrl: './popular-items.component.css',
})
export class PopularItemsComponent {
  popularItems: popularItems[] = [
    { popularItem: '../assets/deals/popularItem_1.jpg' },
    { popularItem: '../assets/deals/popularItem_2.jpg' },
    { popularItem: '../assets/deals/popularItem_3.jpg' },
    { popularItem: '../assets/deals/popularItem_4.jpg' },
    { popularItem: '../assets/deals/popularItem_5.jpg' },
    { popularItem: '../assets/deals/popularItem_6.jpg' },
  ];
}
