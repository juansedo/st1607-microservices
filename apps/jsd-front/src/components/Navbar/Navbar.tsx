import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const location = useLocation();
  
  const homeListItemClasses = [styles.listItem, ...(location.pathname === "/" ? [styles.listItemSelected] : [])];
  const bicyclesListItemClasses = [styles.listItem, ...(location.pathname === "/bicycles" ? [styles.listItemSelected] : [])];
  
  return (
    <nav>
      <ul className={styles.listContainer}>
        <li className={styles.listItemContainer}>
          <Link className={homeListItemClasses.join(' ')} to={"/"}>
            Home
          </Link>
        </li>
        <li className={styles.listItemContainer}>
          <Link className={bicyclesListItemClasses.join(' ')} to={"/bicycles"}>
            Bicycles
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
