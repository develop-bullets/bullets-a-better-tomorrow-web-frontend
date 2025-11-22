import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from '@/utils/cookies';
import type { BaseCompProps } from '@/types';
import './ui.scss'

type RouteHomeProps = BaseCompProps

export const RouteHome = ({ style }: RouteHomeProps) => {
  const { getCookie } = useCookies()
  const cameraRef = useRef<HTMLInputElement>(null)
  const photoRef = useRef<HTMLInputElement>(null)

  const handleOnOpenCamera = () => {
    cameraRef.current?.click()
  }

  const handleOnOpenPhoto = () => {
    photoRef.current?.click()
  }

  return (
    <>
      <h1>Native Info</h1>
      <div className="card" style={style}>
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
        <dl>
          <dt>Camera:</dt>
          <dd>
            <input ref={cameraRef} type={'file'} multiple={false} accept="image/*, .jpg, .jpeg, .png, .gif, .heic, .webp" style={{ width: 0, height: 0, opacity: 0 }} />
            <button onClick={handleOnOpenCamera}>Open Camera</button>
          </dd>
        </dl>
        <dl>
          <dt>Photo:</dt>
          <dd>
            <input ref={photoRef} type={'file'} multiple={true} accept="image/*, .jpg, .jpeg, .png, .gif, .heic, .webp" style={{ width: 0, height: 0, opacity: 0 }} />
            <button onClick={handleOnOpenPhoto}>Open Photo</button>
          </dd>
        </dl>
        <dl>
          <dt>Video:</dt>
          <dd>
            <video
              controls
              width="100%"
              poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
              playsInline
            >
              <source
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </dd>
        </dl>
      </div>
    </>
  )
}
