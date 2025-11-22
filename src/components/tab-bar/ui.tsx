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
        <Link to={'/callback/fcm?data=%7B%0A%20%20%20%20"route"%3A%20"%2Fpromotions%2F123"%2C%0A%20%20%20%20"couponId"%3A%20"SUMMER2024"%2C%0A%20%20%20%20"custom_key"%3A%20"custom_value"%0A%20%20%7D'} className={clsx(styles.tab)}>
          <span className={clsx(styles.icon)} />
          <span className={clsx(styles.label)}>Callback FCM</span>
        </Link>
      </div>
    </div>
  )
}