import styles from "@/styles/navbar.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export default function MainNavbar() {
  const router = useRouter();
  const { pathname } = router;
  const path = pathname.split("/")[1];
  console.log("path: " + path);
  return (
    <header className={styles.navbar}>
      <Link href="/">
        <div className={styles.logo}>
          <Image
            src="/shamrock-logo.jpg"
            alt="shamrock-logo"
            width={80}
            height={80}
          />
          <span>
            <h1>Shamrock</h1>
            <h2>Cloud Studio</h2>
          </span>
        </div>
      </Link>
      <nav>
        <ul className={styles.navlinks}>
          <li>
            <Link
              href="/about"
              className={`open-sans ${path === "about" ? styles.selected : ""}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={`open-sans ${
                path === "services" ? styles.selected : ""
              }`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`open-sans ${
                path === "projects" ? styles.selected : ""
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`open-sans ${
                path === "contact" ? styles.selected : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
