import DriverCard from '../components/driverCard/driverCard';
import styles from '../styles/home.module.css';
import NotFound from '../components/notFound/notFound';

import { useDrivers } from '../store/driver';
export { getStaticProps } from '../store/driver';

export default function Home() {
  const { drivers } = useDrivers();
  return (
      <div className={styles.listContainer}>
        {
          drivers.length < 1 ?
            (
              <NotFound />
            )
          :
          drivers.map((driver, idx) => {
            return (
              <div key={idx} className={styles.cardWrapper}>
                <DriverCard driver={driver} />
              </div>
            )
          })
        }
      </div>
  )
}
