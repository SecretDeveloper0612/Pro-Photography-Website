'use client';

import { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';
import Link from 'next/link';

const images = [
  "/Page/A7408902.jpg",
  "/Page/DSC07940.jpg",
  "/Page/DSC07193.jpg",
  "/Page/R5II2539.JPG"
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        {images.map((src, index) => (
          <Image 
            key={src}
            src={src} 
            alt={`Professional Photography ${index + 1}`} 
            fill
            priority={index === 0}
            className={`${styles.image} ${index === currentIndex ? styles.active : ''}`}
          />
        ))}
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.label}>Professional Photography Studio</div>
        <h1 className={styles.headline}>
          Every Frame<br />
          Tells a Story.
        </h1>
        <p className={styles.description}>
          Capturing extraordinary moments through timeless imagery, creative vision, and the art of storytelling.
        </p>
        <div className={styles.actions}>
          <Link href="#portfolio" className="btn-primary">Explore Portfolio</Link>
          <Link href="#book" className="btn-secondary">Book a Photoshoot</Link>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.line}></div>
      </div>
    </section>
  );
}
