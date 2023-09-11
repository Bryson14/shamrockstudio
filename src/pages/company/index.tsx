import Head from "next/head";
import Link from "next/link";

export default function Company() {
  return (
    <>
      <Head>
        <title>Company</title>
        <meta name="description" content="Compnay Information Page" />
      </Head>
      <main>
        <div>
          <h1>introducing the founder</h1>
          <p>Bryson</p>
          <p>Patience</p>
        </div>
        <div>
          <h2>About our story</h2>
          <p>share the store of the company so far</p>
          <p>how we got here and where we want to go</p>
        </div>
        <div>
          <h2>Team</h2>
          <p>We have talent in the web development and designer world</p>
          <p>We have amazing AI and ML engineers</p>
        </div>
        <div>
          <h3>Find the riht team to help you on your software</h3>
          <p>Our team is made up of the best of the best</p>
          <p>
            More personable and local that other development studios, more
            experience than a freelancer
          </p>
        </div>
        <div>
          <h3>Words from Our clients</h3>
          <p>Helo sove our wordpress update, sorenson legacy</p>
        </div>
        <div>
          <h2>Reach out</h2>
          <button>Contact Us</button>
          <Link href="/services">
            <button>Learn More</button>
          </Link>
        </div>
      </main>
    </>
  );
}
