import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-home',
    imports: [
      NgOptimizedImage,
      ProductsComponent
    ],
    templateUrl: './home.html',
    styleUrl: './home.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent { }
