import { useState } from 'react';
import Sidebar from '../sidebar/sidebar' 
import ShipperIcon from '../../public/shipper-icon.png'
import styles from "./navbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

export default function navbar() {

  const [isShowSidebar, setShowSidebar] = useState(false);
  
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.leftSection} style={{ flex: 0.23 }}>
          <div className={styles.menu} onClick={() => setShowSidebar(!isShowSidebar)}>
            <FontAwesomeIcon icon={isShowSidebar ? faTimes : faBars} />
          </div>
          <Image src={ShipperIcon} alt="shipper icon" width={50} height={15} />
        </div>
        <div className={styles.rightSection} style={{ flex: 0.25 }}>
          <p className={styles.rightTitle}>Hello, <span style={{ color: 'red' }}>Shipper User</span></p>
          <FontAwesomeIcon
            icon={faUserCircle}
            color="gray"
            size="2x"
          />
        </div>
      </div>
      {
        isShowSidebar && 
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
      }
    </div>
  )
}
