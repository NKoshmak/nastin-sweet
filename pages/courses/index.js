"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import CountdownTimer from "@/components/CountDownTimer";
import FAQAccordion from "@/components/FAQAccordion";
import styles from "../../styles/testimonials.module.css";

import { handleCheckout } from "@/utils/checkout";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CoursesPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bullet-icon", {
        scrollTrigger: {
          trigger: ".bullet",
          start: "top 85%",
        },
        y: 20,
        opacity: 0,
        scale: 0.6,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);

  return (
    <div className="courses-page">
      <Head>
        <title>Курси та Продукти</title>
      </Head>

      <section className="hero-section">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/images/courses/course.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Навчайся та заробляй на десертах</h1>
            <a href="#courses" className="btn btn-secondary btn-lg">
              Дивитись курси
            </a>
          </div>
        </div>
      </section>

      <section className="who-for-section">
        <h2 className="who-title">Цей курс для тебе, якщо ти :</h2>
        <ul className="who-list">
          <li>
            <span className="highlight">
              Хочеш працювати
              <br />
              на себе
            </span>{" "}
            та більше не залежати від когось
          </li>
          <li>
            Хочеш нарешті <span className="highlight">реалізуватися</span> і
            розкрити свій потенціал
          </li>
          <li>
            Готова перетворити хобі на{" "}
            <span className="highlight">прибуткову справу</span>
          </li>
          <li>
            Мрієш готувати стильні та смачні{" "}
            <span className="highlight">десерти з нуля</span>
          </li>
          <li>
            Мрієш в майбутньому{" "}
            <span className="highlight">продавати свої рецепти</span> і створити
            свою онлайн школу!
          </li>
        </ul>
      </section>

      <section className="guarantee-section">
        <div className="guarantee-container">
          <h2 className="guarantee-title">Гарантія</h2>
          <p className="guarantee-text">
            Якщо ти пройдеш курс, спробуєш зробити, але в тебе нічого не вийде —
            я поверну гроші.
            <br />
            Все чесно: або результат, або повернення.
          </p>
        </div>
      </section>

      <section className="course-process">
        <h2 className="section-title">Як буде проходити навчання?</h2>
        <div className="process-grid">
          <div className="process-step">
            <Image
              src="/images/icons/one.png"
              alt="Telegram lessons"
              width={40}
              height={40}
              className="step-image"
            />
            <p>
              Після оплати отримаєш доступ до навчальної платформи в Telegram з
              уроками. Уроки відкриваються поступово, щоб ти не пропустила
              жодного етапу, можна проходити в будь-який зручний час.
            </p>
          </div>
          <div className="process-step">
            <Image
              src="/images/icons/two.png"
              alt="Telegram lessons"
              width={40}
              height={40}
              className="step-image"
            />
            <p>
              Ти отримуєш доступ до закритої телеграм-групи, де зможеш ставити
              мені запитання
            </p>
          </div>
          <div className="process-step">
            <Image
              src="/images/icons/three.png"
              alt="Telegram lessons"
              width={40}
              height={40}
              className="step-image"
            />
            <p>
              Дивишся урок → готуєш → викладаєш свої результати в чат, отримуєш
              зворотній зв’язок від мене. <br />
              <strong>Доступ до курсу — 3 місяці</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="bonus-section">
        <h2 className="section-title">
          Приєднуйся до курсу сьогодні та отримай бонуси:
        </h2>
        <div className="bonus-card">
          <ul>
            <li>
              <Image
                src="/images/icons/push-pin.png"
                alt="Pin"
                width={28}
                height={28}
                className="pin-image"
              />
              Інстаграм — гайд по просуванню
            </li>
            <li>
              <Image
                src="/images/icons/push-pin.png"
                alt="Pin"
                width={28}
                height={28}
                className="pin-image"
              />
              Таблиця собівартості
            </li>
            <li>
              <Image
                src="/images/icons/push-pin.png"
                alt="Pin"
                width={28}
                height={28}
                className="pin-image"
              />
              Доступ до закритого ТГ каналу з секретними рецептами
            </li>
          </ul>
        </div>

        <div className="bonus-text">
          <p className="bonus-highlight">
            Ти відчуєш свою цінність і перетвориш своє хобі на реальний бізнес,
            який буде працювати на тебе!
          </p>
          <p className="bonus-description">
            Отримаєш чіткий <strong>план</strong>, найкращі{" "}
            <strong>рецепти</strong> і перевірену{" "}
            <strong>стратегію продажів</strong>
          </p>
        </div>
      </section>

      <section className="course-block" id="courses">
        <h2 className="course-title">Курси та Продукти</h2>
        <p className="course-subtitle">
          Оберіть свій шлях до десертного успіху
        </p>

        <div className="course-gallery">
          
          <div className="course-card">
            <div> <span className="badge">Популярний</span></div>
            <Image
              src="/images/cake2.jpg"
              alt="Десерти з нуля"
              width={300}
              height={300}
              className="course-image"
            />
            <h3>Десерти з нуля</h3>
            
            <div ref={containerRef}>
              <div class="bullet">
                <Image
                  src="/images/icons/star.png"
                  alt="star"
                  width={30}
                  height={30}
                  class="bullet-icon"
                />
                <p>Курс для новачків.</p>
              </div>

              <div class="bullet">
                <Image
                  class="bullet-icon"
                  src="/images/icons/star.png"
                  alt="star"
                  width={30}
                  height={30}
                />
                <p>
                  Навчися готувати красиві, смачні десерти з нуля без досвіду.
                </p>
              </div>

              <div class="bullet">
                <Image
                  src="/images/icons/star.png"
                  alt="star"
                  width={30}
                  height={30}
                  class="bullet-icon"
                />
                <p>
                  В одному курсі — найприбутковіші формати десертів: торти,
                  капкейки, зефір і різні десерти для кенді-бару. Від готування
                  до продажів через Instagram!
                </p>
              </div>
            </div>

            <p className="course-price">
              <span className="old-price">$99</span> →{" "}
              <span className="new-price">$15</span>
            </p>

            <div className="course-buttons">
              <Link href="/courses/deserty-z-nulya" className="btn btn-secondary">
                Детальніше
              </Link>
              <button className="btn btn-primary" onClick={handleCheckout}>
                Отримати доступ
              </button>
            </div>
          </div>

          <div className="course-card">
            <Image
              src="/images/candy_bar2.JPG"
              alt="Бізнес на десертах"
              width={300}
              height={300}
              className="course-image"
            />
            <h3>Кондитер ПРО</h3>
            <p>
              Як продавати, просувати, упаковувати та масштабувати солодкий
              бізнес з дому.
            </p>
            <div className="course-buttons">
              <Link href="/courses/konditer_pro" className="btn btn-secondary">
                Детальніше
              </Link>
              <button className="btn btn-primary" onClick={handleCheckout}>
                Отримати доступ
              </button>
            </div>
          </div>

          {/* <div className="course-card">
            <Image
              src="/images/recipe-book.jpg"
              alt="План-книга з рецептами"
              width={300}
              height={300}
              className="course-image"
            />
            <h3>План-книга з рецептами</h3>
            <p>
              Електронний гайд з авторськими рецептами для практики та
              натхнення.
            </p>
            <Link href="/course/recipe-book" className="btn-course">
              Переглянути
            </Link>
          </div> */}
        </div>
      </section>

      <section className="course-outcomes">
        <h2 className="section-title">Що ти отримаєш, пройшовши мій курс?</h2>
        <div className="outcome-list">
          <div className="outcome-card">
            Отримаєш чітку інструкцію, як реалізуватися в кондитерці і почати на
            цьому <span className="highlight">заробляти</span>
          </div>
          <div className="outcome-card">
            Ти зможеш <span className="highlight">створити перший торт</span> і
            кенді-бар вже під час навчання
          </div>
          <div className="outcome-card">
            Навчишся готувати торт з нуля та адаптувати начинки під різні смаки.
            Отримаєш по
            <span className="highlight"> 3 рецепти бісквітів</span>, конфі та
            кремів, з яких скомбінуєш
            <span className="highlight"> 15 видів начинок</span>
          </div>
          <div className="outcome-card">
            Приготуєш 3 найпопулярніші десерти для кенді бару та навчишся
            самостійно
            <span className="highlight">
              {" "}
              збільшувати своє десертне меню
            </span>{" "}
            та вдало їх продавати
          </div>
          <div className="outcome-card">
            Навчишся готувати <span className="highlight">ідеальний зефір</span>
            , який точно принесе тобі прибуток
          </div>
        </div>
      </section>

      <section className="carousel-section">
        <h2 className="section-title">Кадри з курсу</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1.2}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="carousel-swiper"
        >
          {[
            "/images/courses/carousel/1.png",
            "/images/courses/carousel/2.png",
            "/images/courses/carousel/3.png",
            "/images/courses/carousel/4.png",
            "/images/courses/carousel/5.png",
            "/images/courses/carousel/6.png",
          ].map((src, index) => (
            <SwiperSlide key={index}>
              <div className="carousel-slide">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  width={250}
                  height={200}
                  className="carousel-image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="testimonials-section" id="testimonials">
        <h2 className="section-title">Відгуки моїх учениць</h2>
        <div className={styles.testimonials}>
          <div className={styles.card}>
            <p>
              “Дуже цікаві і зрозуміло викладені уроки. Я ще не додивилася до
              кінця ті уроки, що прийшли сьогодні, але початкові мені дуже
              сподобались. Дякую, що робите таку справу ❤️”
            </p>
          </div>
          <div className={styles.card}>
            <p>
              “Дуже цікавий курс, який дає дещо більше ніж інші курси, тому що
              тут є про продажі, про оформлення та просування сторінки. Мені
              особисто дуже цікава тема зефіру та кенді бару. А також цікава
              тема оформлення бізнесу як в Україні, так і за кордоном.”
            </p>
          </div>
          <div className={styles.card}>
            <p>
              “Я лише на старті створення свого маленького бізнесу. Надзвичайно
              рада, що знайшла тебе та твій курс. Для мене було море нової та
              цікавої інформації поданої максимально доступно. Запиши мене будь
              ласка до першої хвилі нового курсу, хочу розвиватись з тобою і
              надалі.”
            </p>
          </div>
        </div>
      </section>

      <section class="discount-offer">
        <div class="offer-container">
          <h2>
            Приєднуйтесь до курсу вже зараз за{" "}
            <span class="highlight">спеціальною ціною</span> всього за
          </h2>
          <div class="price-block">
            <p class="new-price">15$</p>
            <p class="old-price">99$</p>
          </div>

          <p class="countdown-label">До кінця акції:</p>
          <CountdownTimer />

          <p class="subtext">
            Цей курс — твій швидкий старт у{" "}
            <span class="bold-pink">світ кондитерського бізнесу</span> — лише
            перевірені рішення, які працюють.
          </p>

          <button className="cta-button" onClick={handleCheckout}>
            Тисни сюди і отримай курс зі знижкою
          </button>
        </div>
      </section>

      <FAQAccordion />
    </div>
  );
}
