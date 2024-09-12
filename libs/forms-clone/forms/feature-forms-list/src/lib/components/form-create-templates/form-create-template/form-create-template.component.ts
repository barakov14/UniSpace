import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-form-create-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-create-template.component.html',
  styleUrl: './form-create-template.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormCreateTemplateComponent {}
