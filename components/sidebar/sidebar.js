import styles from './sidebar.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faUserCircle, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

export default function sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.list}>
        <div style={{ marginRight: '10px' }}>
          <FontAwesomeIcon icon={faHome} />
        </div>
        <p>Beranda</p>
      </div>
      <div className={styles.list}>
        <div style={{ marginRight: '10px' }}>
          <FontAwesomeIcon icon={faUserCircle} />
        </div>
        <p>Driver Management</p>
      </div>
      <div className={styles.list}>
        <div style={{ marginRight: '10px' }}>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </div>
        <p>Pickup</p>
      </div>
    </div>
  )
}
