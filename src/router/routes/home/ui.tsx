import { Link } from 'react-router-dom';
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
        <dl>
          <dt>ExternalLink:</dt>
          <dd>
            <Link to={'https://google.com'}>Google</Link>
          </dd>
        </dl>
      </div>
    </>
  )
}

export default RouteHome