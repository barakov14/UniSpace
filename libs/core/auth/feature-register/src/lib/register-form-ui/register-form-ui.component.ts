import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'us-register-register-form-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register-form-ui.component.html',
  styleUrl: './register-form-ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormUiComponent {}
