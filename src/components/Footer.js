"use client";
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

const instagramPosts = [
  { id: 1, image: '/portfolio-1.jpg', link: 'https://instagram.com' },
  { id: 2, image: '/hero-bg.jpg', link: 'https://instagram.com' },
  { id: 3, image: '/portfolio-1.jpg', link: 'https://instagram.com' },
  { id: 4, image: '/hero-bg.jpg', link: 'https://instagram.com' },
  { id: 5, image: '/portfolio-1.jpg', link: 'https://instagram.com' },
  { id: 6, image: '/hero-bg.jpg', link: 'https://instagram.com' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerWrapper}>
      
      {/* Main Footer */}
      <div className={styles.mainFooter}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            
            {/* Column 1: Brand */}
            <div className={styles.footerCol}>
              <h3 className={styles.brandName}>PRO PHOTOGRAPHY</h3>
              <p className={styles.brandDesc}>
                Capturing meaningful moments through timeless imagery and thoughtful visual storytelling.
              </p>
              <div className={styles.socialLinks}>
                <a href="https://instagram.com" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://facebook.com" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="https://pinterest.com" aria-label="Pinterest">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.3 2.7 8 6.5 9.4-.1-1-.1-2.4 0-3.4.2-1 1.2-5 1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.5 1.8-2.5.9 0 1.3.6 1.3 1.4 0 .9-.6 2.2-.8 3.5-.2 1 .5 1.9 1.5 1.9 1.8 0 3.2-1.9 3.2-4.6 0-2.4-1.7-4.1-4.2-4.1-2.8 0-4.5 2.1-4.5 4.3 0 .8.3 1.7.7 2.2.1.1.1.2 0 .3l-.2.9c-.1.2-.2.2-.4.1-1.3-.6-2.1-2.4-2.1-3.9 0-3.1 2.3-6 6.6-6 3.4 0 6.1 2.4 6.1 5.6 0 3.4-2.1 6.1-5 6.1-1 0-2-.5-2.3-1.2l-.6 2.4c-.2.8-.8 1.8-1.2 2.4 1 .3 2.1.5 3.2.5 5.5 0 10-4.5 10-10S17.5 2 12 2z"></path></svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className={styles.footerCol}>
              <h4 className={styles.colTitle}>Quick Navigation</h4>
              <ul className={styles.linkList}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="#portfolio">Portfolio</Link></li>
                <li><Link href="#services">Photography Services</Link></li>
                <li><Link href="#about">About the Photographer</Link></li>
                <li><Link href="#process">Our Creative Process</Link></li>
                <li><Link href="#contact">Contact & Booking</Link></li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className={styles.footerCol}>
              <h4 className={styles.colTitle}>Photography Services</h4>
              <ul className={styles.linkList}>
                <li><Link href="/services/wedding">Wedding Photography</Link></li>
                <li><Link href="/services/pre-wedding">Pre-Wedding Photography</Link></li>
                <li><Link href="/services/portrait">Portrait & Fashion</Link></li>
                <li><Link href="/services/events">Events & Celebrations</Link></li>
                <li><Link href="/services/product">Product Photography</Link></li>
                <li><Link href="/services/commercial">Commercial & Brand</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className={styles.footerCol}>
              <h4 className={styles.colTitle}>Contact Us</h4>
              <ul className={styles.contactList}>
                <li>
                  <a href="mailto:hello@prophotography.com" className={styles.contactLink}>hello@prophotography.com</a>
                </li>
                <li>
                  <a href="tel:+15551234567" className={styles.contactLink}>+1 (555) 123-4567</a>
                </li>
                <li>
                  <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>
                    Chat on WhatsApp
                  </a>
                </li>
                <li className={styles.contactText}>
                  123 Creative Studio Ave<br/>
                  Design District
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.container}>
          <div className={styles.bottomBarContent}>
            <p className={styles.copyright}>
              &copy; {currentYear} Pro Photography. All rights reserved.
            </p>
            <div className={styles.developerCredit}>
              Design & Developed By <a href="https://preettech.com" target="_blank" rel="noopener noreferrer">Preet Tech</a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
