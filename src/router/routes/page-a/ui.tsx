import clsx from 'clsx';
import styles from './ui.module.scss'
import type { BaseCompProps } from '@/types';

type RoutePageAProps = BaseCompProps

export const RoutePageAUI = ({ classes, style }: RoutePageAProps) => {
  return (
    <div className={clsx(styles.pageA, classes)} style={style}>
      <span>Page A: start</span>
      <span>Page A: end</span>
    </div>
  )
}