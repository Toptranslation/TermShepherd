import { Injectable, signal, computed, inject } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

export type Lang = 'de' | 'en';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    private readonly router = inject(Router);
    private readonly route = inject(ActivatedRoute);
    readonly currentLang = signal<Lang>('de');

    constructor() {
        this.router.events.pipe(
            filter((event): event is NavigationEnd => event instanceof NavigationEnd),
            map(() => this.router.routerState.root.snapshot.queryParamMap.get('lang'))
        ).subscribe((lang) => {
            if (lang === 'en' || lang === 'de') {
                if (this.currentLang() !== lang) {
                    this.currentLang.set(lang);
                }
            } else if (!lang) {
                // Default to 'de' and sync to URL if missing
                this.setLanguage('de');
            }
        });
    }

    readonly translations = computed(() => {
        const lang = this.currentLang();
        return lang === 'de' ? DE : EN;
    });

    setLanguage(lang: Lang) {
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { lang },
            queryParamsHandling: 'merge'
        });
    }
}

const DE = {
    header: {
        home: 'Startseite',
        themes: 'Themen',
        services: 'Leistungen',
        terminology: 'Terminologie',
        currency: 'Aktualität',
        ontology: 'Ontologie'
    },
    hero: {
        title: 'Precision in language = Power in AI',
        subtitle: 'Beherrsche die Terminologie, die die Zukunft der Intelligenz definiert.'
    },
    home: {
        services_heading: 'Unsere Leistungen',
        why_terminology: {
            title: 'Warum ist Terminologie wichtig?',
            description: `
                <p>In der Ära der Künstlichen Intelligenz ist präzise Sprache ein strategischer Erfolgsfaktor. 
                Terminologie ist weit mehr als eine Sammlung von Fachbegriffen – sie bildet die Grundlage für klare, 
                konsistente und skalierbare Unternehmenskommunikation. Gerade bei der KI-gestützten Texterstellung und in 
                Übersetzungsprozessen entscheidet die einheitliche Verwendung definierter Begriffe über Effizienz, Qualität und Markenkonsistenz.</p>
                <p>KI-Systeme liefern nur dann verlässliche Ergebnisse, wenn sie auf einer sauberen und strukturierten Datenbasis aufbauen. 
                Eine gepflegte Terminologie stellt sicher, dass Inhalte korrekt interpretiert, Fachbegriffe konsistent verwendet und 
                unternehmensspezifische Kontexte zuverlässig berücksichtigt werden. So entstehen Texte, die fachlich präzise sind, zur Marke 
                passen und sich nahtlos in bestehende Kommunikationsstrukturen einfügen.</p>
            `
        },
        why_now: {
            title: 'Warum gerade jetzt?',
            description: `
                <p>KI-Technologien werden in rasantem Tempo in Geschäftsprozesse integriert und entwickeln sich zunehmend zum festen Bestandteil 
                unternehmerischer Wertschöpfung. Unternehmen, die ihre sprachlichen Grundlagen anschließend nicht systematisch strukturieren, 
                riskieren Inkonsistenz und unnötige Korrekturschleifen. Eine gepflegte Terminologie ist deshalb keine Option, sondern strategische 
                Grundlage – für effiziente Abläufe, konsistente Kommunikation und leistungsfähige, skalierbare KI-Anwendungen.</p>
            `
        },
        ontology: {
            title: 'Was ist Ontologie?',
            description: `
                <p>Ontologien sind formale Repräsentationen von Wissen, die Konzepte, deren Eigenschaften und Beziehungen in einem bestimmten 
                Bereich definieren. Sie bilden die semantische Grundlage für intelligente Systeme, indem sie festlegen, welche Begriffe existieren, 
                wie sie miteinander verbunden sind und welche Bedeutungen sie im Kontext tragen. In der KI ermöglichen Ontologien präzise 
                Schlussfolgerungen, kontextbezogenes Verständnis und konsistente Datenverarbeitung.</p>
                <p>Im Gegensatz zu einfachen Glossaren beschreiben Ontologien nicht nur einzelne Begriffe, sondern strukturieren Wissen 
                hierarchisch und relational. Zum Beispiel:</p>
                <ul>
                    <li>Es definiert Hierarchien (z. B. „Auto“ ist eine Unterklasse von „Fahrzeug“).</li>
                    <li>Es definiert Beziehungen (z. B. „arbeitet bei“ verbindet eine Person mit einem Unternehmen).</li>
                    <li>Es legt Einschränkungen fest (z. B. „ein Mitarbeiter hat genau einen Vorgesetzten“).</li>
                </ul>
                <p>Diese Struktur ermöglicht es KI-Systemen, Bedeutungen zu interpretieren, Zusammenhänge zu erkennen und logische Schlüsse zu ziehen.</p>
            `
        }
    },
    products: {
        cta: 'Gespräch vereinbaren',
        items: [
            {
                id: 1,
                title: 'Laufendes Terminologiemanagement',
                description: `
                    <p>Terminologie ist kein einmaliges Projekt, sondern ein kontinuierlicher Prozess. Mit strukturiertem Projektmanagement unterstützen wir Sie dabei:</p>
                    <ul>
                        <li>Pflege von Begriffen, Synonymen und Kontextbeispielen</li>
                        <li>Bereinigung von Dubletten</li>
                        <li>Systematische Weiterentwicklung Ihrer Terminologiedatenbank</li>
                        <li>Erstellung und pflege von Ontologien</li>
                    </ul>
                    <p>So bleibt Ihre Terminologie sauber, skalierbar und jederzeit einsatzbereit - als verlässliche Grundlage für effiziente Prozesse und KI-gestützte Anwendungen.</p>
                `
            },
            {
                id: 2,
                title: 'Terminologie-Onboarding',
                description: `
                    <p>Schaffen Sie die Grundlage für konsistente Kommunikation. Wir analysieren Ihre bestehenden Inhalte – von Webseiten bis zu technischen Dokumentationen – und identifizieren Ihre Fachterminologie.</p>
                    <p>Auf dieser Basis strukturieren wir Ihr Begriffsportfolio und richten eine professionelle Termdatenbank ein. So wird Ihr Wissen systematisch erfasst, klar definiert und sofort nutzbar.</p>
                `
            },
            {
                id: 3,
                title: 'Mitarbeiterschulung',
                description: `
                    <p>Machen Sie Terminologie zum festen Bestandteil Ihrer Unternehmenspraxis. Wir vermitteln Ihrem Team, warum klare 
                    Begriffe entscheidend sind und wie sie im Arbeitsalltag sicher angewendet werden.</p>
                    <p>In praxisorientierten Trainings schaffen wir Verständnis, Akzeptanz und Handlungssicherheit. So wird Ihre 
                    Corporate Language unternehmensweit konsistent genutzt und bildet die gemeinsame Grundlage für effiziente Kommunikation 
                    und hochwertige Inhalte..</p>
                `
            },
            {
                id: 4,
                title: 'Terminologie-Arbeit',
                description: `
                    <p>Sie benötigen kurzfristig Unterstützung bei Ihrer Terminologie? Mit unseren flexiblen 
                    Arbeitspaketen reagieren Sie schnell und gezielt auf aktuellen Bedarf.</p>
                    <p>Wir analysieren, optimieren und verfeinern Ihre Terminologie strukturiert und effizient. 
                    So entlasten wir Ihre Teams, schaffen Klarheit in der Anwendung und stärken die Qualität Ihrer Unternehmenskommunikation.</p>
                `
            }
        ]
    },
    contact: {
        success_title: 'Vielen Dank!',
        success_msg: 'Ihre Nachricht wurde erfolgreich gesendet. Wir setzen uns in Kürze mit Ihnen in Verbindung.',
        close: 'Schließen',
        title: 'Gespräch vereinbaren',
        subtitle: 'Wir beraten Sie gerne zu',
        labels: {
            name: 'Name',
            email: 'E-Mail',
            phone: 'Telefon',
            message: 'Nachricht / Text'
        },
        placeholders: {
            name: 'Ihr Name',
            email: 'beispiel@firma.de',
            phone: 'Ihr Telefon',
            message: 'Wie können wir Ihnen helfen?'
        },
        buttons: {
            cancel: 'Abbrechen',
            send: 'Senden',
            sending: 'Senden...'
        }
    },
    footer: {
        rights: 'Alle Rechte vorbehalten.'
    }
};

