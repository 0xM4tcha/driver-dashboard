import styles from './header.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useDrivers } from 'store/driver';

export default function header() {
  const { setFilter, filter } = useDrivers();

  const handleSearch = (e) => {
    setFilter(e.target.value)
  }
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
          <input value={filter} onChange={(e) => handleSearch(e)} className={styles.input} placeholder='cari driver'></input>
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
