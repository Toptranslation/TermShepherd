import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';

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
    isModalOpen = signal(false);
    selectedProduct = signal<Product | null>(null);

    readonly products = signal<Product[]>([
        {
            id: 1, // Moved to top/featured
            title: 'Laufendes Terminologiemanagement',
            description: 'Terminologie ist kein einmaliges Projekt, sondern ein kontinuierlicher Prozess. Mit strukturiertem Projektmanagement unterstützen wir Sie dabei und pflegen Begriffe, Synonyme und Kontextbeispiele, bereinigen Dubletten und entwickeln Ihre Terminologiedatenbank systematisch weiter. So bleibt Ihre Terminologie sauber, skalierbar und jederzeit einsatzbereit – als verlässliche Grundlage für effiziente Prozesse und KI-gestützte Anwendungen.',
            image: 'service_1.png'
        },
        {
            id: 2,
            title: 'Terminologie-Onboarding',
            description: 'Schaffen Sie die Grundlage für konsistente Kommunikation. Wir analysieren Ihre bestehenden Inhalte – von Webseiten bis zu technischen Dokumentationen – und identifizieren Ihre Fachterminologie. Auf dieser Basis strukturieren wir Ihr Begriffsportfolio und richten eine professionelle Termdatenbank ein. So wird Ihr Wissen systematisch erfasst, klar definiert und sofort nutzbar.',
            image: 'service_2.png'
        },
        {
            id: 3,
            title: 'Mitarbeiterschulung',
            description: 'Machen Sie Terminologie zum festen Bestandteil Ihrer Unternehmenspraxis. Wir vermitteln Ihrem Team, warum klare Begriffe entscheidend sind und wie sie im Arbeitsalltag sicher angewendet werden. In praxisorientierten Trainings schaffen wir Verständnis, Akzeptanz und Handlungssicherheit. So wird Ihre Corporate Language unternehmensweit konsistent genutzt und bildet die gemeinsame Grundlage für effiziente Kommunikation und hochwertige Inhalte.',
            image: 'service_3.png'
        },
        {
            id: 4,
            title: 'Terminologie-Arbeit',
            description: 'Sie benötigen kurzfristig Unterstützung bei Ihrer Terminologie? Mit unseren flexiblen Arbeitspaketen reagieren Sie schnell und gezielt auf aktuellen Bedarf. Wir analysieren, optimieren und verfeinern Ihre Terminologie strukturiert und effizient. So entlasten wir Ihre Teams, schaffen Klarheit in der Anwendung und stärken die Qualität Ihrer Unternehmenskommunikation.',
            image: 'service_4.png'
        }
    ]);

    openContactForm(product: Product) {
        this.selectedProduct.set(product);
        this.isModalOpen.set(true);
    }

    closeContactForm() {
        this.isModalOpen.set(false);
        this.selectedProduct.set(null);
    }
}
