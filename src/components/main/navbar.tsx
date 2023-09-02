import Link from "next/link";
import { Flex, Text, Card, Grid } from "@aws-amplify/ui-react";
import styles from "../../styles/Home.module.css";

export default function MainNavbar() {
  return (
    <nav className={styles.navbar}>
      <Grid templateColumns={"1fr 3fr"}>
        <Card columnStart={1} columnEnd={2}>
          Hello
        </Card>
        <Card columnStart={2} columnEnd={-1}>
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
        </Card>
      </Grid>
    </nav>
  );
}
