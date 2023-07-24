import React from 'react';
import styles from './PortfolioItem.module.scss';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import Image from 'next/image';

import Logo from '../../assets/images/logo.png';

const PortfolioItem = ({ portfolioTitle, portfolioDescription, onOpenModal }) => {
  return (
    <div className={styles.portfolioItem}>
      <div className={styles.portfolioItemWpapper}>
        <div className={styles.portfolioItemImg}>
          <Image src={Logo} alt="" />
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
