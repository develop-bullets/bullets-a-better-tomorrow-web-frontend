import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import styles from './ui.module.scss'
import type { BaseCompProps } from '@/types';

type RoutePageBProps = BaseCompProps

export const RoutePageB = ({ classes, style }: RoutePageBProps) => {
  const { pathname } = useLocation()

  return (
    <div className={clsx(styles.pageB, classes)} style={style}>
      <span>Page B: {pathname}</span>
    </div>
  )
}