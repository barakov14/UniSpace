import { EMPTY, Observable } from 'rxjs';
import { inject } from '@angular/core';
import { CookieJwtService } from '../cookie-jwt.service';
import { AuthService } from '@unispace/auth/data-access';
import { UserCredentials } from '../models/current-user.model';

export function initAuthFactory(): () => Observable<UserCredentials> {
  const cookieJwtService = inject(CookieJwtService)
  const authService = inject(AuthService)

  return () => {
    return !!cookieJwtService.getRefreshToken() ? authService.initAuth() : EMPTY
  }
}
