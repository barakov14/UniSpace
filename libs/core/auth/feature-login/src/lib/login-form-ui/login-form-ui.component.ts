import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'us-login-login-form-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-form-ui.component.html',
  styleUrl: './login-form-ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormUiComponent {}
