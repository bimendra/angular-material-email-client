import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { EmailSummaryComponent } from './components/email-summary/email-summary.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButton,
    MatIconButton,
    MatIcon,
    EmailSummaryComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-material-email-client';
}
