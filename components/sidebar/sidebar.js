import styles from './sidebar.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MENU } from '../../constants/menu'
import { useState } from 'react';
import Link from 'next/link';

export default function sidebar() {
  const [ selectedMenu, setSelectedMenu ] = useState(1);

  return (
    <div className={styles.sidebar}>
      {
        MENU.map((menu, idx) => {
          const { id, icon, label, route } = menu;
          const color = selectedMenu === id ? 'red' : 'black';
          return (
            <Link href={route} key={idx}>
              <div className={styles.list} onClick={() => setSelectedMenu(id)}>
                <div style={{ marginRight: '10px' }}>
                  <FontAwesomeIcon icon={icon} color={color} />
                </div>
                <p style={{ color }}>{ label }</p>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}
