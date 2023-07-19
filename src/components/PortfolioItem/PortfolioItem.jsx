import React from 'react';
import styles from './PortfolioItem.module.scss';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';

const PortfolioItem = ({ portfolioTitle, portfolioDescription, onOpenModal }) => {
  return (
    <div className={styles.portfolioItem}>
      <div className={styles.portfolioItemWpapper}>
        <div className={styles.portfolioItemImg}>
          <img className={styles.img} src="https://via.placeholder.com/300x300" alt="" />
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
