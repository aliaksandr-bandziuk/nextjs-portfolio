'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Logo from '../../assets/images/logo.png'
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary'
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'

import styles from './TheHeader.module.scss'

const TheHeader = () => {
  const [isNavVisible, setNavVisible] = useState(false);

  const closeMenu = () => {
    setNavVisible(false);
  }

  useEffect(() => {
    if (isNavVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isNavVisible]);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWpapper}>
          <div className={styles.headerLogo}>
            <Link
              href="/"
              onClick={closeMenu}
            >
              <Image
                src={Logo}
                alt="Logo"
                className={styles.headerLogoImage}
              />
            </Link>
          </div>
          <div className={`${styles.headerMenu} ${isNavVisible ? styles.navVisible : ''}`} onClick={closeMenu}>
            <nav className={styles.nav}>
              <div className={styles.navList}>
                <Link href="#" className={styles.navListItem}>Home</Link>
                <Link href="#" className={styles.navListItem}>About</Link>
                <Link href="#" className={styles.navListItem}>Development</Link>
                <Link href="#" className={styles.navListItem}>Portfolio</Link>
              </div>
            </nav>
            <div className={styles.headerButtons}>
              <ButtonSecondary
                title="Contact me"
                onClick={closeMenu}
              />
              <ButtonPrimary title="Hire now" />
            </div>
          </div>
          <div
            className={`${styles.burgerMenu} ${isNavVisible ? styles.open : ''}`}
            onClick={() => {
              setNavVisible(!isNavVisible);
            }}
          >
            {isNavVisible ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="26" viewBox="0 0 33 26" fill="none" transform="rotate(45)">
                <line x1="0" y1="13" x2="33" y2="13" stroke="url(#paint0_linear_13_83)" strokeWidth="3" />
                <line x1="16.5" y1="0" x2="16.5" y2="26" stroke="url(#paint1_linear_13_83)" strokeWidth="3" />
                <defs>
                  <linearGradient id="paint0_linear_13_83" x1="-8.62252e-09" y1="3.46667" x2="36.0395" y2="3.46666" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C0B7E8" />
                    <stop offset="1" stopColor="#8176AF" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_13_83" x1="-3.90789" y1="26" x2="33" y2="26" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C0B7E8" />
                    <stop offset="1" stopColor="#8176AF" />
                  </linearGradient>
                </defs>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="26" viewBox="0 0 33 26" fill="none">
                <rect width="33" height="3.71429" rx="1.85714" fill="url(#paint0_linear_13_83)" />
                <rect y="22.2857" width="33" height="3.71429" rx="1.85714" fill="url(#paint1_linear_13_83)" />
                <rect x="9" y="11.1429" width="24" height="3.71429" rx="1.85714" fill="url(#paint2_linear_13_83)" />
                <defs>
                  <linearGradient id="paint0_linear_13_83" x1="-8.62252e-09" y1="3.46667" x2="36.0395" y2="3.46666" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C0B7E8" />
                    <stop offset="1" stopColor="#8176AF" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_13_83" x1="-3.90789" y1="26" x2="33" y2="26" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C0B7E8" />
                    <stop offset="1" stopColor="#8176AF" />
                  </linearGradient>
                  <linearGradient id="paint2_linear_13_83" x1="5.21062" y1="13" x2="33.0001" y2="13" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C0B7E8" />
                    <stop offset="1" stopColor="#8176AF" />
                  </linearGradient>
                </defs>
              </svg>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default TheHeader