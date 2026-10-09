"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from './Contact.module.css';

export default function Contact() {
  const [formState, setFormState] = useState({
    status: 'idle', // idle, submitting, success, error
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState({ status: 'submitting', message: '' });
    
    // Simulate API call
    setTimeout(() => {
      setFormState({ 
        status: 'success', 
        message: 'Thank you for reaching out to Pro Photography. Your enquiry has been received, and we\'ll be in touch using the contact details you provided.' 
      });
    }, 1500);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <div className={styles.eyebrow}>Let&apos;s Connect</div>
          <h2 className={styles.heading}>Let&apos;s Bring Your Vision to Life.</h2>
          <p className={styles.supportingText}>
            Whether you&apos;re planning a special occasion, a personal portrait session, or a creative brand project, tell us what you have in mind. We&apos;d love to hear your story.
          </p>
        </div>

        <div className={styles.layout}>
          
          {/* Left Column: Contact Info */}
          <div className={styles.infoColumn}>
            <div className={styles.infoBlock}>
              <h3 className={styles.infoLabel}>Email Us</h3>
              <a href="mailto:hello@prophotography.com" className={styles.infoValue}>hello@prophotography.com</a>
              <a href="mailto:hello@prophotography.com" className={styles.contactLink}>
                Send an Email <span className={styles.arrow}>→</span>
              </a>
            </div>

            <div className={styles.infoBlock}>
              <h3 className={styles.infoLabel}>WhatsApp</h3>
              <p className={styles.infoValue}>+1 (555) 123-4567</p>
              <a 
                href="https://wa.me/15551234567?text=Hi,%20I'd%20like%20to%20enquire%20about%20a%20photography%20session." 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                Chat on WhatsApp <span className={styles.arrow}>→</span>
              </a>
            </div>

            <div className={styles.infoBlock}>
              <h3 className={styles.infoLabel}>Studio Location</h3>
              <p className={styles.infoValue}>123 Creative Studio Ave, Design District</p>
              <p className={styles.subValue}>Available for travel worldwide.</p>
            </div>

            <div className={styles.infoBlock}>
              <h3 className={styles.infoLabel}>Working Hours</h3>
              <p className={styles.infoValue}>Monday — Friday</p>
              <p className={styles.subValue}>09:00 AM — 06:00 PM</p>
            </div>
          </div>

          {/* Right Column: Booking Form */}
          <div className={styles.formColumn}>
            {formState.status === 'success' ? (
              <div className={styles.successState}>
                <h3 className={styles.successHeading}>Your Story Starts Here.</h3>
                <p className={styles.successMessage}>{formState.message}</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGrid}>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Full Name *</label>
                    <input type="text" id="name" required placeholder="Enter your full name" className={styles.input} />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email Address *</label>
                    <input type="email" id="email" required placeholder="you@example.com" className={styles.input} />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.label}>Phone / WhatsApp *</label>
                    <input type="tel" id="phone" required placeholder="Enter your contact number" className={styles.input} />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="type" className={styles.label}>Photography Type *</label>
                    <select id="type" required className={styles.select} defaultValue="">
                      <option value="" disabled>Select an option</option>
                      <option value="wedding">Wedding Photography</option>
                      <option value="pre-wedding">Pre-Wedding Photography</option>
                      <option value="portrait">Portrait & Fashion Photography</option>
                      <option value="events">Events & Celebrations</option>
                      <option value="product">Product Photography</option>
                      <option value="commercial">Commercial & Brand Photography</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="date" className={styles.label}>Preferred Date</label>
                    <input type="date" id="date" className={styles.input} min={new Date().toISOString().split('T')[0]} />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="location" className={styles.label}>Location</label>
                    <input type="text" id="location" placeholder="City, venue, or preferred location" className={styles.input} />
                  </div>
                  
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label htmlFor="details" className={styles.label}>Project Details</label>
                  <textarea 
                    id="details" 
                    rows="4" 
                    placeholder="Tell us about your vision, occasion, preferred style, and any special requirements." 
                    className={styles.textarea}
                  ></textarea>
                </div>

                <div className={styles.submitWrapper}>
                  <button 
                    type="submit" 
                    className={`btn-primary ${styles.submitBtn}`}
                    disabled={formState.status === 'submitting'}
                  >
                    {formState.status === 'submitting' ? 'Sending...' : 'Send Booking Enquiry'}
                  </button>
                  <p className={styles.privacyNote}>
                    Your details will only be used to respond to your photography enquiry.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
