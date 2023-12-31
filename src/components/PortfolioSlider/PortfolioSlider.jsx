import React, { useState } from 'react';
import styles from './PortfolioSlider.module.scss';
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

export const PortfolioSlider = ({ slides }) => {

  const [loading, setLoading] = useState(Array(slides.length).fill(true)); // Создаем массив состояний для каждого слайда

  const handleImageLoad = (index) => {
    setLoading((prevLoading) => {
      const newLoading = [...prevLoading];
      newLoading[index] = false;
      return newLoading;
    });
  };

  return (
    <div className={styles.portfolioSlider}>
      <Swiper
        modules={[Navigation, A11y]}
        slidesPerView={1}
        navigation={{
          nextEl: '.nextPortfolioBtn',
          prevEl: '.prevPortfolioBtn',
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {slide.src ? (
              <div className={styles.imgContainer}>
                {loading[index] && <span class={styles.loader}></span>}
                <Image
                  className={`${styles.img} ${loading ? styles.hidden : ''}`}
                  src={slide.src}
                  alt={slide.alt}
                  loading='lazy'
                  onLoad={() => handleImageLoad(index)}
                />
              </div>
            ) : (
              <p>Image not found</p>
            )}
          </SwiperSlide>
        ))}
        <button className="prevPortfolioBtn">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
            <path d="M1 7L17 7M1 7L7 1M1 7L7 13" stroke="#001A72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="nextPortfolioBtn">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
            <path d="M17 7L1 7M17 7L11 13M17 7L11 1" stroke="#001A72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </Swiper>
    </div>
  );
};


export default PortfolioSlider;