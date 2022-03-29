import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import Sidebar from "../sidebar/sidebar";
import Header from "../header/header";
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
					<div>
						<Header />
						<div style={{ paddingTop: '10px' }}>
							<main>{children}</main>
						</div>
					</div>
					<div style={{ paddingTop: '10px' }}>
						<Footer />
					</div>
				</div>
			</div>
    </>
  );
}
