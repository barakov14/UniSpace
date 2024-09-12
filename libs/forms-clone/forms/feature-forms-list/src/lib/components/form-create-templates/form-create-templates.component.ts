import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-form-create-templates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-create-templates.component.html',
  styleUrl: './form-create-templates.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormCreateTemplatesComponent {}
