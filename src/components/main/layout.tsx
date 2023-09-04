import MainNavbar from "./navbar";
import MobileNavbar from "./navbarMobile";
import { useBreakpointValue } from "@aws-amplify/ui-react";
import styles from "@/styles/Home.module.css";

export default function HomeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const isMobile = useBreakpointValue({ base: true, medium: false });
  return (
    <section className={styles.homeLayout}>
      {isMobile ? <MobileNavbar /> : <MainNavbar />}
      {children}
    </section>
  );
}
