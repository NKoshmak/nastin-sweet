/** @format */

import ReviewCard from "./ReviewCard";
import styles from "./reviewsection.module.css";
import Image from "next/image";

const testimonials = [
  {
    text: "Cakes like a true work of art! Some of my guests couldn’t believe they were actually edible 🔥",
    name: "Sofia Tsariv",
  },
  {
    text: "Thank you for this wonderful cake for our anniversary 👉 the taste was absolutely unmatched!",
    name: "Maria Shcherbyna",
  },
  {
    text: "Just wanted to say a huge thank you for the cake. We ordered from you for April 16th — it was unbelievably delicious 🥰",
    name: "Yulianna Zh",
  },
];

export default function TestimonialGrid() {
  return (
    <section className="section">
      <div className={styles.sectionAlt}>
        <div className={styles.content}>
          {/* LEFT SIDE */}
          <div className={styles.left}>
            <Image
              src="/images/icons/quote.svg"
              alt=""
              width={160}
              height={160}
              className={styles.quoteMark}
            />

            <h2 className={styles.title}>Clients Love</h2>
            <p className={styles.subtitle}>
              Real stories from happy customers.
            </p>
          </div>

          {/* RIGHT SIDE - 3 CARDS */}
          <div className={styles.right}>
            {testimonials.map((item, index) => (
              <ReviewCard key={index} text={item.text} name={item.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
