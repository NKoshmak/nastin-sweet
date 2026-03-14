/** @format */

import Link from "next/link";
import InstagramCard from "./InstagramCard";
import styles from "./instagram.module.css";

export default function InstagramSection() {
  const photos = [
    "/images/instagram/1.webp",
    "/images/instagram/2.webp",
    "/images/instagram/3.webp",
    "/images/instagram/4.webp",
    "/images/instagram/5.webp",
  ];

  return (
    <section className="section">
      <div className={styles.glow}></div>
      <div className={styles.glowSoft}></div>
      <div className="container">
        <div className="headerBlock">
          <span className="badge">From our Feed</span>
          <h2 className="title">Follow on Instagram</h2>
        </div>

        <div className={styles.grid}>
          {photos.map((src, i) => (
            <InstagramCard key={i} src={src} alt={`Instagram photo ${i}`} />
          ))}
        </div>

        {/* CLIPPABLE HANDLE */}
        <Link
          href="https://www.instagram.com/nastin.sweet"
          target="_blank"
          className={styles.handle}
        >
          @nastin.sweet
        </Link>
      </div>
    </section>
  );
}
