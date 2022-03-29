import styles from "./driverCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";

export default function driverCard({ driver }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          Driver Id <span style={{ color: "#f7454d" }}>{ driver.id }</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>
      </div>
      <hr />
      <div className={styles.body}>
        <div className={styles.image}>
          <Image src={driver.picture} alt="picture driver" width={50} height={50} />
        </div>
        <div className={styles.description}>
          <div className={styles.infoSection}>
            <div className={styles.title}>Name Driver</div>
            <div className={styles.subtitle}>{ driver.firstName }, { driver.lastName }</div>
          </div>
          <div className={styles.infoSection}>
            <div className={styles.title}>Telephone</div>
            <div className={styles.subtitle}>{ driver.phoneNumber }</div>
          </div>
          <div className={styles.infoSection}>
            <div className={styles.title}>Email</div>
            <div className={styles.subtitle}>{ driver.email }</div>
          </div>
          <div className={styles.infoSection}>
            <div className={styles.title}>Tanggal Lahir</div>
            <div className={styles.subtitle}>{ driver.dob }</div>
          </div>
        </div>
      </div>
    </div>
  );
}
