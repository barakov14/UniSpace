import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzFormControlComponent, NzFormDirective, NzFormItemComponent } from 'ng-zorro-antd/form';
import { NzInputDirective, NzInputGroupComponent } from 'ng-zorro-antd/input';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { NzCheckboxComponent } from 'ng-zorro-antd/checkbox';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { RouterLink } from '@angular/router';
import { LoginRequest } from '@unispace/auth/data-access';
import { APPLICATION_NAME } from '@unispace/utils';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzAlertComponent } from 'ng-zorro-antd/alert';

@Component({
  selector: 'us-login-form-ui',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormItemComponent,
    NzFormControlComponent,
    NzInputGroupComponent,
    NzInputDirective,
    NzRowDirective,
    NzColDirective,
    NzCheckboxComponent,
    NzButtonComponent,
    NzFormDirective,
    RouterLink,
    NzCardComponent,
    NzAlertComponent,
  ],
  templateUrl: './login-form-ui.component.html',
  styleUrl: './login-form-ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormUiComponent {
  private readonly fb = inject(NonNullableFormBuilder);
  public appName = inject(APPLICATION_NAME);

  onSubmit = output<LoginRequest>();

  isLoading = input<boolean>(false);
  errors = input<string[]>([]);

  validateForm: FormGroup<{
    username: FormControl<string>;
    password: FormControl<string>;
    // remember: FormControl<boolean>;
  }> = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    // remember: [true],
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      this.onSubmit.emit(this.validateForm.getRawValue());
    }
  }
}
