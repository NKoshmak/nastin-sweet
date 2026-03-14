/** @format */

// components/AboutCourse.jsx
import styles from "@/components/Course/AboutCourse/about.module.css";
import Image from "next/image";

export default function AboutCourse() {
  return (
    <section className="section">
      <div className={styles.glow}></div>
      <div className={styles.glowSoft}></div>
      <div className="container">
        <div className="divider"></div>
        {/* Ліва колонка */}

        <div className={styles.wrapper}>
          <div className={styles.left}>
            <span className="badge">ПРО КУРС</span>
            <h2 className="title">Про цей курс</h2>
          </div>

          {/* Права колонка */}
          <div className={styles.right}>
            <p>
              Цей курс — результат моїх 12 років досвіду у світі десертів. Кожен
              урок є чітким, покроковим і практичним — тільки те, що ти справді
              будеш використовувати в роботі.
            </p>

            <p>
              Ти навчишся готувати найприбутковіші формати десертів. В одному
              курсі ти пройдеш шлях від приготування до продажів.
            </p>

            <p>
              Навіть якщо ти ніколи не тримала кондитерський мішок, я допоможу
              створити твої перші “вау” десерти, якими ти будеш пишатися. У
              результаті ти матимеш усе необхідне, щоб впевнено розвивати власну
              справу.
            </p>

            <div className={styles.author}>
              <div className={styles.authorWrapper}>
                <Image
                  src="/images/nastya3-4.jpg"
                  alt="Author photo"
                  fill
                  className={styles.authorImage}
                />
              </div>

              <div>
                <div className={styles.authorName}>Anastasia</div>
                <div className={styles.authorSubtitle}>Авторка курсу</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
