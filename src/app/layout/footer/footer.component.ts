import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
    selector: 'app-footer',
    imports: [NgOptimizedImage],
    templateUrl: './footer.html',
    styleUrl: './footer.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
    protected readonly year = signal(new Date().getFullYear());
    toptranslation: any;
}
