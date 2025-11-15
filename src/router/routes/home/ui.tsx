import { useCookies } from '@/utils/cookies';
import './ui.scss'

const RouteHome = () => {
  const { getCookie } = useCookies()

  return (
    <>
      <h1>Native Info</h1>
      <div className="card">
        <dl>
          <dt>AppType:</dt>
          <dd>{getCookie('appType') ?? 'undefined'}</dd>
        </dl>
        <dl>
          <dt>AppVer:</dt>
          <dd>{getCookie('appVer') ?? 'undefined'}</dd>
        </dl>
      </div>
    </>
  )
}

export default RouteHome