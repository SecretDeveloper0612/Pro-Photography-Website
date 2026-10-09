import styles from './Hero.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <Image 
          src="/hero-bg.jpg" 
          alt="Cinematic Professional Photography" 
          fill
          priority
          className={styles.image}
        />
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
