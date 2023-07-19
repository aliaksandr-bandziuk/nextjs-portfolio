import React from 'react';
import styles from './PortfolioModal.module.scss';
import { PortfolioSlider } from '../PortfolioSlider/PortfolioSlider';

const PortfolioModal = ({ isOpen, onClose, title, description, slides }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        {slides.length > 0 && <PortfolioSlider slides={slides} />}
        <div className={styles.modalText}>
          <h3 className={styles.modalTitle}>{title}</h3>
          <p className={styles.modalDescription}>{description}</p>
          <button className={styles.closeButton} onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M15 1L1 15M1.00001 1L15 15" stroke="#001A72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
