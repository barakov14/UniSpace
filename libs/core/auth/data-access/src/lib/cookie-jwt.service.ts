import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieJwtService {

  private cookieExpireDays = 7;

  setTokens(accessToken: string, refreshToken: string): void {
    this.setCookie('accessToken', accessToken, this.cookieExpireDays);
    this.setCookie('refreshToken', refreshToken, this.cookieExpireDays);
  }

  isExistTokens(): boolean {
    return !!this.getAccessToken() && !!this.getRefreshToken()
  }

  getAccessToken(): string | null {
    return this.getCookie('accessToken')
  }

  getRefreshToken(): string | null {
    return this.getCookie('refreshToken')
  }

  removeTokens(): void {
    this.setCookie('accessToken', '', -1); // Устанавливаем дату истечения в прошлом
    this.setCookie('refreshToken', '', -1); // Устанавливаем дату истечения в прошлом
  }

  private setCookie(name: string, value: string, days: number): void {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value || ''}${expires}; path=/`;
  }

  private getCookie(name: string): string | null {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
}
