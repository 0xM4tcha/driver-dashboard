import React, { useState } from 'react';
// components
import Sidebar from '../sidebar/sidebar' 
// icon
import ShipperIcon from '../../public/shipper-icon.png'
import UserIcon from '../../public/profile-icon.png'
import MenuIcon from '../../public/menu-icon.png'
import CloseIcon from '../../public/close-icon.png'
// style
import styles from "./navbar.module.css"
import Image from 'next/image'

export default function navbar() {

  const [isShowSidebar, setShowSidebar] = useState(false);
  
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.leftSection} style={{ flex: 0.23 }}>
          <div className={styles.menu} onClick={() => setShowSidebar(!isShowSidebar)}>
            <Image src={isShowSidebar ? CloseIcon : MenuIcon} alt="shipper icon" width={20} height={15} />
          </div>
          <Image src={ShipperIcon} alt="shipper icon" width={50} height={15} />
        </div>
        <div className={styles.rightSection} style={{ flex: 0.25 }}>
          <p className={styles.rightTitle}>Hello, <span style={{ color: 'red' }}>Shipper User</span></p>
          <Image src={UserIcon} alt="user icon" width={20} height={20} />
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
