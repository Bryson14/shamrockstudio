import Link from "next/link";
import styles from "@/styles/navbar.module.css";
import { useState } from "react";
import HamburgerMenu from "./hamburgerMenu";

export default function MobileNavbar() {
  // a function that will show a logo on the left and a hamburger menu on the right.
  // when the hamburger menu is clicked, the manu will slide down from the top of the screen. and show the links.
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <HamburgerMenu setMenuIsOpen={setMenuOpen} />
      <ul id="menu" className={menuOpen ? styles.menuOpen : ""}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
