import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NzPageHeaderComponent,
  NzPageHeaderExtraDirective,
  NzPageHeaderTitleDirective
} from 'ng-zorro-antd/page-header';

@Component({
  selector: 'fs-dynamic-header',
  standalone: true,
  imports: [
    CommonModule,
    NzPageHeaderComponent,
    NzPageHeaderTitleDirective,
    NzPageHeaderExtraDirective,
  ],
  templateUrl: './dynamic-header.component.html',
  styleUrl: './dynamic-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicHeaderComponent {}
