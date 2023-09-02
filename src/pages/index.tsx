import Head from "next/head";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import CodeBlock from "@/components/codeBlock";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Shamrock Studio</title>
        <meta
          name="description"
          content="Elevate your business with a one of kind websites and ML"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div style={{ minHeight: "40vh" }}>
          <h1>Features List</h1>
          <p>Web app development</p>
          <p>Professional website development</p>
          <p>cutting edge technology on AWS Cloud</p>
        </div>
        <div style={{ minHeight: "40vh" }}>
          <h1>Hero Unlock your digital potential</h1>
          <p>
            we are a website studio specializing in web apps, website
            development, AWS cloud, and AI
          </p>
        </div>
        <div style={{ minHeight: "40vh" }}>
          <h2>How it works: From consultation to launch</h2>
          <p>expertise and collaboration, building your vision</p>
          <p>efficient development, Deliver high quality solutions</p>
          <p>continuous support, post-launch maintenance and updates</p>
        </div>
        <div style={{ minHeight: "40vh" }}>
          <h3>Benefits: Unlocking your software potential at your business</h3>
          <p>expertise with us</p>
          <p> collaboration</p>
        </div>
        <div>
          <p> trusted by companies</p>
          <img
            src="https://news.nd.edu/assets/257838/1200x630/idea_center_logo_blue_gold_feature.jpg"
            alt="idea center logo"
            height={75}
          />
          <img
            src="https://news.nd.edu/assets/257838/1200x630/idea_center_logo_blue_gold_feature.jpg"
            alt="idea center logo"
            height={75}
          />
        </div>
        <div style={{ minHeight: "40vh" }}>
          <h2>Testimonials: Client Stories</h2>
          <p>they were so great, TMT</p>
          <p>help my business, Sublime</p>
        </div>
        <div style={{ minHeight: "40vh" }}>
          <h2>Transform you ideas into reality</h2>
          <Link href="/contact">
            <p>contact us</p>
          </Link>
          <button>contact us</button>
          <button>learn more</button>
        </div>
        <CodeBlock>const a = 1;</CodeBlock>
      </main>
    </>
  );
}
