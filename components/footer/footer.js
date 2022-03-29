import styles from './footer.module.css';
import ArrowPrevIcon from '../../public/arrow-prev-icon.png';
import ArrowNextIcon from '../../public/arrow-next-icon.png';
import Image from 'next/image';

export default function footer() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div>
          <Image src={ArrowPrevIcon} alt="prev icon" width={10} height={10} />
        </div>
        <div>Previous Page</div>
      </div>
      <div className={styles.row}>
        <div>Next Page</div>
        <div>
          <Image src={ArrowNextIcon} alt="next icon" width={10} height={10} />
        </div>
      </div>
    </div>
  )
}
