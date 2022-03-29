import styles from "./driverCard.module.css";
import ProfileIcon from "../../public/profile-icon.png";
import MoreIcon from '../../public/more-icon.png';
import Image from "next/image";

export default function driverCard() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          Driver Id <span style={{ color: "#f7454d" }}>123</span>
        </div>
        <div>
          <Image src={MoreIcon} alt="profile image" width={10} height={10} />
        </div>
      </div>
      <hr />
      <div className={styles.body}>
        <div className={styles.image}>
          <Image src={ProfileIcon} alt="profile image" width={65} height={65} />
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
