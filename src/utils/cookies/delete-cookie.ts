import { type CookieOptions } from './types'


/**
 * 쿠키 삭제
 * - 과거 날짜로 만료일을 설정하는 방식
 */
export function deleteCookie(
  name: string,
  options: Pick<CookieOptions, 'path' | 'domain'> = {},
): void {
  if (typeof document === 'undefined') return

  const { path = '/', domain } = options
  let cookie = `${encodeURIComponent(name)}=; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=${path}`

  if (domain) {
    cookie += `; Domain=${domain}`
  }

  document.cookie = cookie
}