"use client";

import styles from "./Marquee.module.css";

const items = [
  "High Quality Ingredients",
  "Exclusive Design",
  "Made to Order",
  "Local Delivery",
];

export default function Marquee() {
  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        {items.concat(items).map((text, index) => (
          <span key={index} className={styles.item}>
            {text}
            {/* <span className={styles.dot}> · </span> */}
          </span>
        ))}
      </div>
    </div>
  );
}