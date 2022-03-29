import styles from './header.module.css';
import PlusIcon from '../../public/plus-icon.png';
import SearchIcon from '../../public/search-icon.png';
import Image from 'next/image';

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
            <Image src={SearchIcon} alt="search icon" width={15} height={15} />
          </div>
          <input className={styles.input} placeholder='cari driver'></input>
        </div>
        <div className={styles.button}>
          <div className={styles.labelButton}>Tambah Driver</div>
          <div className={styles.plusIcon}>
            <Image src={PlusIcon} alt="plus icon" width={10} height={10} />
          </div>
        </div>
      </div>
    </div>
  )
}
