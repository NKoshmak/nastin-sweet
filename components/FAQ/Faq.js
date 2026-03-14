/** @format */

"use client";

import { useState } from "react";
import styles from "./faq.module.css";
import ToggleIcon from "../../components/ui/ToggleIcon";

export default function FAQ() {
  const faqs = [
    {
      q: "How far in advance should I place my order?",
      a: "Please place your order at least 5–7 days in advance to ensure availability. For larger or custom cakes, earlier booking is recommended.",
    },

    {
      q: "Do you offer delivery?",
      a: "Yes, delivery is available within Calgary and is arranged through Uber at the customer's expense. Pickup in NW Calgary is also available.",
    },

    {
      q: "Can I customize my cake?",
      a: "Yes! Cakes can be customized with different colors, decorations, and themes. Please include your inspiration and details when submitting the order form.",
    },

    {
      q: "Can I make changes to my order after placing it?",
      a: "Please make sure all details are correct before submitting your order. Changes after confirmation may not always be possible and can incur additional administrative fees.",
    },

    {
      q: "How do I confirm my order?",
      a: "Full payment is required to secure your order and reserve your date.",
    },

    {
      q: "Do you offer refunds?",
      a: "Due to the custom nature of our cakes and desserts, all orders are final once confirmed and paid.",
    },
  ];

  const [open, setOpen] = useState(null);

  return (
    <section className={`section ${styles.faqSection}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="badge">Good to know</span>
          <h2 className="title">FAQ</h2>
        </div>

        <div className={styles.wrapper}>
          {faqs.map((item, i) => (
            <div key={i} className={styles.item}>
              <button
                className={styles.question}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{item.q}</span>
                <ToggleIcon open={open === i} />
              </button>

              {open === i && <p className={styles.answer}>{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
