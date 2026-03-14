/** @format */

"use client";
import styles from "./results.module.css";

export default function ResultsSection() {
  const items = [
    {
      title: "Отримаєш чітку систему роботи",
      text: "Повністю зрозумієш структуру створення десертів, підготовки, зберігання та організації процесу так, щоб працювати легко та без хаосу.",
      icon: <IconSystem />,
    },
    {
      title: "Створиш свої перші десерти",
      text: "Приготуєш базові торти, креми, бісквіти та десерти вже під час навчання. Зможеш адаптувати начинки під різні смаки клієнтів.",
      icon: <IconCake />,
    },
    {
      title: "Побудуєш стабільний результат",
      text: "Розберешся, як готувати якісно й передбачувано: однакова структура бісквіту, стабільні креми, чіткі рецепти та повторюваність.",
      icon: <IconStability />,
    },
    {
      title: "Зможеш заробляти на кондитерстві",
      text: "Дізнаєшся, як формувати меню, ціни, порції та як упевнено продавати свої десерти, навіть без досвіду роботи.",
      icon: <IconMoney />,
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="divider"></div>
        <div className="headerBlock">
          <span className="badge">РЕЗУЛЬТАТИ</span>
          <h2 className="title">Що ти отримаєш після навчання</h2>
        </div>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SVG ICONS ---------------- */

function IconSystem() {
  return (
    <svg width="48" height="48" viewBox="0 0 64 64">
      <rect
        x="18"
        y="26"
        width="28"
        height="18"
        rx="3"
        stroke="#c06a8d"
        strokeWidth="2"
        fill="none"
      />
      <path d="M18 32h28" stroke="#c06a8d" strokeWidth="2" />
      <path d="M32 26v18" stroke="#c06a8d" strokeWidth="2" />
      <path
        d="M24 23c2-3 4-3 6 0 2-3 4-3 6 0"
        stroke="#c06a8d"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCake() {
  return (
    <svg width="48" height="48" viewBox="0 0 64 64">
      <path d="M16 38h32v10H16z" stroke="#c06a8d" strokeWidth="2" fill="none" />
      <path
        d="M16 34c4 0 4-4 8-4s4 4 8 4 4-4 8-4 4 4 8 4"
        stroke="#c06a8d"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M32 22c2-3 2-5 0-8-3 4-3 6 0 8z"
        stroke="#c06a8d"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

function IconStability() {
  return (
    <svg width="48" height="48" viewBox="0 0 64 64">
      <path
        d="M16 42l10-12 10 8 12-16"
        stroke="#c06a8d"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="26" cy="30" r="3" fill="#c06a8d" />
      <circle cx="36" cy="38" r="3" fill="#c06a8d" />
      <circle cx="48" cy="26" r="3" fill="#c06a8d" />
    </svg>
  );
}

function IconMoney() {
  return (
    <svg width="48" height="48" viewBox="0 0 64 64">
      <rect
        x="14"
        y="24"
        width="36"
        height="22"
        rx="3"
        stroke="#c06a8d"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="32"
        cy="35"
        r="6"
        stroke="#c06a8d"
        strokeWidth="2"
        fill="none"
      />
      <path d="M32 29v12" stroke="#c06a8d" strokeWidth="2" />
    </svg>
  );
}
