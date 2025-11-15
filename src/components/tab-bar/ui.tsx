import { Link } from 'react-router-dom'
import clsx from 'clsx';
import styles from './ui.module.scss'

export const TabBar = () => {
  return (
    <div className={clsx(styles.tabBar)}>
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