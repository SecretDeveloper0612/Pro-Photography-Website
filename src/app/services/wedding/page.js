import { Suspense } from 'react';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import CtaBanner from '../../../components/CtaBanner';
import styles from './page.module.css';

export default function WeddingPhotography() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      
      <main>
        {/* Cinematic Hero */}
        <section className={styles.hero}>
          <Image 
            src="/Page/R5II7777.jpg" 
            alt="The Grand Entrance"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>Editorial Wedding</span>
            <h1 className={styles.heroTitle}>A Cinematic Legacy.</h1>
            <p className={styles.heroDescription}>
              We don&apos;t just capture weddings. We craft timeless editorial narratives, preserving the romance, grandeur, and fleeting, quiet moments of your most momentous day.
            </p>
          </div>
        </section>

        {/* Editorial Storytelling Layout */}
        <section className={styles.editorialSection}>
          <div className={styles.editorialRow}>
            <div className={styles.editorialImageWrapper}>
              <Image 
                src="/Page/A7400451.JPG"
                alt="Quiet moments"
                fill
                className={styles.editorialImage}
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
            <div className={styles.editorialContent}>
              <h2>The Quiet Whispers</h2>
              <p>
                Behind every grand celebration lies a mosaic of intimate, quiet moments. The nervous breath before the aisle, the subtle glance across a crowded room, the tear wiped away in secret.
              </p>
              <p>
                Our editorial approach ensures that these fleeting instances are documented with the same reverence as the grandest traditions, creating a deeply personal narrative of your day.
              </p>
            </div>
          </div>

          <div className={`${styles.editorialRow} ${styles.reverse}`}>
            <div className={styles.editorialImageWrapper} style={{ aspectRatio: '16/9' }}>
              <Image 
                src="/Page/R5II0379.JPG"
                alt="Grand celebrations"
                fill
                className={styles.editorialImage}
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
            <div className={styles.editorialContent}>
              <h2>The Grand Celebration</h2>
              <p>
                From sweeping architectural venues to sun-drenched destination landscapes, we step back to capture the magnificent scale of your celebration.
              </p>
              <p>
                With an eye for dramatic lighting and sophisticated composition, we turn your venue and its vibrant energy into sweeping cinematic frames worthy of a magazine spread.
              </p>
            </div>
          </div>
        </section>

        {/* Asymmetrical Masonry Gallery */}
        <section className={styles.masonryGallery}>
          <div className={`${styles.masonryItem} ${styles.item1}`}>
            <Image src="/Page/A7405724.JPG" alt="Wedding visual" fill sizes="(max-width: 1024px) 100vw, 70vw" />
          </div>
          <div className={`${styles.masonryItem} ${styles.item2}`}>
            <Image src="/Page/A7400206.JPG" alt="Wedding visual" fill sizes="(max-width: 1024px) 100vw, 30vw" />
          </div>
          <div className={`${styles.masonryItem} ${styles.item3}`}>
            <Image src="/Page/IMG_0173.JPG" alt="Wedding visual" fill sizes="(max-width: 1024px) 100vw, 30vw" />
          </div>
          <div className={`${styles.masonryItem} ${styles.item4}`}>
            <Image src="/Page/A7409283.jpg" alt="Wedding visual" fill sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div className={`${styles.masonryItem} ${styles.item5}`}>
            <Image src="/Page/IMG_0060.JPG" alt="Wedding visual" fill sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
        </section>

        <CtaBanner />
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
