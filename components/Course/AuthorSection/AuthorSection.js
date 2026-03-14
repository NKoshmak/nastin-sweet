/** @format */

"use client";
import Image from "next/image";
import styles from "./authorSection.module.css";

export default function AuthorSection() {
  return (
    <section className={`section ${styles.authorSection}`}>
      <div className="container">
        <div className="divider"></div>

        <div className="headerBlock">
          <span className="badge">АВТОР КУРСУ</span>
          <h2 className="title">Познайомся зі своїм ментором</h2>
        </div>

        <div className={styles.grid}>
          {/* LEFT: PHOTO */}
          <div className={styles.photoBlock}>
            <div className={styles.photoWrapper}>
              <Image
                src="/images/nastya3-4.jpg"
                alt="Анастасія Томко"
                fill
                className={styles.photo}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>

            {/* NAME CARD ON PHOTO */}
            <div className={styles.nameCard}>
              <h3 className={styles.name}>Анастасія Томко</h3>
              <p className={styles.role}>Кондитер з 12-річним досвідом</p>
            </div>
          </div>

          {/* RIGHT: TEXT + STATS */}
          <div className={styles.textBlock}>
            <p className={styles.intro}>
              Привіт! Я — <strong>кондитер з 12-річним досвідом</strong> і
              авторка десятків тисяч десертів, які куштували в Україні та за її
              межами.
            </p>

            <ul className={styles.list}>
              <li>
                Зібрала сотні стильних кенді-барів для свят, весіль і подій.
              </li>
              <li>
                <strong>Продала тисячі тортів та десертів</strong> — і знаю, що
                саме “зайде” клієнтам.
              </li>
              <li>
                Навчила понад <strong>170 дівчат</strong> робити десерти
                професійно та стабільно.
              </li>
              <li>
                Допомагаю створювати десерти, які купують — стабільні, смачні й
                красиві.
              </li>
            </ul>

            <div className={styles.stats}>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <IconExperience />
                </div>
                <div>
                  <p className={styles.statNumber}>12+</p>
                  <p className={styles.statLabel}>років досвіду</p>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <IconStudents />
                </div>

                <div>
                  <p className={styles.statNumber}>170+</p>
                  <p className={styles.statLabel}>учениць</p>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <CandyBars />
                </div>

                <div>
                  <p className={styles.statNumber}>300+</p>
                  <p className={styles.statLabel}>кенді барів</p>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <Cakes />
                </div>

                <div>
                  <p className={styles.statNumber}>8000+</p>
                  <p className={styles.statLabel}>тортів</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ICONS ---------------- */

function IconExperience() {
  return (
    <svg width="40" height="40" viewBox="0 0 64 64">
      <circle
        cx="32"
        cy="32"
        r="22"
        stroke="#c06a8d"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M32 18v14l10 6"
        stroke="#c06a8d"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconStudents() {
  return (
    <svg width="40" height="40" viewBox="0 0 64 64">
      <circle
        cx="32"
        cy="32"
        r="22"
        stroke="#c06a8d"
        strokeWidth="2"
        fill="none"
      />

      <circle
        cx="32"
        cy="26"
        r="6"
        stroke="#c06a8d"
        strokeWidth="2"
        fill="none"
      />

      <path
        d="M22 42c2-6 18-6 20 0"
        stroke="#c06a8d"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CandyBars() {
  return (
    <svg width="40" height="40" viewBox="0 0 64 64">
      <circle
        cx="32"
        cy="32"
        r="22"
        stroke="#c06a8d"
        strokeWidth="2"
        fill="none"
      />

      <rect
        x="22"
        y="30"
        width="20"
        height="12"
        rx="3"
        stroke="#c06a8d"
        strokeWidth="2"
        fill="none"
      />

      <path
        d="M26 30v-6M32 30v-6M38 30v-6"
        stroke="#c06a8d"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Cakes() {
  return (
    <svg width="40" height="40" viewBox="0 0 64 64">
      <circle
        cx="32"
        cy="32"
        r="22"
        stroke="#c06a8d"
        strokeWidth="2"
        fill="none"
      />

      <path
        d="M22 36h20"
        stroke="#c06a8d"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path d="M24 36v-8h16v8" stroke="#c06a8d" strokeWidth="2" fill="none" />

      <path
        d="M28 28c0-3 8-3 8 0"
        stroke="#c06a8d"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}
