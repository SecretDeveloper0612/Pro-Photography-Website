import Image from 'next/image';
import Link from 'next/link';
import styles from './Categories.module.css';

const categories = [
  {
    id: '01',
    slug: 'wedding',
    title: 'Wedding Photography',
    description: 'Capture authentic emotions, unforgettable moments, wedding ceremonies, and celebrations through timeless, cinematic imagery.',
    image: '/hero-bg.jpg',
    layoutClass: 'large'
  },
  {
    id: '02',
    slug: 'portrait-fashion',
    title: 'Portrait & Fashion',
    description: 'Showcase personality, style, and individuality through professional portraits, fashion editorials, and creative studio shoots.',
    image: '/portfolio-1.jpg',
    layoutClass: 'tall'
  },
  {
    id: '03',
    slug: 'pre-wedding',
    title: 'Pre-Wedding',
    description: 'Tell a couple’s story through romantic compositions, beautiful locations, natural expressions, and cinematic visual storytelling.',
    image: '/hero-bg.jpg',
    layoutClass: 'wide'
  },
  {
    id: '04',
    slug: 'events',
    title: 'Events & Celebrations',
    description: 'Document birthdays, private parties, corporate events, cultural celebrations, and special occasions with professional coverage.',
    image: '/portfolio-1.jpg',
    layoutClass: 'square'
  },
  {
    id: '05',
    slug: 'product',
    title: 'Product Photography',
    description: 'Create detailed, visually appealing product imagery for e-commerce stores, catalogs, advertisements, and marketing campaigns.',
    image: '/hero-bg.jpg',
    layoutClass: 'tall'
  },
  {
    id: '06',
    slug: 'commercial-brand',
    title: 'Commercial & Brand',
    description: 'Help businesses communicate their identity through professional brand campaigns, corporate portraits, and advertising photography.',
    image: '/portfolio-1.jpg',
    layoutClass: 'wide'
  }
];

export default function Categories() {
  // Duplicate categories for seamless infinite scroll
  const carouselItems = [...categories, ...categories];

  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <div className={styles.eyebrow}>What We Do</div>
          <h2 className={styles.heading}>Our Lens. Your Story.</h2>
          <p className={styles.supportingText}>
            From once-in-a-lifetime celebrations to powerful brand imagery, we capture every story with creativity, precision, and purpose.
          </p>
        </div>
      </div>

      <div className={styles.carouselWrapper}>
        <div className={styles.carouselTrack}>
          {carouselItems.map((category, index) => (
            <Link 
              href={`/services/${category.slug}`} 
              key={`${category.id}-${index}`} 
              className={`${styles.card} ${styles[category.layoutClass]}`}
            >
              <div className={styles.imageWrapper}>
                <Image 
                  src={category.image} 
                  alt={category.title} 
                  fill 
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={styles.overlay}>
                  <div className={styles.number}>{category.id}</div>
                  <div className={styles.content}>
                    <h3 className={styles.title}>{category.title}</h3>
                    <p className={styles.description}>{category.description}</p>
                    <span className={styles.exploreLink}>Explore Category <span className={styles.arrow}>→</span></span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
