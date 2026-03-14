/** @format */

import styles from "./pricing.module.css";
import { handleCheckout } from "@/utils/checkout";

export default function PricingSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="divider"></div>

        <div className="headerBlock">
          <span className="badge">Ціни</span>
          <h2 className="title">Обери свій формат навчання</h2>
        </div>

        <div className={styles.cards}>
          
          {/* CARD 1 */}
          <div className={styles.card}>
            <div className={styles.glow}></div>
          <div className={styles.glowSoft}></div>
        
              <h3 className={styles.planName}>
                <span className={styles.planType}>Курс</span>
                <br />
                <span className={styles.planTitle}>«Десерти з нуля»</span>
              </h3>
      

            <p className={styles.price}>
              19 <span>USD</span>
            </p>

            <ul className={styles.features}>
              <li>торти, капкейки, зефір</li>
              <li>десерти для кенді бару</li>
              <li>відеоуроки + рецепти</li>
              <li>план продажів через Instagram</li>
              <li>чат зі зворотнім звʼязком</li>
            </ul>

            <p className={styles.access}>
              Доступ: <strong>3 місяці</strong>
            </p>

            <button className={styles.button}  onClick={() => handleCheckout("basic")}>Придбати курс</button>
          </div>

          {/* CARD 2 */}
          <div className={`${styles.card} ${styles.proCard}`}>
            <span className={styles.recommended}>РОЗШИРЕНИЙ ФОРМАТ</span>

            <h3 className={styles.planName}>
              <span className={styles.planType}>Онлайн-школа</span>
              <br />
              <span className={styles.planTitle}>«Кондитер PRO»</span>
            </h3>

            <p className={styles.price}>
              98 <span>USD</span>
            </p>

            <ul className={styles.features}>
              <li>повна бібліотека десертів</li>
              <li>мусові десерти, макаронс, чізкейки</li>
              <li>уроки декору тортів</li>
              <li>щомісяця нові відеоуроки</li>
              <li>PDF рецептурники та гайди</li>
            </ul>

            <p className={styles.access}>
              Доступ: <strong>довічний</strong>
            </p>

            <button className={styles.proButton} onClick={() => handleCheckout("pro")}>
              Приєднатись до онлайн-школи
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
