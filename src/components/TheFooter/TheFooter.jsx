import Link from 'next/link';
import styles from './TheFooter.module.scss';
import React from 'react';
import Image from 'next/image';

import Logo from '../../assets/images/logo.png';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary';

const TheFooter = () => {
  return (
    <footer className={styles.footer}>
      <svg className={styles.decor1} xmlns="http://www.w3.org/2000/svg" width="1439" height="368" viewBox="0 0 1439 368" fill="none">
        <path d="M3.5 366C45.3333 297.5 213.9 191.2 553.5 314C893.1 436.8 1285 157.833 1438.5 3" stroke="url(#paint0_linear_13_66)" strokeOpacity="0.13" strokeWidth="6" />
        <defs>
          <linearGradient id="paint0_linear_13_66" x1="1438.5" y1="3.86474" x2="3.5" y2="3.86467" gradientUnits="userSpaceOnUse">
            <stop stopColor="#343045" />
            <stop offset="0.348958" stopColor="#C0B7E8" />
            <stop offset="0.6875" stopColor="#8176AF" />
            <stop offset="1" stopColor="#343045" />
          </linearGradient>
        </defs>
      </svg>
      <svg className={styles.decor2} xmlns="http://www.w3.org/2000/svg" width="1440" height="270" viewBox="0 0 1440 270" fill="none">
        <path d="M1439.5 3C1315.17 14.3333 1084.71 109.757 957 215C795 348.5 543.167 194 391 97C283.5 30 55.3 -36.3 2.5 234.5" stroke="url(#paint0_linear_13_65)" strokeOpacity="0.13" strokeWidth="6" />
        <defs>
          <linearGradient id="paint0_linear_13_65" x1="1439.5" y1="3.63123" x2="2.5" y2="3.63112" gradientUnits="userSpaceOnUse">
            <stop stopColor="#343045" />
            <stop offset="0.348958" stopColor="#C0B7E8" />
            <stop offset="0.6875" stopColor="#8176AF" />
            <stop offset="1" stopColor="#343045" />
          </linearGradient>
        </defs>
      </svg>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.footerItem}>
            <div className={styles.footerLogo}>
              <Link href="/">
                <Image src={Logo} alt="Logo" className={styles.footerLogoImage} />
              </Link>
            </div>
          </div>
          <div className={styles.footerItem}>
            <div className={styles.footerNav}>
              <Link className={styles.footerNavItem} href="#home">Home</Link>
              <Link className={styles.footerNavItem} href="#about">About</Link>
              <Link className={styles.footerNavItem} href="#development">Development</Link>
              <Link className={styles.footerNavItem} href="#portfolio">Portfolio</Link>
              <Link className={styles.footerNavItem} href="#contact">Contact</Link>
            </div>
          </div>
          <div className={styles.footerItem}>
            <div className={styles.footerButtons}>
              <Link href="/assets/docs/cv-aliaksandr-bandziuk.pdf" target="_blank">
                <ButtonSecondary title="Download CV" />
              </Link>
              {/* <ButtonPrimary title="Hire me" /> */}
            </div>
          </div>
          <div className={styles.footerItem}>
            <p className={styles.footerText}>Let&apos;s be friends</p>
            <div className={styles.footerSocial}>
              <Link className={styles.footerSocialItem} href="https://www.facebook.com/bandziuk/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM16 8C20.4 8 24 11.6 24 16C24 20 21.1 23.4 17.1 24V18.3H19L19.4 16H17.2V14.5C17.2 13.9 17.5 13.3 18.5 13.3H19.5V11.3C19.5 11.3 18.6 11.1 17.7 11.1C15.9 11.1 14.7 12.2 14.7 14.2V16H12.7V18.3H14.7V23.9C10.9 23.3 8 20 8 16C8 11.6 11.6 8 16 8Z" fill="#C0B7E8" />
                </svg>
              </Link>
              <Link className={styles.footerSocialItem} href="https://www.instagram.com/bandziuk/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 18.8C14.5 18.8 13.2 17.6 13.2 16C13.2 14.5 14.4 13.2 16 13.2C17.5 13.2 18.8 14.4 18.8 16C18.8 17.5 17.5 18.8 16 18.8Z" fill="#C0B7E8" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M19.4 9.2H12.6C11.8 9.3 11.4 9.4 11.1 9.5C10.7 9.6 10.4 9.8 10.1 10.1C9.86261 10.3374 9.75045 10.5748 9.61489 10.8617C9.57916 10.9373 9.5417 11.0166 9.5 11.1C9.48453 11.1464 9.46667 11.1952 9.44752 11.2475C9.34291 11.5333 9.2 11.9238 9.2 12.6V19.4C9.3 20.2 9.4 20.6 9.5 20.9C9.6 21.3 9.8 21.6 10.1 21.9C10.3374 22.1374 10.5748 22.2495 10.8617 22.3851C10.9374 22.4209 11.0165 22.4583 11.1 22.5C11.1464 22.5155 11.1952 22.5333 11.2475 22.5525C11.5333 22.6571 11.9238 22.8 12.6 22.8H19.4C20.2 22.7 20.6 22.6 20.9 22.5C21.3 22.4 21.6 22.2 21.9 21.9C22.1374 21.6626 22.2495 21.4252 22.3851 21.1383C22.4209 21.0626 22.4583 20.9835 22.5 20.9C22.5155 20.8536 22.5333 20.8048 22.5525 20.7525C22.6571 20.4667 22.8 20.0762 22.8 19.4V12.6C22.7 11.8 22.6 11.4 22.5 11.1C22.4 10.7 22.2 10.4 21.9 10.1C21.6626 9.86261 21.4252 9.75045 21.1383 9.61488C21.0627 9.57918 20.9833 9.54167 20.9 9.5C20.8536 9.48453 20.8048 9.46666 20.7525 9.44752C20.4667 9.3429 20.0762 9.2 19.4 9.2ZM16 11.7C13.6 11.7 11.7 13.6 11.7 16C11.7 18.4 13.6 20.3 16 20.3C18.4 20.3 20.3 18.4 20.3 16C20.3 13.6 18.4 11.7 16 11.7ZM21.4 11.6C21.4 12.1523 20.9523 12.6 20.4 12.6C19.8477 12.6 19.4 12.1523 19.4 11.6C19.4 11.0477 19.8477 10.6 20.4 10.6C20.9523 10.6 21.4 11.0477 21.4 11.6Z" fill="#C0B7E8" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM12.6 7.7H19.4C20.3 7.8 20.9 7.9 21.4 8.1C22 8.4 22.4 8.6 22.9 9.1C23.4 9.6 23.7 10.1 23.9 10.6C24.1 11.1 24.3 11.7 24.3 12.6V19.4C24.2 20.3 24.1 20.9 23.9 21.4C23.6 22 23.4 22.4 22.9 22.9C22.4 23.4 21.9 23.7 21.4 23.9C20.9 24.1 20.3 24.3 19.4 24.3H12.6C11.7 24.2 11.1 24.1 10.6 23.9C10 23.6 9.6 23.4 9.1 22.9C8.6 22.4 8.3 21.9 8.1 21.4C7.9 20.9 7.7 20.3 7.7 19.4V12.6C7.8 11.7 7.9 11.1 8.1 10.6C8.4 10 8.6 9.6 9.1 9.1C9.6 8.6 10.1 8.3 10.6 8.1C11.1 7.9 11.7 7.7 12.6 7.7Z" fill="#C0B7E8" />
                </svg>
              </Link>
              <Link className={styles.footerSocialItem} href="https://www.linkedin.com/in/bandziuk/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM8.2 13.3V24H11.6V13.3H8.2ZM8 9.9C8 11 8.8 11.8 9.9 11.8C11 11.8 11.8 11 11.8 9.9C11.8 8.8 11 8 9.9 8C8.9 8 8 8.8 8 9.9ZM20.6 24H23.8V17.4C23.8 14.1 21.8 13 19.9 13C18.2 13 17 14.1 16.7 14.8V13.3H13.5V24H16.9V18.3C16.9 16.8 17.9 16 18.9 16C19.9 16 20.6 16.5 20.6 18.2V24Z" fill="#C0B7E8" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <svg className={styles.divider} xmlns="http://www.w3.org/2000/svg" width="1269" height="2" viewBox="0 0 1269 2" fill="none">
          <path d="M0 1H1269" stroke="url(#paint0_linear_13_63)" />
          <defs>
            <linearGradient id="paint0_linear_13_63" x1="1269" y1="1.00238" x2="3.52735e-07" y2="0.980001" gradientUnits="userSpaceOnUse">
              <stop stopColor="#343045" />
              <stop offset="0.348958" stopColor="#C0B7E8" />
              <stop offset="0.6875" stopColor="#8176AF" />
              <stop offset="1" stopColor="#343045" />
            </linearGradient>
          </defs>
        </svg>
        <div className={styles.footerBottom}>
          2023 © Frontend developer Alex Bandziuk - ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  )
}

export default TheFooter;
