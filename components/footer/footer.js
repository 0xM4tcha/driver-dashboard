import styles from './footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

export default function footer({ onPrev, onNext }) {
  const [ isPrevDisable, setPrevDisable ] = useState(false);
  const [ isNextDisable, setIsNextDisable ] = useState(false);
  
  return (
    <div className={styles.container}>
      <div onClick={() => onPrev()} className={isPrevDisable ? styles.disabled : styles.prev}>
        <div>
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
        <div>Previous Page</div>
      </div>
      <div onClick={() => onNext()} className={isNextDisable ? styles.disabled : styles.next}>
        <div>Next Page</div>
        <div>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
    </div>
  )
}
