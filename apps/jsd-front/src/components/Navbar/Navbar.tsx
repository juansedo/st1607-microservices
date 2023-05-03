import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

type UserInfo = {
  provider: string,
  id: string,
  name: string,
  fullName: string,
  email: string,
  photo: string,
};

const Navbar = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const location = useLocation();
  
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/auth/info");
      setUserInfo(data as UserInfo);
    }
    fetchData();
  }, []);

  const homeListItemClasses = [
    styles.listItem,
    ...(location.pathname === "/" ? [styles.listItemSelected] : []),
  ];
  const bicyclesListItemClasses = [
    styles.listItem,
    ...(location.pathname === "/bicycles" ? [styles.listItemSelected] : []),
  ];

  return (
    <nav className={styles.navContainer}>
      <ul className={styles.listContainer}>
        <li className={styles.listItemContainer}>
          <Link className={homeListItemClasses.join(" ")} to={"/"}>
            Home
          </Link>
        </li>
        <li className={styles.listItemContainer}>
          <Link className={bicyclesListItemClasses.join(" ")} to={"/bicycles"}>
            Bicycles
          </Link>
        </li>
      </ul>
      {userInfo ? (
        <div className={styles.userContainer}>
          <img className={styles.userPhoto} src={userInfo.photo} />
          <div>
            <span className={styles.userName}>Hola, {userInfo.name}!</span><br />
            <span className={styles.userDescription}>{userInfo.email}</span><br />
            <a className={styles.userLogout} href="/auth/logout">Salir</a>
          </div>
        </div>
      ) : (
        <ul className={styles.listContainer}>
          <li className={styles.listItemContainer}>
            <a className={styles.listItem} href="/auth/google">
              Login with Google
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
