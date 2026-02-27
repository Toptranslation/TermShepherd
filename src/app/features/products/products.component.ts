import { ChangeDetectionStrategy, Component, signal, inject, computed } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { LanguageService } from '../../core/services/language.service';

interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
}

@Component({
    selector: 'app-products',
    imports: [NgOptimizedImage, ContactFormComponent],
    templateUrl: './products.html',
    styleUrl: './products.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
    private readonly langService = inject(LanguageService);
    readonly t = computed(() => this.langService.translations().products);

    isModalOpen = signal(false);
    selectedProduct = signal<Product | null>(null);

    readonly images = {
        1: 'service_1.png',
        2: 'service_2.png',
        3: 'service_3.png',
        4: 'service_4.png'
    };

    readonly products = computed(() => {
        const trans = this.t();
        return trans.items.map(item => ({
            ...item,
            image: (this.images as any)[item.id]
        }));
    });
    openContactForm(product: Product) {
        this.selectedProduct.set(product);
        this.isModalOpen.set(true);
    }

    closeContactForm() {
        this.isModalOpen.set(false);
        this.selectedProduct.set(null);
    }
}
