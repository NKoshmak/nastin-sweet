/** @format */

import TextButton from "@/components/TextButton/TextButton";
import styles from "./hero.module.css";
import { MoneyBackIcon } from "@/components/Icons/Garantee";
import { InstagramGuideIcon } from "@/components/Icons/InstagramGuide";
import { TelegramIcon } from "@/components/Icons/TelegramIcon";
import { CostTableIcon } from "@/components/Icons/CostTable";

export default function CourseHero() {
  return (
    <>
      <section className={styles.courseHeader}>
        <div className={styles.inner}>
          <span className="badge">Онлайн</span>

          <h1 className={styles.courseTitle}>Курс з десертів</h1>

          <p className={styles.courseSubtitle}>
            Навчайся в зручному форматі та готуй професійні десерти з першого
            уроку
          </p>

          <TextButton href="#courses">Переглянути формати</TextButton>

          <div className="divider"></div>

          <ul className={styles.features}>
            <li>
              <span className={styles.icon}>
                <MoneyBackIcon />
              </span>
              <span>Гарантія повернення коштів</span>
            </li>

            <li>
              <span className={styles.icon}>
                <InstagramGuideIcon />
              </span>
              <span>Інстагайд по просуванню</span>
            </li>

            <li>
              <span className={styles.icon}>
                <TelegramIcon />
              </span>
              <span>Закритий Telegram-канал</span>
            </li>

            <li>
               <span className={styles.icon}>
                <CostTableIcon />
              </span>
              <span>Таблиця собівартості</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
