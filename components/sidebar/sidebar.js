import styles from './sidebar.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MENU } from '../../constants/menu'
import { useState } from 'react';

export default function sidebar() {

  const [ selectedMenu, setSelectedMenu ] = useState(1);

  return (
    <div className={styles.sidebar}>
      {
        MENU.map((menu, idx) => {
          const { id, icon, label } = menu;
          const color = selectedMenu === id ? 'red' : 'black';
          return (
            <div key={idx} className={styles.list} onClick={() => setSelectedMenu(id)}>
              <div style={{ marginRight: '10px' }}>
                <FontAwesomeIcon icon={icon} color={color} />
              </div>
              <p style={{ color }}>{ label }</p>
            </div>
          )
        })
      }
    </div>
  )
}
