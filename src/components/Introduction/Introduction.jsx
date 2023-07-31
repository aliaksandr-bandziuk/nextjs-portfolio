'use client'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './Introduction.module.scss'

export const Introduction = ({ introductionTitle, introductionSubtitle, introductionDescription }) => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={styles.introduction}>
      <div className="container">
        <div className={styles.introductionWrapper}>
          <div data-aos="fade-right" className={styles.introductionTitle}>
            <h2 className={styles.title}>{introductionTitle}</h2>
            <div className={styles.decoration}>
              <h3 className={styles.subtitle}>{introductionSubtitle}</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                <path d="M70.8333 50L29.1667 50M70.8333 50L54.1667 66.6667M70.8333 50L54.1667 33.3333" stroke="#C0B7E8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div data-aos="fade-left" className={styles.introductionText}>
            <p className={styles.introductionDescription}>{introductionDescription}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
