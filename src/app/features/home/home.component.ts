import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TerminologyListComponent } from '../terminology/terminology-list/terminology-list.component';

@Component({
    selector: 'app-home',
    imports: [TerminologyListComponent],
    templateUrl: './home.html',
    styleUrl: './home.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent { }
