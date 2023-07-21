'use client'
import styles from './BenefitsSlider.module.scss'
import React from 'react'
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Benefit } from '../Benefit';

export const BenefitsSlider = () => {
  return (
    <div className={styles.benefitsList}>
      <Swiper
        modules={[Navigation, A11y]}
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
          992: {
            slidesPerView: 4,
          },
        }}
        navigation={{
          nextEl: '.nextBenefitsBtn',
          prevEl: '.prevBenefitsBtn',
        }}
      >
        <SwiperSlide>
          <Benefit benefitNumber="01" benefitTitle="Design" />
        </SwiperSlide>
        <SwiperSlide>
          <Benefit benefitNumber="02" benefitTitle="Development" />
        </SwiperSlide>
        <SwiperSlide>
          <Benefit benefitNumber="03" benefitTitle="SEO" />
        </SwiperSlide>
        <SwiperSlide>
          <Benefit benefitNumber="04" benefitTitle="Hosting" />
        </SwiperSlide>
        <button className="prevBenefitsBtn">
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
            <path d="M22.1666 26.9167L14.25 19.0001L22.1666 11.0834" stroke="#433D60" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="nextBenefitsBtn">
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
            <path d="M15.8334 26.9167L23.75 19.0001L15.8334 11.0834" stroke="#433D60" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </Swiper>
    </div>
  )
}
