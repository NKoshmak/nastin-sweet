/** @format */

import Image from "next/image";
import styles from "./reviewsection.module.css";

export default function TestimonialCard({ text, name }) {
  return (
    <div className={styles.card}>
      <p className={styles.cardText}>“{text}”</p>

      <div className={styles.user}>
        {/* <Image
          src={img}
          alt={name}
          width={42}
          height={42}
          className={styles.avatar}
        /> */}
        <div className={styles.avatarInitials}>
          {name.split(" ").map((n) => (
            <span key={n}>{n[0]}.</span>
          ))}
        </div>
      </div>
    </div>
  );
}
