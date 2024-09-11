import { computed, inject, Injectable, signal } from '@angular/core';
import { ApiService } from '@unispace/http';
import { LoginRequest } from './dto/auth.dto';
import { CurrentUser } from './models/current-user.model';
import { delay, tap } from 'rxjs';
import { CookieJwtService } from './cookie-jwt.service';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService {
  private readonly httpClient = inject(ApiService)
  private readonly cookieJwtService = inject(CookieJwtService)
  private readonly router = inject(Router)


  #currentUser = signal<CurrentUser | null>(null)
  #isLoading = signal<boolean>(false)

  public getCurrentUser = computed(() => this.#currentUser())
  public isLoading = computed(() => this.#isLoading())


  login(data: LoginRequest) {
    this.#isLoading.set(true)
    return this.httpClient.post<CurrentUser, LoginRequest>('/auth/login', data).pipe(
      delay(1000),
      tap({
        next: (res) => {
          this.#currentUser.set(res)
          console.log(this.getCurrentUser())
          this.cookieJwtService.setTokens(
            res.user.accessToken as string,
            res.user.refreshToken as string
          )
          this.#isLoading.set(false)
          // this.router.navigateByUrl('/forms')
        }
      })
    )
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  register() {}
}
