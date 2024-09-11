import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingSpinComponent } from '@unispace/ui';

@Component({
  standalone: true,
  imports: [RouterOutlet, LoadingSpinComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'forms-clone';
}
