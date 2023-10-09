import styles from "./root.module.css";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/sidebar";

export default function Root() {
  return (
    <>
      <div id="sidebar" className={styles.sidebar}>
        <Sidebar/>
      </div>
      <div id="outlet" className={styles.outlet}>
        <Outlet />
      </div>
    </>
  );
}
