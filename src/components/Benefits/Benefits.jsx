import { BenefitsSlider } from '../BenefitsSlider'
import { Introduction } from '../Introduction'
import styles from './Benefits.module.scss'
import React from 'react'

export const Benefits = () => {
  return (
    <section className={styles.benefits}>
      <div className="container">
        <Introduction
          introductionTitle="Your Benefits"
          introductionSubtitle="What are you getting"
          introductionDescription="You receive a full package of services. I can design a website or application for you, develop it using modern technologies, carry out initial search engine optimization and upload it to the hosting. I will maintain and make changes to your resource if the need arises."
        />
        <BenefitsSlider />
        <svg className={styles.decor} xmlns="http://www.w3.org/2000/svg" width="1440" height="169" viewBox="0 0 1440 169" fill="none">
          <path d="M-9 21.7335C6.47753 71.4205 88.0505 181.243 245.37 106.768C350.5 57 405.361 2.72575 539.107 91.2619C672.853 179.798 776.317 173.796 841.423 82.2582C906.53 -9.27916 1076.11 -33.7892 1139.7 74.7552C1203.29 183.3 1417.79 196.305 1440 106.768" stroke="url(#paint0_linear_11_136)" stroke-width="6" />
          <defs>
            <linearGradient id="paint0_linear_11_136" x1="0.49999" y1="84.9999" x2="1440" y2="84.9998" gradientUnits="userSpaceOnUse">
              <stop stop-color="#343045" />
              <stop offset="0.302083" stop-color="#C0B7E8" />
              <stop offset="0.739583" stop-color="#8176AF" />
              <stop offset="1" stop-color="#343045" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}
