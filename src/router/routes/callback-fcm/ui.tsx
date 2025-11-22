import {useLocation, useSearchParams} from 'react-router-dom';
import clsx from 'clsx';
import styles from './ui.module.scss'
import type { BaseCompProps } from '@/types';
import {useMemo} from "react";

type RouteCallbackFCMProps = BaseCompProps

export const RouteCallbackFCM = ({ classes, style }: RouteCallbackFCMProps) => {
  const { pathname } = useLocation()
  const [searchParam] = useSearchParams()

  const dataObject = useMemo(() => {
    const params = new URLSearchParams(searchParam);
    const encodedData = params.get('data');

    try {
      if (encodedData) {
        const data = JSON.parse(decodeURIComponent(encodedData));
        return data;
      }

      return {}
    } catch (error) {
      console.error('Error parsing data:', error);
    }
  }, [searchParam])

  return (
    <div className={clsx(styles.pageB, classes)} style={style}>
      <p>CallbackFCM: {pathname}</p>
      <p>params: <code>{JSON.stringify(dataObject, null, 2)}</code></p>
    </div>
  )
}