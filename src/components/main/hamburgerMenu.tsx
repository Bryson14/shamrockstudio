import React, { useState } from "react";
import styles from "@/styles/navbar.module.css";
import Link from "next/link";

interface MenuProps {
  setMenuIsOpen: (isOpen: boolean) => void;
}

function HamburgerMenu({ setMenuIsOpen }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setMenuIsOpen(!isOpen);
  };

  return (
    <Link href="#" className={styles.menuItem} onClick={handleClick}>
      <div className={isOpen ? styles.bar : styles.closeBar}></div>
      <div className={isOpen ? styles.bar : styles.closeBar}></div>
      <div className={isOpen ? styles.bar : styles.closeBar}></div>
    </Link>
  );
}

export default HamburgerMenu;
