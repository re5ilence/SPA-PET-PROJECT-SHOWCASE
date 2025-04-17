import styles from './header.module.css';
import { NavLink } from 'react-router-dom';
import { useState } from "react"; 
import Modal from "../Modal/Modal";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const openModal = () => setIsModalOpen(true); 
  const closeModal = () => setIsModalOpen(false); 

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <a href="/">logo</a>
        </div>
        <nav className={styles.header__nav}>
          <ul className={styles.header__menu}>
            <li><NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >Main</NavLink></li>
            <li><NavLink
              to="/about"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >About</NavLink></li>
            <li><NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >Contact</NavLink></li>
          </ul>
        </nav>
        <div className={styles.header__actions}>
          <a className={styles.header__login} onClick={openModal}>Sign in</a>
        </div>

        <Modal isOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </header>
  );
}

export default Header;
