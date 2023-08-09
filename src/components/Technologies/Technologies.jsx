'use client'
import Image from 'next/image';
import styles from './Technologies.module.scss';
import React, { useEffect } from 'react'
import { Tilt } from 'react-tilt';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import the required packages
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ReactLogo from '../../assets/images/logo-react.png';
import NextLogo from '../../assets/images/logo-next.png';
import WpLogo from '../../assets/images/logo-wp.png';
import TypeScriptLogo from '../../assets/images/logo-ts.png';
import JavaScriptLogo from '../../assets/images/logo-js.png';
import ReduxLogo from '../../assets/images/logo-redux.png';
import MuiLogo from '../../assets/images/logo-mui.png';
import GraphQlLogo from '../../assets/images/logo-graphql.png';
import ThreejsLogo from '../../assets/images/logo-three-js.png';

const defaultOptions = {
  reverse: false,  // reverse the tilt direction
  max: 35,     // max tilt rotation (degrees)
  perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1,    // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000,   // Speed of the enter/exit transition
  transition: true,   // Set a transition on enter/exit.
  axis: null,   // What axis should be disabled. Can be X or Y.
  reset: true,    // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
};

export const Technologies = () => {

  // Slick carousel settings
  const carouselSettings = {
    dots: false,
    infinite: true, // Set to true for continuous looping
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 0, // Set autoplaySpeed to 0 for continuous scrolling
    // autoplaySpeed: 2000,
    cssEase: 'linear', // Use linear easing for continuous scrolling
    slidesToShow: 3, // Adjust the number of visible slides
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
  };

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
          <Slider {...carouselSettings}>
            <Tilt className="Tilt" options={defaultOptions}>
              <div className={styles.technologieslogosItem}>
                <Image
                  src={ReactLogo}
                  alt="React"
                  width={120}
                  height={120}
                />
              </div>
            </Tilt>
            <Tilt className="Tilt" options={defaultOptions}>
              <div className={styles.technologieslogosItem}>
                <Image
                  src={NextLogo}
                  alt="Next.js"
                  width={120}
                  height={120}
                />
              </div>
            </Tilt>
            <Tilt className="Tilt" options={defaultOptions}>
              <div className={styles.technologieslogosItem}>
                <Image
                  src={WpLogo}
                  alt="WordPress"
                  width={120}
                  height={120}
                />
              </div>
            </Tilt>
            <Tilt className="Tilt" options={defaultOptions}>
              <div className={styles.technologieslogosItem}>
                <Image
                  src={TypeScriptLogo}
                  alt="TypeScript"
                  width={120}
                  height={120}
                />
              </div>
            </Tilt>
            <Tilt className="Tilt" options={defaultOptions}>
              <div className={styles.technologieslogosItem}>
                <Image
                  src={ReduxLogo}
                  alt="Redux"
                  width={120}
                  height={120}
                />
              </div>
            </Tilt>
            <Tilt className="Tilt" options={defaultOptions}>
              <div className={styles.technologieslogosItem}>
                <Image
                  src={MuiLogo}
                  alt="Material UI"
                  width={120}
                  height={120}
                />
              </div>
            </Tilt>
            <Tilt className="Tilt" options={defaultOptions}>
              <div className={styles.technologieslogosItem}>
                <Image
                  src={GraphQlLogo}
                  alt="GraphQl"
                  width={120}
                  height={120}
                />
              </div>
            </Tilt>
          </Slider>
        </div>
      </div>
    </section>
  )
}
