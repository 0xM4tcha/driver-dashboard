import DriverCard from "../../components/driverCard/driverCard";
import styles from './drivers.module.css';
import Head from "next/head";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

import { useDrivers } from "../../store/driver";
export { getServerSideProps } from "../../store/driver";
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";

export default function Drivers() {
  const { drivers, setFilter, filter  } = useDrivers();
  const router = useRouter();
  const page = parseInt(router.query.page);
  const [ isPrevDisabled, setPrevDisabled ] = useState(false);
  const [ isNextDisabled, setNextDisabled ] = useState(false);

  useEffect(() => {
    setPrevDisabled(page === 1);
    setNextDisabled(drivers.length < 5)
  }, [ page, drivers ])

	const handlePrev = () => {
    router.back();
	}

	const handleNext = () => {
    const nextPage = page + 1;
    router.push(`./${nextPage}`)
	}

  const handleSearch = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div>
      <Head>
        <title>Drivers Dashboard | Drivers Managment</title>
        <meta name="keywords" content="drivers"></meta>
      </Head>
      <div>
        <Header handleSearch={handleSearch} filter={filter} />
        <div style={{ paddingTop: "10px" }}>
          <div className={styles.drivers}>
            {
              drivers.length < 1 ? 
              ( <div className="notFound">no drivers found</div> ) : 
              (
                drivers.map((driver, idx) => {
                  return (
                    <div key={`driver-${idx}`} className={styles.cardWrapper}>
                      <DriverCard driver={driver} />
                    </div>
                  );
                })
              )}
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "10px" }}>
        <Footer isPrevDisabled={isPrevDisabled} isNextDisabled={isNextDisabled} onPrev={handlePrev} onNext={handleNext} />
      </div>
    </div>
  );
}
