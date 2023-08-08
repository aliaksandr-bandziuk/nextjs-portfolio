import React from 'react';
import styles from './PortfolioItem.module.scss';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

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

const PortfolioItem = ({ portfolioImage, portfolioTitle, portfolioDescription, onOpenModal }) => {
  return (
    <div
      className={styles.portfolioItem}
      onClick={onOpenModal}
    >
      <Tilt className="Tilt" options={defaultOptions}>
        <Image src={portfolioImage} className={styles.image} alt="Portfolio Image" />
        <div className={styles.portfolioItemContent}>
          <div className={styles.contentInner}>
            <h3 className={styles.title}>{portfolioTitle}</h3>
            <p className={styles.text}>{portfolioDescription}</p>
            <ButtonPrimary title="View Project" onClick={onOpenModal} />
          </div>
        </div>
      </Tilt>
    </div>
    // <div className={styles.portfolioItem}>
    //   <div className={styles.portfolioItemWpapper}>
    //     <div className={styles.portfolioItemImg}>
    //       <Image src={portfolioImage} className={styles.img} alt="Portfolio Image" />
    //     </div>
    //     <div className={styles.portfolioItemContent}>
    //       <h3 className={styles.title}>{portfolioTitle}</h3>
    //       <p className={styles.text}>{portfolioDescription}</p>
    //       <ButtonPrimary title="View Project" onClick={onOpenModal} />
    //     </div>
    //   </div>
    // </div>
  );
};

export default PortfolioItem;
