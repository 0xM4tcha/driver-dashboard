import DriverCard from '../components/driverCard/driverCard';
import styles from '../styles/home.module.css';
import NotFound from '../components/notFound/notFound';
import transformDriver from '../utils/transform/driver';

export async function getStaticProps() {
  const page = '1'
  const res = await fetch(`https://randomuser.me/api/?page=${page}&results=5&seed=abc`)
  const resJson = await res.json()
  const { results } = resJson;
  const drivers = transformDriver(results);

  return {
      props: { drivers }
  }
}

export default function Home({ drivers }) {
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
