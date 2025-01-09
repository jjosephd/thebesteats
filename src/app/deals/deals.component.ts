import { Component } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-deals',
  imports: [LazyLoadImageModule],
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.css',
})
export class DealsComponent {
  imgPreview1 = '../assets/deals/previewImg_1.jpg';
  imgPreview2 = '../assets/deals/previewImg_2.jpg';
  imgPreview3 = '../assets/deals/previewImg_3.jpg';
  imgPreview4 = '../assets/deals/previewImg_4.jpg';
}
