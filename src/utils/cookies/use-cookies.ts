import { getCookie } from './get-cookie.ts';
import { setCookie } from './set-cookie.ts';
import { deleteCookie } from './delete-cookie.ts';

export const useCookies = () => {
  return {
    getCookie,
    setCookie,
    deleteCookie,
  }
}