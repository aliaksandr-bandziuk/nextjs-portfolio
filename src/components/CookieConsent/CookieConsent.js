'use client'
import React, { useState } from 'react'

import styles from './CookieConsent.module.scss'

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(true);

  const handleAccept = () => {
    // При клике на "Принять", сохраните состояние в localStorage или cookie,
    // чтобы сообщение больше не отображалось после обновления страницы
    localStorage.setItem('cookieConsentAccepted', 'true');
    setShowBanner(false);
  };

  const handleDecline = () => {
    // При клике на "Отказаться", удаляем состояние из localStorage,
    // чтобы сообщение о согласии на использование куки снова появлялось
    localStorage.removeItem('cookieConsentAccepted');
    setShowBanner(false);
  };

  // Проверка, было ли согласие на использование куки принято
  const isConsentAccepted = localStorage.getItem('cookieConsentAccepted') === 'true';

  if (!showBanner || isConsentAccepted) {
    return null;
  }

  return (
    <div className={styles.cookieBanner}>
      <p>This website uses cookies to improve your experience.</p>
      <button onClick={handleAccept}>Accept</button>
      <button onClick={handleDecline}>Decline</button>
    </div>
  );
}