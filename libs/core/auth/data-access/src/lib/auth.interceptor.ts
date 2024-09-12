import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieJwtService } from '@unispace/auth/data-access';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const cookieJwtService = inject(CookieJwtService)

  const setHeaders = (token: string | null) => {
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    })
  }

  if (cookieJwtService.isExistTokens()) {
    const token = req.url.startsWith('/api/auth/refresh')
      ? cookieJwtService.getRefreshToken()
      : cookieJwtService.getAccessToken();

    req = setHeaders(token);
  }

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        cookieJwtService.removeTokens()
      }
      return throwError(() => error)
    }),
  )
};
