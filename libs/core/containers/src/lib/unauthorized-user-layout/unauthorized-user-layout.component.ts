import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'unauthorized-user-layout-unauthorized-user-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './unauthorized-user-layout.component.html',
  styleUrl: './unauthorized-user-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnauthorizedUserLayoutComponent {}
