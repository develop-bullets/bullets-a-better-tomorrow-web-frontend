/**
 * 쿠키 값 가져오기
 * 존재하지 않으면 undefined 반환
 */
export function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined

  const nameEQ = `${encodeURIComponent(name)}=`
  const parts = document.cookie.split(';')

  for (let part of parts) {
    part = part.trim()
    if (part.startsWith(nameEQ)) {
      const value = part.substring(nameEQ.length)
      return decodeURIComponent(value)
    }
  }

  return undefined
}