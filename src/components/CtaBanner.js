import Image from 'next/image';
import Link from 'next/link';
import styles from './CtaBanner.module.css';

export default function CtaBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <Image 
          src="/hero-bg.jpg" 
          alt="Cinematic Photography Moment" 
          fill
          className={styles.image}
          sizes="100vw"
        />
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>Let&apos;s Create Something Meaningful</div>
          <h2 className={styles.heading}>
            Let&apos;s Create Something Timeless.
          </h2>
          <p className={styles.description}>
            Every story deserves to be remembered. Let&apos;s turn your vision, your moments, and your ideas into photographs you&apos;ll treasure for years to come.
          </p>
          
          <div className={styles.actions}>
            <Link href="/contact" className="btn-primary">
              Book Your Photoshoot <span className={styles.arrow}>→</span>
            </Link>
            <Link href="#portfolio" className="btn-secondary">
              Explore Our Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
