import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import styles from "./layout.module.css";

export default function Layout({ children }) {	
  return (
    <>
      <Navbar />
			<div className={styles.layout}>
				<div className={styles.leftSection}>
					<Sidebar />
				</div>
				<div className={styles.rightSection}>
					<main>{children}</main>
				</div>
			</div>
    </>
  );
}
