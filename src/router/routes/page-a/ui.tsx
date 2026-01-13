import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import styles from './ui.module.scss'
import type { BaseCompProps } from '@/types';

type RoutePageAProps = BaseCompProps

export const RoutePageA = ({ classes, style }: RoutePageAProps) => {
  const { pathname } = useLocation()

  return (
    <div className={clsx(styles.pageA, classes)} style={{ ...style, backgroundColor: 'rgba(255, 0, 0, 0.03)' }}>
      <span>Page A: {pathname}</span>

      <form>
        <input type="text" placeholder={'키보드 테스트'} />
      </form>
    </div>
  )
}