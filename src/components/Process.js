import Image from 'next/image';
import Link from 'next/link';
import styles from './Process.module.css';

const steps = [
  {
    number: '01',
    headline: 'First, We Listen.',
    title: 'Consultation',
    description: 'We discuss your project, understand your preferred aesthetic, and recommend the best approach to bring your vision to life.',
    image: '/portfolio-1.jpg'
  },
  {
    number: '02',
    headline: 'Every Detail Matters.',
    title: 'Creative Planning',
    description: 'Transforming the initial concept into a clear photography plan, including locations, lighting, composition, and styling.',
    image: '/hero-bg.jpg'
  },
  {
    number: '03',
    headline: 'Bring the Vision to Life.',
    title: 'The Photoshoot',
    description: 'Capturing authentic moments and compelling compositions using professional equipment and thoughtful creative direction.',
    image: '/portfolio-1.jpg'
  },
  {
    number: '04',
    headline: 'Crafted to Be Remembered.',
    title: 'Editing & Delivery',
    description: 'Carefully refining the best photographs with professional color correction and retouching for a consistent, polished result.',
    image: '/hero-bg.jpg'
  }
];

export default function Process() {
  return (
    <section id="process" className={styles.section}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.eyebrow}>How We Work</div>
          <h2 className={styles.heading}>From the First Idea to the Final Frame.</h2>
          <p className={styles.supportingText}>
            Every unforgettable photograph begins with a vision. We turn your ideas into meaningful images through a thoughtful, collaborative, and creative process.
          </p>
        </div>

        {/* Timeline Process */}
        <div className={styles.timeline}>
          <div className={styles.timelineLine}></div>
          
          <div className={styles.stepsGrid}>
            {steps.map((step, index) => (
              <div key={step.number} className={styles.stepCard}>
                <div className={styles.stepVisual}>
                  <div className={styles.imageWrapper}>
                    <Image 
                      src={step.image} 
                      alt={step.title} 
                      fill 
                      className={styles.image}
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                  <div className={styles.stepNumberContainer}>
                    <div className={styles.stepNode}></div>
                    <span className={styles.stepNumber}>{step.number}</span>
                  </div>
                </div>
                
                <div className={styles.stepContent}>
                  <h4 className={styles.stepHeadline}>{step.headline}</h4>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaSection}>
          <h3 className={styles.ctaHeading}>Have a Story Worth Capturing?</h3>
          <p className={styles.ctaSupportingText}>
            Let&apos;s turn your vision into photographs you&apos;ll want to revisit for years to come.
          </p>
          <Link href="#contact" className="btn-primary">
            Start Your Photography Journey
          </Link>
        </div>

      </div>
    </section>
  );
}
