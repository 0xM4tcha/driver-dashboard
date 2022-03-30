import DriverCard from "../../components/driverCard/driverCard";
import styles from "../../styles/home.module.css";
import NotFound from "../../components/notFound/notFound";
import Head from "next/head";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

import { useDrivers } from "../../store/driver";
export { getStaticProps } from "../../store/driver";

export default function Home() {
  const { drivers } = useDrivers();
	const handlePrev = () => {
		console.log('handlePrev')
	}
	const handleNext = () => {
		console.log('handleNext')
	}
  return (
    <div>
      <Head>
        <title>Drivers Dashboard | Drivers Managment</title>
        <meta name="keywords" content="drivers"></meta>
      </Head>
      <div>
        <Header />
        <div style={{ paddingTop: "10px" }}>
          <div className={styles.listContainer}>
            {drivers.length < 1 ? (
              <NotFound />
            ) : (
              drivers.map((driver, idx) => {
                return (
                  <div key={idx} className={styles.cardWrapper}>
                    <DriverCard driver={driver} />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "10px" }}>
        <Footer onPrev={handlePrev} onNext={handleNext} />
      </div>
    </div>
  );
}
