import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
}

@Component({
    selector: 'app-products',
    imports: [NgOptimizedImage],
    templateUrl: './products.html',
    styleUrl: './products.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
    readonly products = signal<Product[]>([
        {
            id: 2, // Moved to top/featured
            title: 'Laufendes Terminologiemanagement',
            description: 'Ihr Terminologie-Partner für den Dauerbetrieb. Wir garantieren Konsistenz und Aktualität durch proaktives Projektmanagement. Von der Pflege von Synonymen und Kontextbeispielen bis zur Bereinigung von Dubletten – wir halten Ihre Sprachdaten sauber, damit Ihre Teams effizient arbeiten können.',
            image: 'service-2.png'
        },
        {
            id: 1,
            title: 'Terminologie-Onboarding',
            description: 'Starten Sie durch mit einer soliden Basis. Wir analysieren Ihre bestehenden Inhalte – von Webseiten bis zu technischen Dokumentationen – und extrahieren Ihre Kern-Terminologie. Wir richten Ihre professionelle Termdatenbank ein und strukturieren Ihr Wissen für den sofortigen Einsatz.',
            image: 'service-1.png'
        },
        {
            id: 3,
            title: 'Mitarbeiterschulung',
            description: 'Verwandeln Sie Sprache in ein Werkzeug. Wir zeigen Ihrem Team, warum präzise Terminologie entscheidend ist und wie man sie effektiv nutzt. Unsere praxisnahen Schulungen sichern die Akzeptanz und korrekte Anwendung Ihrer Corporate Language im gesamten Unternehmen.',
            image: 'service-3.png'
        },
        {
            id: 4,
            title: 'Terminologie-Arbeit',
            description: 'Sie brauchen Kurzfristig Hilfe mit der Terminologie? Wir bieten Ihnen eine flexible Lösung mit unseren Terminologie-Arbeitpaketen. Unser Team ist bereit, Ihre Terminologie zu optimieren und zu verfeinern, um Ihre Teams effizient zu unterstützen.',
            image: 'service-4.png'
        }
    ]);
}
