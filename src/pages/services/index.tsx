// sections each in their own div and with creative catchy headers with some paragraph text
// header, intro to shamrock studio
// features list including web app with custom websites, aws cloud, ai, more standard websites with CMS
// how it works - consulting, maintentnace, support
// benefits - expertise, collaboration, efficiency, support
// logo section - trusted by companies
// testimonials - client stories
// CTA - contact us, learn more

import Head from "next/head";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <Head>
        <title>Services</title>
        <meta name="description" content="Services at Shamrock" />
      </Head>
      <main>
        <div>
          <h1>Services</h1>
          <p>Web app development</p>
          <p>Professional website development</p>
          <p>cutting edge technology on AWS Cloud</p>
        </div>
        <div>
          <h2>How it works: From consultation to launch</h2>
          <p>expertise and collaboration, building your vision</p>
          <p>efficient development, Deliver high quality solutions</p>
          <p>continuous support, post-launch maintenance and updates</p>
        </div>
        <div>
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
        <div>
          <h2>Testimonials: Client Stories</h2>
          <p>they were so great, TMT</p>
          <p>help my business, Sublime</p>
        </div>
        <div>
          <h2>Transform you ideas into reality</h2>
          <p>contact us</p>
          <Link href="/contact">
            <button>contact us</button>
          </Link>
          <Link href="projects">
            <button>learn more</button>
          </Link>
        </div>
      </main>
    </>
  );
}
