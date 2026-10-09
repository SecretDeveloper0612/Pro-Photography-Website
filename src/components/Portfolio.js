'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Portfolio.module.css';

const portfolioData = [
  {
    id: 1,
    title: 'Midnight Elegance',
    category: 'Fashion Editorial',
    src: '/portfolio-1.jpg',
    aspectRatio: '3/4',
  },
  {
    id: 2,
    title: 'The Grand Entrance',
    category: 'Wedding',
    src: '/hero-bg.jpg',
    aspectRatio: '16/9',
  },
  {
    id: 3,
    title: 'Urban Shadows',
    category: 'Portraiture',
    src: '/portfolio-1.jpg',
    aspectRatio: '3/4',
  },
  {
    id: 4,
    title: 'Silent Whispers',
    category: 'Lifestyle',
    src: '/hero-bg.jpg',
    aspectRatio: '16/9',
  },
  {
    id: 5,
    title: 'Golden Hour',
    category: 'Fashion Editorial',
    src: '/portfolio-1.jpg',
    aspectRatio: '3/4',
  },
  {
    id: 6,
    title: 'Ethereal Bond',
    category: 'Wedding',
    src: '/hero-bg.jpg',
    aspectRatio: '16/9',
  },
];

export default function Portfolio() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index % portfolioData.length);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % portfolioData.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? portfolioData.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage(e);
      if (e.key === 'ArrowLeft') prevImage(e);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  // Duplicate items for seamless infinite scroll
  const carouselItems = [...portfolioData, ...portfolioData];

  return (
    <section id="portfolio" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>Selected Work</div>
          <h2 className={styles.heading}>Stories Told Through the Lens.</h2>
          <p className={styles.supportingText}>
            A curated collection of moments, emotions, and perspectives captured through our lens.
          </p>
          <a href="#" className={styles.viewAll}>
            View All Projects <span className={styles.arrow}>→</span>
          </a>
        </div>
      </div>

      <div className={styles.carouselWrapper}>
        <div className={styles.carouselTrack}>
          {carouselItems.map((item, index) => (
            <div 
              key={`${item.id}-${index}`} 
              className={styles.carouselItem} 
              style={{ aspectRatio: item.aspectRatio }}
              onClick={() => openLightbox(index)}
            >
              <Image 
                src={item.src} 
                alt={item.title} 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.image} 
              />
              <div className={styles.overlay}>
                <div className={styles.projectInfo}>
                  <h3 className={styles.projectTitle}>{item.title}</h3>
                  <p className={styles.projectCategory}>{item.category}</p>
                </div>
                <div className={styles.exploreLabel}>Explore Project ↗</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.closeBtn} onClick={closeLightbox}>×</button>
          
          <button className={styles.navBtn} onClick={prevImage}>←</button>
          
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.lightboxImageContainer}>
              <Image 
                src={portfolioData[lightboxIndex].src} 
                alt={portfolioData[lightboxIndex].title} 
                fill
                className={styles.lightboxImage}
              />
            </div>
            <div className={styles.lightboxCaption}>
              <h4>{portfolioData[lightboxIndex].title}</h4>
              <p>{portfolioData[lightboxIndex].category}</p>
            </div>
          </div>
          
          <button className={styles.navBtn} onClick={nextImage}>→</button>
        </div>
      )}
    </section>
  );
}
