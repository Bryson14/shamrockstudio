import React, { useState } from "react";
import styles from "@/styles/navbar.module.css";
import Link from "next/link";

interface MenuProps {
  setMenuIsOpen?: (isOpen: boolean) => void;
  size?: "small" | "medium" | "large";
}

function HamburgerMenu({ setMenuIsOpen, size }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    const icon = document.getElementById("menu-icon");
    if (icon) icon.classList.toggle(styles.close);

    setIsOpen(!isOpen);
    if (setMenuIsOpen) setMenuIsOpen(!isOpen);
  };

  // if size is undefined or medium, set width and height to 45px, small set to 30px, large set to 60px

  return (
    <Link
      href="#"
      id="menu-icon"
      className={styles.menuIcon}
      style={{ width: "45px", height: "45px" }}
      onClick={handleClick}
    >
      <div className={styles.bar} />
      <div className={styles.bar} />
      <div className={styles.bar} />
    </Link>
  );
}

export default HamburgerMenu;
