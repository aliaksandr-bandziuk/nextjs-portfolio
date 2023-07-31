'use client'
import React from 'react';
import Image from 'next/image';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Sphere } from '@react-three/drei'
import { motion } from 'framer-motion';

import styles from './Hero.module.scss';

import HeroImage from '../../assets/images/hero.png';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import { HeroSlider } from '../HeroSlider';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <svg className={styles.decorationLine} xmlns="http://www.w3.org/2000/svg" width="243" height="565" viewBox="0 0 243 565" fill="none">
        <path d="M1.5 3C104.5 41.1667 293.4 206.8 225 564" stroke="url(#paint0_linear_2_34)" strokeOpacity="0.06" strokeWidth="6" />
        <defs>
          <linearGradient id="paint0_linear_2_34" x1="-23.5" y1="-37.5" x2="333" y2="602.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#343045" />
            <stop offset="0.151042" stopColor="#C0B7E8" />
            <stop offset="0.760417" stopColor="#8176AF" />
            <stop offset="0.973958" stopColor="#343045" />
          </linearGradient>
        </defs>
      </svg>
      <div className="container">
        <div className={styles.heroWrapper}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Frontend Developer</h1>
            <motion.h2
              className={styles.heroSubtitle}
              animate={{ x: [50, 150, 50], opacity: 1, scale: 1.2 }}
              transition={{
                duration: 2,
                delay: 0.1,
                ease: [0.5, 0.71, 1, 1.5],
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              whileHover={{ scale: 0.8 }}
            >Alex Bandziuk</motion.h2>
            <p className={styles.heroDescription}>
              I create websites and applications for your business and entertainment. Use modern technologies to make the resource fast and adapted to any device.
            </p>
            <div className={styles.heroButton}>
              <Link href="#about">
                <ButtonPrimary className={styles.button} title="Learn more" />
              </Link>
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                <path d="M70.8333 50L29.1667 50M70.8333 50L54.1667 66.6667M70.8333 50L54.1667 33.3333" stroke="#C0B7E8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.heroImageWrapper}>
              <Canvas style={{ width: '100%', height: '400px' }}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <Sphere args={[1, 100, 100]} scale={3}>
                  <MeshDistortMaterial color="#3d1c56" attach="material" distort={0.5} speed={2} />
                </Sphere>
              </Canvas>
              <Image className={styles.image} src={HeroImage} alt="Aliaksandr Bandziuk" />
            </div>
          </div>
        </div>
        <HeroSlider />
      </div>
    </section>
  )
}
