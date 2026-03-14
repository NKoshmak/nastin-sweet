/** @format */

import { useState } from "react";
import styles from "./faqsection.module.css";
import { faqData } from "./faqData.js";
import ToggleIcon from "@/components/ui/ToggleIcon";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={`section ${styles.faqSection}`}>
      <div className="container">
        <div className="divider"></div>

        <div className={styles.grid}>
          <div className={styles.left}>
            <span className="badge">FAQ</span>
            <h2 className="title">Відповіді на найважливіші запитання</h2>
          </div>

          <div className={styles.right}>
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`${styles.item} ${
                  activeIndex === index ? styles.open : ""
                }`}
              >
                <button
                  className={styles.question}
                  onClick={() => toggle(index)}
                >
                  <span>{item.question}</span>
                 <ToggleIcon open={activeIndex === index} />
                </button>

                {activeIndex === index && (
                  <p className={styles.answer}>{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
