/** @format */

"use client";
import styles from "./hero.module.css";
import TextButton from "@/components/TextButton/TextButton";

export default function Hero({ title, subtitle }) {
  return (
    <>
      <section className={styles.intro}>
        {/* 1) Glow layer (під контентом) */}
      <div className={styles.glows} aria-hidden="true">
        <span className={`${styles.glow} ${styles.g1}`} />
        <span className={`${styles.glow} ${styles.g2}`} />
        <span className={`${styles.glow} ${styles.g3}`} />
      </div> 
        <div className="container">
          <div className={styles.inner}>
            <h1 className={styles.title}>
             {title}
              <br />
              <span> {subtitle}</span>
            </h1>

            {/* <div className={styles.divider}></div> */}

            <div className={styles.ctaGroup}>
              <TextButton href="/order" variant="primary">
                Order a Cake
              </TextButton>

              <TextButton href="/gallery">View Gallery</TextButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
