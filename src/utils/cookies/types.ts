export type CookieOptions = {
  days?: number
  path?: string
  domain?: string
  secure?: boolean
  sameSite?: 'Lax' | 'Strict' | 'None'
}