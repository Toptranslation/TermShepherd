import { ChangeDetectionStrategy, Component, signal, inject, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { LanguageService, Lang } from '../../core/services/language.service';

@Component({
    selector: 'app-header',
    imports: [RouterLink, RouterLinkActive, NgOptimizedImage],
    templateUrl: './header.html',
    styleUrl: './header.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class.is-scrolled]': 'isScrolled()',
        '(window:scroll)': 'onScroll()'
    }
})
export class HeaderComponent {
    private readonly langService = inject(LanguageService);
    readonly t = computed(() => this.langService.translations().header);
    readonly currentLang = this.langService.currentLang;

    isLangMenuOpen = signal(false);
    isThemenMenuOpen = signal(false);
    isScrolled = signal(false);

    onScroll() {
        this.isScrolled.set(window.scrollY > 20);
    }

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
