'use client'
import styles from './Portfolio.module.scss'

import React, { useState } from 'react'
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import PortfolioModal from '../PortfolioModal/PortfolioModal';
import { Introduction } from '../Introduction';

import project11 from '../../assets/images/projects/project-1-1.jpg';
import project12 from '../../assets/images/projects/project-1-2.jpg';
import project13 from '../../assets/images/projects/project-1-3.jpg';
import project14 from '../../assets/images/projects/project-1-4.jpg';
import project15 from '../../assets/images/projects/project-1-5.jpg';
import project16 from '../../assets/images/projects/project-1-6.jpg';
import project21 from '../../assets/images/projects/project-2-1.jpg';
import project22 from '../../assets/images/projects/project-2-2.jpg';
import project23 from '../../assets/images/projects/project-2-3.jpg';
import project24 from '../../assets/images/projects/project-2-4.jpg';
import project25 from '../../assets/images/projects/project-2-5.jpg';
import project26 from '../../assets/images/projects/project-2-6.jpg';
import project31 from '../../assets/images/projects/project-3-1.jpg';
import project32 from '../../assets/images/projects/project-3-2.jpg';
import project33 from '../../assets/images/projects/project-3-3.jpg';
import project34 from '../../assets/images/projects/project-3-4.jpg';
import project35 from '../../assets/images/projects/project-3-5.jpg';
import project36 from '../../assets/images/projects/project-3-6.jpg';
import project37 from '../../assets/images/projects/project-3-7.jpg';
import project38 from '../../assets/images/projects/project-3-8.jpg';
import project41 from '../../assets/images/projects/project-4-1.jpg';
import project42 from '../../assets/images/projects/project-4-2.jpg';
import project43 from '../../assets/images/projects/project-4-3.jpg';
import project44 from '../../assets/images/projects/project-4-4.jpg';

export const Portfolio = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: '', description: '', slides: [] });

  const handleOpenModal = (title, description, slides) => {
    setIsModalOpen(true);
    setModalData({ title, description, slides });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const projectOneSlides = [
    {
      id: 1,
      src: project11,
      alt: 'Portfolio Slide',
    },
    {
      id: 2,
      src: project12,
      alt: 'Portfolio Slide',
    },
    {
      id: 3,
      src: project13,
      alt: 'Portfolio Slide',
    },
    {
      id: 4,
      src: project14,
      alt: 'Portfolio Slide',
    },
    {
      id: 5,
      src: project15,
      alt: 'Portfolio Slide',
    },
    {
      id: 6,
      src: project16,
      alt: 'Portfolio Slide',
    },
  ];
  const projectTwoSlides = [
    {
      id: 7,
      src: project21,
      alt: 'Portfolio Slide',
    },
    {
      id: 8,
      src: project22,
      alt: 'Portfolio Slide',
    },
    {
      id: 9,
      src: project23,
      alt: 'Portfolio Slide',
    },
    {
      id: 10,
      src: project24,
      alt: 'Portfolio Slide',
    },
    {
      id: 11,
      src: project25,
      alt: 'Portfolio Slide',
    },
    {
      id: 12,
      src: project26,
      alt: 'Portfolio Slide',
    },
  ];
  const projectThreeSlides = [
    {
      id: 13,
      src: project31,
      alt: 'Portfolio Slide',
    },
    {
      id: 14,
      src: project32,
      alt: 'Portfolio Slide',
    },
    {
      id: 15,
      src: project33,
      alt: 'Portfolio Slide',
    },
    {
      id: 16,
      src: project34,
      alt: 'Portfolio Slide',
    },
    {
      id: 17,
      src: project35,
      alt: 'Portfolio Slide',
    },
    {
      id: 18,
      src: project36,
      alt: 'Portfolio Slide',
    },
    {
      id: 19,
      src: project37,
      alt: 'Portfolio Slide',
    },
    {
      id: 20,
      src: project38,
      alt: 'Portfolio Slide',
    },
  ];
  const projectFourSlides = [
    {
      id: 21,
      src: project41,
      alt: 'Portfolio Slide',
    },
    {
      id: 22,
      src: project42,
      alt: 'Portfolio Slide',
    },
    {
      id: 23,
      src: project43,
      alt: 'Portfolio Slide',
    },
    {
      id: 24,
      src: project44,
      alt: 'Portfolio Slide',
    },
  ];


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
        <Introduction
          introductionTitle="Portfolio"
          introductionSubtitle="My Work"
          introductionDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo euismod."
        />
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
              992: {
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
                onOpenModal={() => handleOpenModal("Project 1", "Description for Project 1", projectOneSlides)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioItem
                portfolioTitle="Portfolio Title"
                portfolioDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo euismod."
                onOpenModal={() => handleOpenModal("Project 2", "Description for Project 2", projectTwoSlides)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioItem
                portfolioTitle="Portfolio Title"
                portfolioDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo euismod."
                onOpenModal={() => handleOpenModal("Project 3", "Description for Project 3", projectThreeSlides)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioItem
                portfolioTitle="Portfolio Title"
                portfolioDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo euismod."
                onOpenModal={() => handleOpenModal("Project 4", "Description for Project 4", projectFourSlides)}
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
      <PortfolioModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={modalData.title}
        description={modalData.description}
        slides={modalData.slides}
      />
    </section>
  )
}
