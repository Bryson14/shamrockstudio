import Link from "next/link";
import { Flex, Text, View } from "@aws-amplify/ui-react";
import styles from "../../styles/Home.module.css";
import HamburgerMenu from "@/assets/hamburgerMenu";

export default function MainNavbar() {
  return (
    <nav className={styles.navbar}>
      <HamburgerMenu />
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        wrap="wrap"
      >
        <View className={styles.logo} display={"inline-block"}>
          <Link href="/" className={styles.logoLink}>
            <Text fontSize="medium" fontWeight="bold">
              Shamrock Cloud Studio
            </Text>
          </Link>
        </View>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className={styles.navLink}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/projects" className={styles.navLink}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
          </li>
        </ul>
      </Flex>
    </nav>
  );
}
