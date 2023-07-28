import React from 'react';
import styles from './PortfolioItem.module.scss';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import Image from 'next/image';
import { motion } from 'framer-motion';

const PortfolioItem = ({ portfolioImage, portfolioTitle, portfolioDescription, onOpenModal }) => {
  return (
    <div className={styles.portfolioItem}>
      <div className={styles.portfolioItemWpapper}>
        <div className={styles.portfolioItemImg}>
          <Image src={portfolioImage} className={styles.img} alt="Portfolio Image" />
        </div>
        <div className={styles.portfolioItemContent}>
          <h3 className={styles.title}>{portfolioTitle}</h3>
          <p className={styles.text}>{portfolioDescription}</p>
          <ButtonPrimary title="View Project" onClick={onOpenModal} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
