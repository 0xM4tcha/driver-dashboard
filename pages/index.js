import DriverCard from '../components/driverCard/driverCard';
import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.cardWrapper}>
        <DriverCard />
      </div>
      <div className={styles.cardWrapper}>
        <DriverCard />
      </div>
      <div className={styles.cardWrapper}>
        <DriverCard />
      </div>
      <div className={styles.cardWrapper}>
        <DriverCard />
      </div>
      <div className={styles.cardWrapper}>
        <DriverCard />
      </div>
    </div>
  )
}
