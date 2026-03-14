/** @format */

import { useRouter } from "next/router";
import styles from "@/styles/course.module.css";
import Image from "next/image";
import Link from "next/link";
import { handleCheckout } from "@/utils/checkout";

const coursePrograms = {
  "deserty-z-nulya": {
    title: "Десерти з нуля",
    modules: [
      {
        title: "МОДУЛЬ 1. Підготовка — це фундамент успішного старту",
        items: [
          "Відео - Секрети успіху,в кондитерській справі ",
          "Відео - Оптимальний набір інструментів для старту",
        ],
        bonuses: [
          "Гайд: Санітарія та безпечна робота на кухні",
          "Список необхідних інструментів",
          "Instagram гайд",
        ],
        image: "/images/courses/nastya.JPG",
      },
      {
        title: "МОДУЛЬ 2. База кондитера — Бісквітні торти",
        items: [
          "Відео з покроковим приготуванням бісквіту, конфі, крему, збіркою торта та декором",
        ],
        bonuses: [
          "Рецептурник торта Полунична насолода",
          "Кейк-конструктор: рецепти ванільного, шоколадного бісквіту…",
          "Таблиця розрахунку собівартості",
        ],
        image: "/images/courses/mod2_1.JPG",
      },
      {
        title: "МОДУЛЬ 3. Капкейки, що продаються!",
        items: ["Відео приготування: ягідних капкейків, крему, та декорування"],
        bonuses: [
          "Рецепти капкейків (ванільні, ягідні, шоколадні, червоний вельвет)",
          "Поради про продажах в інстаграм, як зробити так, щоб вони гарно продавалися на всі свята",
        ],
        image: "/images/capcake1.jpg",
      },
      {
        title: "МОДУЛЬ 4. Десерти у стаканчиках — база для кендібарів",
        items: [
          "Відео приготування Тірамісу",
          "Відео приготування Панакота",
          "Відео приготування Трайфли",
        ],
        bonuses: [
          "Рецепти тірамісу, панакоти та трайфлів + 10 смакових поєднань для твоїх десертів в стаканчиках",
          "Чек лист по продажах в інстаграм",
        ],
        image: "/images/candy_bar1.jpg",
      },
      {
        title: "МОДУЛЬ 5. Зефір — найвигідніший десерт для заробітку",
        items: ["Відео приготування ідеального яблучного зефіру"],
        bonuses: [
          "Рецепт яблучного, ягідного  та зефіру Мохіто",
          "Чек лист по продажах",
        ],
        image: "/images/menu/marshmallow.png",
      },
    ],
  },

  konditer_pro: {
    title: "Кондитер ПРО",
    modules: [
      {
        title: "МОДУЛЬ 1. Чізкейки",
        items: [
          "Урок . Лимонний чізкейк",
          "Приготування основи",
          "Приготування чізкейку",
        ],
        bonuses: [
          "PDF Класичний чізкейк",
          "шоколадно -карамельний чізкейк",
          " ягідний чізкейк",
          "мега карамельний",
        ],
        image: "/images/biznes-module1.png",
      },
      {
        title: "МОДУЛЬ 2. Складні торти з цікавими смаками",
        items: [
          "Урок. Фісташка-малина з чізкейком",
          "Приготування фісташкового бісквіта",
          "Малиновий прошарок",
          "Чізкейковий шар з малиною",
          "Збірка і стабілізація торта",
          "Стійкий ганаш для обмазки з какао маслом",
        ],
        bonuses: [
          "PDF шоколад -маракуя",
          "лісові ягоди(ягідний бісквіт, ягідний чізкейк, крем, ягідне конфі)",
        ],
        image: "/images/biznes-module1.png",
      },
      {
        title: "МОДУЛЬ 3. Бенто-торти (трендові мініформати)",
        items: [
          "Урок.  Бенто: кава-горіх",
          "Рецепт кавового бісквіта",
          "Kавово шоколадний крем",
          "Карамель з горіхом",
        ],
        bonuses: [
          "PDF  бенто манго-маракуя",
          "червоний вельвет",
          "бенто фісташковий",
          "рафаелло",
          "з  карамелізованим бананом",
        ],
        image: "/images/menu/bento2.png",
      },
      {
        title: "МОДУЛЬ 4. Декор і оформлення",
        items: [
          "Урок 1.  Малюнки на бенто-тортах",
          "Як підготувати макет малюнка",
          "Як переносити малюнки на торт",
          "Практика з простими елементами",
          "Урок 2. Вафельний декор",
          "Робота з вафельними метеликами, квітами, пірїнки",
          "Як вирізати, обробити і закріпити на торті",
          "Урок 3. Мастичний декор",
          "трендовий бант",
          "Урок 4. Трендовий кремовий декор",
          "робота з великою насадкою",
          "правильне кріплення квітів",
          "Урок 5.  Робота з рисовим папером",
          "створеення рисових хвиль",
        ],
        bonuses: "",
        image: "/images/courses/mod2_1.JPG",
      },
      {
        title: "МОДУЛЬ 4. Бонусний модуль",
        items: [
          "Бонус-урок. Чізкейки-ескімо",
          "Основа для ескімо",
          "Стабільна глазур/шоколад",
          "Оформлення, зберігання, подача",
        ],
        bonuses: [
          "PDF Чізкейк з голубікою",
          "чізкейк малиною",
          "чізкейк з манго",
        ],
        image: "/images/biznes-module1.png",
      },
      // more modules...
    ],
  },
};

const handleBuy = async (courseId) => {
  const res = await fetch("/api/create-checkout-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ courseId }),
  });

  const data = await res.json();
  if (data.url) {
    window.location.href = data.url;
  }
};

export default function CourseDetails() {
  const { query } = useRouter();
  const course = coursePrograms[query.slug];

  if (!course) return <p>Курс не знайдено</p>;

  return (
    <section className={styles.course}>
      <h1 className={styles.courseTitle}>{course.title}</h1>
      {course.modules.map((mod, index) => (
        <div key={index} className={styles.module}>
          <Image
            src={mod.image}
            alt={mod.title}
            width={200}
            height={200}
            className={styles.moduleImage}
          />
          <h2>{mod.title}</h2>
          <ul>
            {mod.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          {Array.isArray(mod.bonuses) && mod.bonuses.length > 0 && (
            <div className={styles.bonusBlock}>
              <strong>ДОДАТОК:</strong>
              <ul>
                {mod.bonuses.map((bonus, i) => (
                  <li key={i}>{bonus}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
      <div className={styles.courseButtons}>
        <Link href="/courses" className="btn btn-primary">
          Назад до курсів
        </Link>
        <button className="btn btn-primary" onClick={handleCheckout}>
          Отримати доступ
        </button>
      </div>
    </section>
  );
}
