import styles from './sidebar.module.css';
import Image from 'next/image';
import HomeIcon from '../../public/home-icon.png';
import CalendarIcon from '../../public/calendar-icon.png';
import ProfileIcon from '../../public/profile-icon.png';

export default function sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.list}>
        <div style={{ marginRight: '10px' }}>
          <Image src={HomeIcon} alt="home icon" width={20} height={20} />
        </div>
        <p>Beranda</p>
      </div>
      <div className={styles.list}>
        <div style={{ marginRight: '10px' }}>
          <Image src={ProfileIcon} alt="home icon" width={20} height={20} />
        </div>
        <p>Driver Management</p>
      </div>
      <div className={styles.list}>
        <div style={{ marginRight: '10px' }}>
          <Image src={CalendarIcon} alt="home icon" width={20} height={20} />
        </div>
        <p>Pickup</p>
      </div>
    </div>
  )
}
