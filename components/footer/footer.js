import styles from './footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

export default function footer() {
  const [ isPrevDisable, setPrevDisable ] = useState(true);
  const [ isNextDisable, setIsNextDisable ] = useState(false);

  const handleNext = () => {
    console.log('handleNext');
  }
  return (
    <div className={styles.container}>
      <div className={isPrevDisable ? styles.disabled : styles.prev}>
        <div>
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
        <div>Previous Page</div>
      </div>
      <div onClick={handleNext} className={isNextDisable ? styles.disabled : styles.next}>
        <div>Next Page</div>
        <div>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
    </div>
  )
}
