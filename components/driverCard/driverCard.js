import styles from "./driverCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisH, faUserCircle } from '@fortawesome/free-solid-svg-icons'

export default function driverCard() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          Driver Id <span style={{ color: "#f7454d" }}>123</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>
      </div>
      <hr />
      <div className={styles.body}>
        <div className={styles.image}>
          <FontAwesomeIcon icon={faUserCircle} size="4x" />
        </div>
        <div className={styles.description}>
          <div className={styles.infoSection}>
            <div className={styles.title}>Name Driver</div>
            <div className={styles.subtitle}>First Name, Last Name</div>
          </div>
          <div className={styles.infoSection}>
            <div className={styles.title}>Telephone</div>
            <div className={styles.subtitle}>Phone Number</div>
          </div>
          <div className={styles.infoSection}>
            <div className={styles.title}>Email</div>
            <div className={styles.subtitle}>Email Address</div>
          </div>
          <div className={styles.infoSection}>
            <div className={styles.title}>Tanggal Lahir</div>
            <div className={styles.subtitle}>DD-MM-YYYY</div>
          </div>
        </div>
      </div>
    </div>
  );
}
