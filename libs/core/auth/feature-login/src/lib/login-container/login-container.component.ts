import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, signal } from '@angular/core';
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

  #isLoading = signal<boolean>(false)

  public isLoading = computed(() => this.#isLoading())

  #errors = signal<string[]>([])

  public getErrors = computed(() => this.#errors())



  onSubmit(formData: LoginRequest) {
    this.authService.login(formData)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res) => {
          this.authService.setCurrentUser(res)
        },
        error: (err) => {
          this.#errors.update(() => ([...err.error.message]))
        }
      })
  }

}
