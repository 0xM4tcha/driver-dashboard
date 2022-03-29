import styles from './footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function footer() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div>
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
        <div>Previous Page</div>
      </div>
      <div className={styles.row}>
        <div>Next Page</div>
        <div>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
    </div>
  )
}
