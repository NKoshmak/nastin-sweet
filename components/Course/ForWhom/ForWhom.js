/** @format */

// components/ForWhom.jsx
import WhiskIcon from "@/components/Icons/Cupcake";
import styles from "./forwhom.module.css";
import BoxIcon from "@/components/Icons/Box";
import RecipeBook from "@/components/Icons/RecipeBook";

export default function ForWhom() {
  const items = [
    {
      badge: "Для початківців",
      title: "Опaнyй базові навички у кондитерстві",
      text: "Цей курс підходить тобі, навіть якщо ти ніколи не працювала з десертами.",
      icon: <WhiskIcon />,
    },
    {
      badge: "Для тих, хто хоче заробляти",
      title: "Перетвори хобі на прибуткову справу",
      text: "Навчишся створювати десерти, які можна продавати та формувати власний бренд.",
      icon: <BoxIcon />,
    },
    {
      badge: "Для майбутніх викладачів",
      title: "Створи свої рецепти і онлайн-школу",
      text: "Отримаєш структуру й навички, щоб будувати онлайн-проєкти та продавати свої знання.",
      icon: <RecipeBook />,
    },
  ];

  return (
    <section className="section">
      <div className="container">
         <div className="divider"></div>
        <div className="headerBlock">
          <span className="badge">Для кого цей курс</span>
          <h2 className="title">Цей курс створений саме для тебе</h2>
        </div>

        <div className={styles.cards}>
          {items.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
              <span className={styles.cardBadge}>{item.badge}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
