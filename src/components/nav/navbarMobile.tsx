import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/navbar.module.css";
import HamburgerMenu from "./hamburgerMenu";

export default function MobileNavbar() {
  const handleMenuClick = (open: boolean) => {
    const menu = document.getElementById("mobile-menu");
    if (menu) menu.classList.toggle(styles.visibleMenu);
  };

  return (
    <header>
      <div className={styles.mobileHeader}>
        <Link href="/" className={styles.mobileLogoLink}>
          <div className={styles.mobileLogo}>
            <Image
              src="/shamrock-logo.jpg"
              alt="shamrock-logo"
              width={40}
              height={40}
            />
            <span>
              <h1 className="open-sans">Shamrock</h1>
              <h2 className="open-sans">Cloud Studio</h2>
            </span>
          </div>
        </Link>
        <div className={styles.mobileMenu}>
          <span className={styles.hamburgerSpan}>
            Menu
            <HamburgerMenu handleMenuClick={handleMenuClick} />
          </span>
        </div>
      </div>
      <ul className={styles.mobileNavLinks} id="mobile-menu">
        <li>
          <span className={styles.hamburgerSpan}>
            Menu
            <HamburgerMenu handleMenuClick={handleMenuClick} />
          </span>
        </li>
        <li>
          <Link href="/company">Company</Link>
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
    </header>
  );
}
