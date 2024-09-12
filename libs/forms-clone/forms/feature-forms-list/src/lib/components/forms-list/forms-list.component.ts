import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-forms-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forms-list.component.html',
  styleUrl: './forms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsListComponent {}
