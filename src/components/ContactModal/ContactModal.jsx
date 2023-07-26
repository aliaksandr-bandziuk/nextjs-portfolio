import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import styles from './ContactModal.module.scss';
import { ContactForm } from '../ContactForm';
import Image from 'next/image';

import ButtonClose from '../../assets/images/close.svg';

export const ContactModal = ({ isOpen, onClose }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openModal = () => {
    setIsContactModalOpen(true);
    document.body.style.overflow = 'hidden'; // Заблокировать скролл
  };

  const closeModal = () => {
    setIsContactModalOpen(false);
    document.body.style.overflow = 'auto'; // Разблокировать скролл
  };

  const handleFormSubmit = () => {
    closeModal();
  };

  useEffect(() => {
    if (isOpen) {
      openModal();
    } else {
      closeModal();
    }
  }, [isOpen]);

  const modalAnimation = useSpring({
    transform: isContactModalOpen ? 'scale(1)' : 'scale(0)',
    opacity: isContactModalOpen ? 1 : 0,
  });

  const modalContentRef = useRef(null);

  return (
    <animated.div className={styles.modalOverlay} style={modalAnimation}>
      <div ref={modalContentRef} className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Hire me now</h2>
        <button className={styles.closeButton} onClick={onClose}>
          <Image src={ButtonClose} alt="Close" />
        </button>
        <ContactForm isOpen={isContactModalOpen} onClose={closeModal} onSubmitSuccess={handleFormSubmit} />
      </div>
    </animated.div>
  );
};
