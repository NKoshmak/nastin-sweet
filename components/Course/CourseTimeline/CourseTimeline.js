/** @format */

import styles from "./coursetimeline.module.css";

export default function CourseTimeline() {
  return (
    <section className="section">
      <div className="container">
        <div className="divider"></div>

        <div className={styles.timelineLayout}>
          {/* LEFT */}
          <div className={styles.timelineSection}>
            <div className="headerBlock">
              <span className="badge">Процес</span>
              <h2 className="title">Як проходить навчання</h2>
            </div>

            <div className={styles.timeline}>
              {/* STEP 1 */}
              <div className={styles.timelineItem}>
                <div className={styles.timelineNumber}>1</div>
                <div className={styles.timelineContent}>
                  <h3>Доступ до курсу</h3>
                  <p>
                    Одразу після оплати отримуєш доступ до всіх уроків та
                    матеріалів.
                  </p>
                </div>
              </div>

              {/* STEP 2 */}
              <div className={styles.timelineItem}>
                <div className={styles.timelineNumber}>2</div>
                <div className={styles.timelineContent}>
                  <h3>Перегляд уроків</h3>
                  <p>
                    Дивишся уроки у будь-який час — зі смартфона чи ноутбука.
                  </p>
                </div>
              </div>

              {/* STEP 3 */}
              <div className={styles.timelineItem}>
                <div className={styles.timelineNumber}>3</div>
                <div className={styles.timelineContent}>
                  <h3>Практика та підтримка</h3>
                  <p>
                    Повторюєш техніки, виконуєш завдання та отримуєш зворотний
                    зв’язок від мене.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.videoWrapper}>
            <video
              src="/images/Untitled.mov"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
}
