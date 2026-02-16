import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';

@Component({
    selector: 'app-home',
    imports: [ProductsComponent],
    templateUrl: './home.html',
    styleUrl: './home.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent { }
