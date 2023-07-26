import React from 'react';
import styles from './About.module.scss';
import Image from 'next/image';

import AboutImage from '../../assets/images/about.jpg';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import Link from 'next/link';

export const About = () => {
  return (
    <section className={styles.about} id="about">
      <svg
        className={styles.decor1}
        xmlns="http://www.w3.org/2000/svg"
        width="1440"
        height="262"
        viewBox="0 0 1440 262"
        fill="none"
      >
        <path
          d="M1442.5 215C1387.5 104.333 1242.8 -83.7999 1104 49.0001C930.5 215 761.5 331.5 554.5 203.5C347.5 75.5001 34.5 175.5 -6.5 260"
          stroke="url(#paint0_linear_3_53)"
          strokeOpacity="0.13"
          strokeWidth="6"
        />
        <defs>
          <linearGradient
            id="paint0_linear_3_53"
            x1="-7"
            y1="105.5"
            x2="1443"
            y2="89.0001"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#211E2E" />
            <stop offset="0.3125" stopColor="#C0B7E8" />
            <stop offset="0.765625" stopColor="#8176AF" />
            <stop offset="0.994792" stopColor="#211E2E" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        className={styles.decor2}
        xmlns="http://www.w3.org/2000/svg"
        width="1440"
        height="219"
        viewBox="0 0 1440 219"
        fill="none"
      >
        <path
          d="M-4.5 74.5C153.667 21.1667 504.6 -53.5 643 74.5C816 234.5 1071.5 258.5 1186.5 146C1278.5 56 1394.17 70.8333 1440.5 89.5"
          stroke="url(#paint0_linear_3_54)"
          strokeOpacity="0.13"
          strokeWidth="6"
        />
        <defs>
          <linearGradient
            id="paint0_linear_3_54"
            x1="-5"
            y1="63"
            x2="1462"
            y2="62.9999"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#343045" />
            <stop offset="0.224242" stopColor="#C0B7E8" />
            <stop offset="0.786458" stopColor="#8176AF" />
            <stop offset="0.96875" stopColor="#343045" />
          </linearGradient>
        </defs>
      </svg>
      <div className="container">
        <div className={styles.aboutWrapper}>
          <div className={styles.aboutImage}>
            <Image className={styles.img} src={AboutImage} alt="About me" />
          </div>
          <div className={styles.aboutContent}>
            <h2 className={styles.aboutTitle}>About me</h2>
            <p className={styles.aboutDescription}>
              I&apos;m Alex, frontend software engineer and freelance web developer. I specialize in crafting captivating Landing Pages, Blogs, and Online stores that take businesses to soaring heights. I&apos;m also expert in digital marketing and SEO.
            </p>
            <p className={styles.aboutDescription}>
              What&apos;s the secret to my standout work? I&apos;m all about cutting-edge coding and development standards, guaranteeing modern designs and top-notch performance.
            </p>
            <p className={styles.aboutDescription}>
              Why do clients rave about me? Firstly, my lightning-fast responsiveness to your feedback and requests, ensuring a smooth and delightful collaboration. Secondly, I&apos;ve got you covered with a comprehensive range of services, from prototypes to full-fledged applications, performance optimization, hosting, and ongoing maintenance.
            </p>
            <p className={styles.aboutDescription}>
              Looking for a high-quality website? Look no further! Let&apos;s team up and create a digital masterpiece that leaves an indelible impression on your audience and elevates your online presence. Your success is my top priority! Reach out to me now.
            </p>
            <Link href="/assets/docs/cv-aliaksandr-bandziuk.pdf" target="_blank">
              <ButtonPrimary title="Download CV" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
