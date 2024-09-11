import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService, LoginRequest } from '@unispace/auth/data-access';
import { LoginFormUiComponent } from '../login-form-ui/login-form-ui.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'us-login-container',
  standalone: true,
  imports: [
    CommonModule,
    LoginFormUiComponent,
  ],
  templateUrl: './login-container.component.html',
  styleUrl: './login-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginContainerComponent {
  private readonly authService = inject(AuthService)
  private readonly destroyRef = inject(DestroyRef)

  public isLoading = this.authService.isLoading



  onSubmit(formData: LoginRequest) {
    this.authService.login(formData)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
      })
  }

}
