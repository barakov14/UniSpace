import { computed, inject, Injectable, signal } from '@angular/core';
import { ApiService } from '@unispace/http';
import { LoginRequest } from './dto/auth.dto';
import { UserCredentials } from './models/current-user.model';
import { concat, concatMap, delay, tap } from 'rxjs';
import { CookieJwtService } from './cookie-jwt.service';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService {
  private readonly httpClient = inject(ApiService)
  private readonly cookieJwtService = inject(CookieJwtService)
  private readonly router = inject(Router)


  #currentUser = signal<UserCredentials | null>(null)

  public getCurrentUser = computed(() => this.#currentUser())

  setCurrentUser(user: UserCredentials) {
    this.#currentUser.set(user)
  }


  login(data: LoginRequest) {
    return this.httpClient.post<UserCredentials, LoginRequest>('/auth/login', data).pipe(
      delay(1000),
      tap((res) => {
        this.cookieJwtService.setTokens(
          res.user.accessToken as string,
          res.user.refreshToken as string
        )
      })
    )
  }

  public initAuth() {
    return this.httpClient.post<{accessToken: string, refreshToken: string}, void>(
      '/auth/refresh'
    ).pipe(
      tap((res) => {
        this.cookieJwtService.setTokens(
          res.accessToken as string,
          res.refreshToken as string
        )
      }),
      concatMap(() => this.fetchCurrentUser())
    )
  }

  private fetchCurrentUser() {
    return this.httpClient.get<UserCredentials>(
      '/auth/me'
    ).pipe(
      tap((res) => {
        this.#currentUser.update(() => ({...res}))
      })
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  register() {}
}
