import { ChangeDetectionStrategy, Component, signal, inject, computed } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';

@Component({
    selector: 'app-footer',
    imports: [],
    templateUrl: './footer.html',
    styleUrl: './footer.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
    private readonly langService = inject(LanguageService);
    readonly t = computed(() => this.langService.translations().footer);
    protected readonly year = signal(new Date().getFullYear());
}
