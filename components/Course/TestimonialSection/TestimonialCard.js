import styles from "./testimonials.module.css";

export default function TestimonialCard({ text }) {
  return (
    <div className={styles.card}>

      <div className={styles.stars}>
        ★★★★★
      </div>

      <p className={styles.text}>
        “{text}”
      </p>

    </div>
  );
}