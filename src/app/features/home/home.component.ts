import { ChangeDetectionStrategy, Component, inject, computed } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { NgOptimizedImage } from '@angular/common';
import { LanguageService } from '../../core/services/language.service';

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
export class HomeComponent {
  private readonly langService = inject(LanguageService);
  readonly t = computed(() => this.langService.translations().home);
  readonly hero = computed(() => this.langService.translations().hero);
}
