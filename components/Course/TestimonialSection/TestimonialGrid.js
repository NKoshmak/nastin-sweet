import { testimonials } from "./testimonialsData";
import TestimonialCard from "./TestimonialCard";
import styles from "./testimonials.module.css";

export default function TestimonialGrid() {
  return (
    <section className="section">
      <div className="container">
         <div className="divider"></div>

        <div className="headerBlock">
          <span className="badge">Відгуки</span>
          <h2 className="title">Що кажуть учениці</h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`${styles.gridItem} ${
                index === 1 || index === 4 ? styles.middle : ""
              }`}
            >
              <TestimonialCard text={item.text} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}