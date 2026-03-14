/** @format */

import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          
          {/* COLUMN 1 — BRAND */}
          <div className={styles.column}>
            <h3 className={styles.logo}>Nastin Sweet</h3>
            <p className={styles.tagline}>Crafted with love in Calgary</p>
          </div>

          {/* COLUMN 2 — NAVIGATION */}
          <div className={styles.column}>
            <h4 className={styles.heading}>Navigation</h4>
            <ul className={styles.nav}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/menu">Menu</Link></li>
              <li><Link href="/order">Order</Link></li>
            </ul>
          </div>

          {/* COLUMN 3 — CONTACT + MAP */}
          <div className={styles.column}>
            <h4 className={styles.heading}>Get in Touch</h4>

            <p className={styles.text}>
              Have questions? We’d love to hear from you.
            </p>

            <a
              href="mailto:hello@nastinsweet.ca"
              className={styles.contact}
              aria-label="Send email to Nastin Sweet"
            >
              <Image
                src="/images/icons/mail.svg"
                width={24}
                height={24}
                alt="Email icon"
              />
              hello@nastinsweet.ca
            </a>

            <a
              href="https://www.instagram.com/nastin.sweet"
              target="_blank"
              className={styles.contact}
            >
              <Image
                src="/images/icons/insta.svg"
                width={24}
                height={24}
                alt="Instagram icon"
                aria-label="Visit Nastin Sweet Instagram"
              />
              @nastin.sweet
            </a>

            <p className={styles.delivery}>Local delivery available in Calgary</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Nastin Sweet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}