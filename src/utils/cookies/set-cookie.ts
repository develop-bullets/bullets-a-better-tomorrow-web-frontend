import { type CookieOptions } from './types'


/**
 * 쿠키 설정
 * - days를 지정하면 만료일을 설정
 * - days를 생략하면 세션 쿠키(브라우저 종료 시 삭제)
 */
export function setCookie(
  name: string,
  value: string,
  options: CookieOptions = {},
): void {
  if (typeof document === 'undefined') return

  const {
    days,
    path = '/',
    domain,
    secure,
    sameSite = 'Lax',
  } = options

  let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`

  if (typeof days === 'number') {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    cookie += `; Expires=${date.toUTCString()}`
  }

  if (path) {
    cookie += `; Path=${path}`
  }

  if (domain) {
    cookie += `; Domain=${domain}`
  }

  if (secure) {
    cookie += '; Secure'
  }

  if (sameSite) {
    cookie += `; SameSite=${sameSite}`
  }

  document.cookie = cookie
}