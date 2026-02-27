import { ChangeDetectionStrategy, Component, signal, inject, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService, Lang } from '../../core/services/language.service';

@Component({
    selector: 'app-header',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './header.html',
    styleUrl: './header.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
    private readonly langService = inject(LanguageService);
    readonly t = computed(() => this.langService.translations().header);
    readonly currentLang = this.langService.currentLang;

    isLangMenuOpen = signal(false);
    isThemenMenuOpen = signal(false);

    setLanguage(lang: Lang) {
        this.langService.setLanguage(lang);
        this.isLangMenuOpen.set(false);
    }

    toggleLangMenu() {
        this.isLangMenuOpen.update(v => !v);
    }

    toggleThemenMenu() {
        this.isThemenMenuOpen.update(v => !v);
    }
}
