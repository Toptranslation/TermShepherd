import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface Term {
    id: number;
    term: string;
    definition: string;
    category: string;
}

@Component({
    selector: 'app-terminology-list',
    imports: [],
    templateUrl: './terminology-list.html',
    styleUrl: './terminology-list.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TerminologyListComponent {
    readonly terms = signal<Term[]>([
        {
            id: 1,
            term: 'Algorithm',
            definition: 'A set of instructions designed to perform a specific task.',
            category: 'Computer Science'
        },
        {
            id: 2,
            term: 'API',
            definition: 'Application Programming Interface; a set of functions and procedures allowing the creation of applications that access the features or data of an operating system, application, or other service.',
            category: 'Development'
        },
        {
            id: 3,
            term: 'Cloud Computing',
            definition: 'The practice of using a network of remote servers hosted on the internet to store, manage, and process data, rather than a local server or a personal computer.',
            category: 'Infrastructure'
        },
        {
            id: 4,
            term: 'Compiler',
            definition: 'A program that converts instructions into a machine-code or lower-level form so that they can be read and executed by a computer.',
            category: 'Computer Science'
        },
        {
            id: 5,
            term: 'Component',
            definition: 'A modular, reusable building block of software.',
            category: 'software engineering'
        },
        {
            id: 6,
            term: 'Dependency Injection',
            definition: 'A programming technique in which an object or function receives other objects or functions that it depends on.',
            category: 'Design Patterns'
        }
    ]);
}
