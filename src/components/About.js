import Image from 'next/image';
import Link from 'next/link';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>
          
          {/* Left Column: Photography */}
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/portfolio-1.jpg" 
                alt="The Artist behind the lens" 
                fill 
                className={styles.image}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className={styles.captionWrapper}>
                <span className={styles.caption}>The Artist</span>
              </div>
            </div>
            {/* Optional decorative overlapping element if desired, kept minimal */}
            <div className={styles.accentBox}></div>
          </div>

          {/* Right Column: Content */}
          <div className={styles.contentColumn}>
            <div className={styles.eyebrow}>The Person Behind the Camera</div>
            <h2 className={styles.heading}>More Than Photography. It&apos;s About How We See the World.</h2>
            
            <div className={styles.textContent}>
              <div className={styles.paragraphBlock}>
                <h3 className={styles.subheading}>The Story</h3>
                <p>
                  Every photograph begins with an observation—a fleeting moment, a subtle shift in light, a genuine emotion. My journey into photography was born out of a desire to preserve these extraordinary fragments of life. It&apos;s not just about taking a picture; it&apos;s about honoring the essence of the subject and capturing the atmosphere of the room.
                </p>
              </div>

              <div className={styles.paragraphBlock}>
                <h3 className={styles.subheading}>The Creative Vision</h3>
                <p>
                  My approach blends cinematic lighting with authentic documentary observation. I believe in styling that feels natural and direction that encourages genuine expression. Whether it&apos;s a high-fashion editorial or an intimate celebration, the goal remains the same: to create visually striking imagery that feels completely authentic and emotionally resonant.
                </p>
              </div>

              <div className={styles.paragraphBlock}>
                <h3 className={styles.subheading}>The Philosophy</h3>
                <p>
                  Great photography transcends time. It serves as a visual anchor to our most important memories and milestones. I approach every session with the understanding that these images will become part of your legacy—crafted with precision, passion, and a deep respect for your unique story.
                </p>
              </div>
            </div>

            <div className={styles.highlights}>
              <div className={styles.highlightItem}>
                <span className={styles.highlightLabel}>Expertise</span>
                <span className={styles.highlightValue}>Creative Direction</span>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.highlightItem}>
                <span className={styles.highlightLabel}>Focus</span>
                <span className={styles.highlightValue}>Visual Storytelling</span>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.highlightItem}>
                <span className={styles.highlightLabel}>Signature</span>
                <span className={styles.highlightValue}>Attention to Detail</span>
              </div>
            </div>

            <Link href="#portfolio" className="btn-primary">
              Let&apos;s Work Together
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
