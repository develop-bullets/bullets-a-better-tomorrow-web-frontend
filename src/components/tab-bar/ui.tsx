import { Link } from 'react-router-dom'
import clsx from 'clsx';
import styles from './ui.module.scss'
import type {RefObject} from "react";

interface TabBarProps {
  ref: RefObject<HTMLDivElement | null>
}

export const TabBar = ({ ref }: TabBarProps) => {
  return (
    <div ref={ref} className={clsx(styles.tabBar)}>
      <div className={clsx(styles.inner)}>
        <Link to={'/'} className={clsx(styles.tab)}>
          <span className={clsx(styles.icon)} />
          <span className={clsx(styles.label)}>Home</span>
        </Link>
        <Link to={'/page-a'} className={clsx(styles.tab)}>
          <span className={clsx(styles.icon)} />
          <span className={clsx(styles.label)}>Page A</span>
        </Link>
        <Link to={'/page-b'} className={clsx(styles.tab)}>
          <span className={clsx(styles.icon)} />
          <span className={clsx(styles.label)}>Page B</span>
        </Link>
        <Link to={'/page-c'} className={clsx(styles.tab)}>
          <span className={clsx(styles.icon)} />
          <span className={clsx(styles.label)}>Page C</span>
        </Link>
      </div>
    </div>
  )
}