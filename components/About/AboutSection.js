/** @format */

import Image from "next/image";
import styles from "./about.module.css";

export default function AboutSection() {
  return (
    <section className="section">
      <div className={styles.glow}></div>
      <div className={styles.glowSoft}></div>
      <div className={styles.container}>
        <div className={styles.aboutBlock}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/nastya3-4.jpg"
              alt="Nastin"
              className={styles.image}
              fill
            />
          </div>

          <div className={styles.card}>
            <span className="badge">MEET THE MAKER</span>

            <h2 className="title">
              Hi, I&apos;m Anastasia — the hands behind Sweet Artistry
            </h2>
            <p>
              Baking for me is more than just making desserts. It’s about
              creating something that feels special the moment you see it and
              unforgettable the moment you taste it.
            </p>
            <p>
              I believe desserts should not only look beautiful, but also tell a
              story. A story of care, creativity, and moments worth celebrating.
            </p>

            <p>
              Today I create cakes and desserts for birthdays, weddings, and
              special gatherings - pieces that bring beauty, joy, and a little
              bit of magic to the table.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