const EN = {
    header: {
        home: 'Home',
        themes: 'Topics',
        services: 'Services',
        terminology: 'Terminology',
        currency: 'Current Urgency',
        ontology: 'Ontology'
    },
    hero: {
        title: 'Precision in language = Power in AI',
        subtitle: 'Master the terminology that defines the future of intelligence.'
    },
    home: {
        services_heading: 'Our Services',
        why_terminology: {
            title: 'Why is terminology important?',
            description: `
                <p>In a world increasingly shaped by artificial intelligence, precise language is no longer a simple 
                question of wording — it is a strategic success factor. Terminology is much more than a collection 
                of technical terms – it forms the basis for clear, consistent and scalable corporate communication. 
                Particularly in AI-supported text creation and translation workflows, the consistent use of defined 
                terminology is critical to ensuring efficiency, quality, and brand integrity.</p>
                <p>AI systems can only deliver reliable results when built on structured, well-maintained data. 
                Professional terminology management ensures that content is interpreted correctly, technical terms 
                are used consistently and company-specific contexts are reliably taken into account. 
                The result: technically precise, brand-aligned content that integrates seamlessly into your existing 
                communication landscape.</p>
            `
        },
        why_now: {
            title: 'Why now?',
            description: `
                <p>AI technologies are being integrated into business processes at a rapid pace. They are no longer 
                experimental tools — they are becoming part of how companies create value.
                Without a structured linguistic foundation, companies risk inconsistencies, misunderstandings, 
                and time-consuming correction loops. Terminology management is therefore not an optional add-on. 
                It is a practical and strategic step toward efficient processes, consistent communication, and scalable AI use.</p>
            `
        },
        ontology: {
            title: 'What Is an Ontology?',
            description: `
                <p>An ontology is a structured way of organising knowledge within a specific domain. It defines concepts, 
                describes their properties, and explains how they relate to one another. In AI systems, ontologies enable 
                precise conclusions, context-related understanding and consistent data processing.</p>
                <p>Unlike a simple glossary, an ontology does more than define individual terms. It organises knowledge 
                in a structured way. For example:</p>
                <ul>
                    <li>It defines hierarchies (e.g., a car is a type of vehicle).</li>
                    <li>It establishes relationships (e.g., a person works for a company).</li>
                    <li>It sets limitations (e.g., an employee has exactly one supervisor).</li>
                </ul>
                <p>This structure allows AI systems to recognise connections, interpret context, and draw logical conclusions.</p>
            `
        }
    },
    products: {
        cta: 'Schedule Consultation',
        items: [
            {
                id: 1,
                title: 'Ongoing Terminology Management',
                description: '<p>Terminology is not a one-off project, but a continuous process. With structured project management, we support you in:</p><ul><li>Maintaining terms, synonyms and context examples</li><li>Cleaning up duplicates</li><li>Systematically developing your terminology database</li></ul><p>Keeping your terminology clean and scalable.</p>'
            },
            {
                id: 2,
                title: 'Terminology Onboarding',
                description: '<p>Create the basis for consistent communication. We analyze your existing content and identify your technical terminology:</p><ul><li>Analysis of existing content</li><li>Identification of technical terminology</li><li>Structuring your terminology portfolio</li><li>Setting up a professional terminology database</li></ul>'
            },
            {
                id: 3,
                title: 'Employee Training',
                description: '<p>Make terminology an integral part of your corporate practice. In our practical training sessions, we cover:</p><ul><li>Why clear terms are crucial</li><li>Reliable application in everyday work</li><li>Building team acceptance and confidence</li></ul>'
            },
            {
                id: 4,
                title: 'Terminology Work',
                description: '<p>Need short-term support? With our flexible work packages, you can react quickly to current needs:</p><ul><li>Structured analysis and optimization</li><li>Efficient refinement of your terminology</li><li>Relieving your internal teams</li></ul>'
            }
        ]
    },
    contact: {
        success_title: 'Thank You!',
        success_msg: 'Your message has been sent successfully. We will get in touch with you shortly.',
        close: 'Close',
        title: 'Schedule Consultation',
        subtitle: 'We would be happy to advise you on',
        labels: {
            name: 'Name',
            email: 'Email',
            phone: 'Phone',
            message: 'Message / Text'
        },
        placeholders: {
            name: 'Your Name',
            email: 'example@company.com',
            phone: 'Your Phone',
            message: 'How can we help you?'
        },
        buttons: {
            cancel: 'Cancel',
            send: 'Send',
            sending: 'Sending...'
        }
    },
    footer: {
        rights: 'All rights reserved.'
    }
};
