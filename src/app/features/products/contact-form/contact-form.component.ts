import { ChangeDetectionStrategy, Component, input, output, inject, signal, computed } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { LanguageService } from '../../../core/services/language.service';

@Component({
    selector: 'app-contact-form',
    imports: [ReactiveFormsModule],
    templateUrl: './contact-form.component.html',
    styleUrl: './contact-form.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactFormComponent {
    private fb = inject(FormBuilder);
    private http = inject(HttpClient);
    private langService = inject(LanguageService);
    readonly t = computed(() => this.langService.translations().contact);

    selectedProductTitle = input.required<string>();
    close = output<void>();

    isLoading = signal(false);
    isSuccess = signal(false);
    errorMessage = signal<string | null>(null);

    contactForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', []],
        text: ['', [Validators.required, Validators.minLength(10)]]
    });

    onSubmit() {
        if (this.contactForm.invalid || this.isLoading()) return;

        this.isLoading.set(true);
        this.errorMessage.set(null);

        const payload = {
            ...this.contactForm.value,
            source: `TermShepherd anfrage - ${this.selectedProductTitle()}`
        };

        this.http.post('https://api.toptranslation.com/v2/contact_messages', payload)
            .pipe(finalize(() => this.isLoading.set(false)))
            .subscribe({
                next: () => {
                    this.isSuccess.set(true);
                    this.contactForm.reset();
                },
                error: (err) => {
                    console.error('API Error:', err);
                    const msg = this.langService.currentLang() === 'de'
                        ? 'Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.'
                        : 'There was an error sending your message. Please try again later.';
                    this.errorMessage.set(msg);
                }
            });
    }

    onClose() {
        this.close.emit();
    }
}
