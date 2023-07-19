'use client'
import styles from './Portfolio.module.scss'

import React from 'react'
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import PortfolioItem from '../PortfolioItem/PortfolioItem';

export const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <svg className={styles.decor} xmlns="http://www.w3.org/2000/svg" width="1440" height="820" viewBox="0 0 1440 820" fill="none">
        <path d="M-3 231.214C96.569 254.827 300.21 358.641 318.223 584.988C336.235 811.336 680.641 830.311 850.592 811.505C959 791.003 1139.69 689.084 995.192 445.43C850.692 201.775 1230.86 48.9539 1439 3" stroke="url(#paint0_linear_11_14)" strokeOpacity="0.13" strokeWidth="6" />
        <defs>
          <linearGradient id="paint0_linear_11_14" x1="718" y1="3" x2="718" y2="817" gradientUnits="userSpaceOnUse">
            <stop offset="0.0260417" stopColor="#C0B7E8" />
            <stop offset="0.265625" stopColor="#C0B7E8" />
            <stop offset="0.71875" stopColor="#8176AF" />
            <stop offset="1" stopColor="#343045" />
          </linearGradient>
        </defs>
      </svg>
      <div className="container">
        <div className={styles.heroSlider}>
          <Swiper
            // install Swiper modules
            modules={[Navigation, A11y]}
            spaceBetween={50}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              925: {
                slidesPerView: 4,
              },
            }}
            navigation={{
              nextEl: '.buttonNext',
              prevEl: '.buttonPrev',
            }}
          >
            <SwiperSlide>
              <PortfolioItem
                portfolioTitle="Portfolio Title"
                portfolioDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo euismod."
              />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioItem
                portfolioTitle="Portfolio Title"
                portfolioDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo euismod."
              />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioItem
                portfolioTitle="Portfolio Title"
                portfolioDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo euismod."
              />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioItem
                portfolioTitle="Portfolio Title"
                portfolioDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo euismod."
              />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioItem
                portfolioTitle="Portfolio Title"
                portfolioDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo euismod."
              />
            </SwiperSlide>

            <button className="buttonPrev">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M17.5 21.25L11.25 15L17.5 8.75M3.75 15C3.75 21.2132 8.7868 26.25 15 26.25C21.2132 26.25 26.25 21.2132 26.25 15C26.25 8.7868 21.2132 3.75 15 3.75C8.7868 3.75 3.75 8.7868 3.75 15Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="buttonNext">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M17.5 21.25L11.25 15L17.5 8.75M3.75 15C3.75 21.2132 8.7868 26.25 15 26.25C21.2132 26.25 26.25 21.2132 26.25 15C26.25 8.7868 21.2132 3.75 15 3.75C8.7868 3.75 3.75 8.7868 3.75 15Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </Swiper>
        </div>
      </div>
    </section>
  )
}
