import styles from './footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function footer({ onPrev, onNext, isPrevDisabled, isNextDisabled }) {
  return (
    <div className={styles.container}>
      <div onClick={() => onPrev()} className={isPrevDisabled ? styles.disabled : styles.prev}>
        <div>
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
        <div>Previous Page</div>
      </div>
      <div onClick={() => onNext()} className={isNextDisabled ? styles.disabled : styles.next}>
        <div>Next Page</div>
        <div>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
    </div>
  )
}
