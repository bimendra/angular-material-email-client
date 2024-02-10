import { Component } from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MatChip, MatChipSet } from '@angular/material/chips';

@Component({
  selector: 'app-email-summary',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardFooter,
    MatChipSet,
    MatChip,
  ],
  templateUrl: './email-summary.component.html',
  styleUrl: './email-summary.component.scss',
})
export class EmailSummaryComponent {
  categories: string[] = ['meeting', 'work', 'important'];
}
