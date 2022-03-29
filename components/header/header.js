import styles from './header.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function header() {
  return (
    <div className={styles.header}>
      <div className={styles.leftSection}>
        <div className={styles.title}>Driver Managment</div>
        <div className={styles.subtitle}>Data driver yang bekerja dengan anda</div>
      </div>
      <div className={styles.righSection}>
        <div className={styles.inputWrapper}>
          <div className={styles.search}>
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <input className={styles.input} placeholder='cari driver'></input>
        </div>
        <div className={styles.button}>
          <div className={styles.labelButton}>Tambah Driver</div>
          <div className={styles.plusIcon}>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
      </div>
    </div>
  )
}
