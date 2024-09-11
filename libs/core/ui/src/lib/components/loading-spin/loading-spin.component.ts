import { ChangeDetectionStrategy, Component, inject, NgZone, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSpinComponent } from 'ng-zorro-antd/spin';
import { NavigationCancel, NavigationEnd, NavigationError, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'us-loading-spin',
  standalone: true,
  imports: [CommonModule, NzSpinComponent],
  templateUrl: './loading-spin.component.html',
  styleUrl: './loading-spin.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingSpinComponent {
  loading = signal<boolean>(false);
  private readonly router = inject(Router)
  private readonly ngZone = inject(NgZone)


  constructor() {
    this.router.events
      .pipe(takeUntilDestroyed())
      .subscribe(event => {
        this.loading.set(true)

        if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
          // Добавляем задержку перед скрытием загрузчика
          this.ngZone.runOutsideAngular(() => {
            setTimeout(() => {
              this.loading.set(false) // Скрываем загрузчик
            }, 300); // Задержка в 1 секунду (1000 мс)
          })
        }
      })
  }
}
