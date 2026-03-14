/** @format */

import styles from "./categories.module.css";
import CategoryCard from "./CategoriesCard";

export default function CategoriesSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="headerBlock">
          <span className="badge">Our Selection</span>
          <h2 className="title">Signature Desserts</h2>
        </div>

        <div className={styles.grid}>
          <CategoryCard
            title="Cakes"
            href="/gallery?category=cake"
            image="/images/cake2-3.jpg"
            large
          />

          <CategoryCard
            title="Desserts"
            href="/gallery?category=desserts"
            image="/images/capcake2-3.jpg"
          />

          <CategoryCard
            title="Candy Bar"
            href="/gallery?category=candy bar"
            image="/images/candy_bar3-2.JPG"
          />
        </div>
      </div>
    </section>
  );
}
