'use client'
import Image from 'next/image';
import styles from './Technologies.module.scss';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import ReactLogo from '../../assets/images/logo-react.png';
import NextLogo from '../../assets/images/logo-next.png';
import WpLogo from '../../assets/images/logo-wp.png';
import TypeScriptLogo from '../../assets/images/logo-ts.png';
import JavaScriptLogo from '../../assets/images/logo-js.png';
import ReduxLogo from '../../assets/images/logo-redux.png';
import MuiLogo from '../../assets/images/logo-mui.png';
import GraphQlLogo from '../../assets/images/logo-graphql.png';
import ThreejsLogo from '../../assets/images/logo-three-js.png';

export const Technologies = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={styles.technologies} id="development">
      <div className="container">
        <div data-aos="fade-up" className={styles.technologiesInner}>
          <h2 className={styles.technologiesTitle}>Technologies</h2>
          <h3 className={styles.technologiesSubtitle}>I am working with</h3>
          <div className={styles.technologiesArrow}>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path d="M17.5 25L30 37.5L42.5 25" stroke="#433D60" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div data-aos="fade-up" className={styles.technologieslogos}>
          <div className={styles.technologieslogosItem}>
            <Image
              src={ReactLogo}
              alt="React"
              width={120}
              height={120}
            />
          </div>
          <div className={styles.technologieslogosItem}>
            <Image
              src={NextLogo}
              alt="Next.js"
              width={120}
              height={120}
            />
          </div>
          <div className={styles.technologieslogosItem}>
            <Image
              src={WpLogo}
              alt="WordPress"
              width={120}
              height={120}
            />
          </div>
          <div className={styles.technologieslogosItem}>
            <Image
              src={TypeScriptLogo}
              alt="TypeScript"
              width={120}
              height={120}
            />
          </div>
          <div className={styles.technologieslogosItem}>
            <Image
              src={ReduxLogo}
              alt="Redux"
              width={120}
              height={120}
            />
          </div>
          <div className={styles.technologieslogosItem}>
            <Image
              src={MuiLogo}
              alt="Material UI"
              width={120}
              height={120}
            />
          </div>
          <div className={styles.technologieslogosItem}>
            <Image
              src={GraphQlLogo}
              alt="GraphQl"
              width={120}
              height={120}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
