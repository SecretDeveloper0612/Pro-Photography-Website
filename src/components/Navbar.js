import styles from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            Pro<span>Photography</span>
          </Link>
        </div>
        
        <nav className={styles.nav}>
          <ul className={styles.navLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="#portfolio">Portfolio</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        
        <div className={styles.cta}>
          <Link href="/contact" className="btn-primary">Book a Session</Link>
        </div>
      </div>
    </header>
  );
}
