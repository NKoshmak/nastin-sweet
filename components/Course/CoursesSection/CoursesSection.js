/** @format */

import { useState } from "react";
import styles from "./courses.module.css";
import { courses } from "../../../public/data/coursesData.js";
import { pluralize } from "@/utils/declension";
import ToggleIcon from "@/components/ui/ToggleIcon";

export default function CourseSection() {
  const [activeCourseIndex, setActiveCourseIndex] = useState(0);

  const activeCourse = courses[activeCourseIndex];


  const totalLessons =
    activeCourse.modules?.reduce(
      (acc, module) => acc + module.lessons.length,
      0,
    ) || 0;

  const modulesWord = pluralize(
    activeCourse.modules.length,
    "модуль",
    "модулі",
    "модулів",
  );

  const lessonsWordTotal = pluralize(totalLessons, "урок", "уроки", "уроків");

  return (
    <section className="section" id="courses">
      <div className="container">
        <div className="divider"></div>

        <div className={styles.coursesSection}>
          <div className="headerBlock">
            <span className="badge">Програма</span>
            <h2 className="title">Обери свій формат навчання</h2>
          </div>

          {/* Tabs */}
          <div className={styles.tabs}>
            {courses.map((course, index) => (
              <button
                key={index}
                className={`${styles.tab} ${
                  activeCourseIndex === index ? styles.activeTab : ""
                }`}
                onClick={() => setActiveCourseIndex(index)}
              >
                {course.title}
              </button>
            ))}
          </div>

          <div className={styles.tabCard}>
            <div className={styles.layout}>
              {/* LEFT OVERVIEW */}
              <div className={styles.overview}>
                <ul className={styles.list}>
     
                  {activeCourse.features?.map((feature, i) => (
                    <li key={i}>
                      <span className={styles.label}>{feature}</span>
                    </li>
                  ))}
                </ul>

                {activeCourse.price && (
                   <p className={styles.price}>Ціна: {activeCourse.price}</p>
                )}

                {activeCourse.access && (
                  <p className={styles.note}>{activeCourse.access}</p>
                )}
              </div>

              {/* RIGHT ACCORDION */}
              <div className={styles.modules}>
                {activeCourse.modules.map((module, index) => (
                  <AccordionModule key={index} module={module} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AccordionModule({ module, index }) {
  const [open, setOpen] = useState(false);

  const lessonsWord = pluralize(
    module.lessons.length,
    "урок",
    "уроки",
    "уроків",
  );

  return (
    <div className={styles.moduleBox}>
      <div className={styles.moduleHeader} onClick={() => setOpen(!open)}>
        <div className={styles.left}>
          <div className={styles.moduleIndex}>
            {(index + 1).toString().padStart(2, "0")}
          </div>

          <div className={styles.textBlock}>
            <h4>{module.title}</h4>
            <span className={styles.lessonCount}>
              {module.lessons.length} {lessonsWord}
            </span>
          </div>
        </div>

         <ToggleIcon open={open} />
      </div>

      {open && (
        <div className={`${styles.moduleContent} ${open ? styles.open : ""}`}>
          <ul>
            {module.lessons.map((lesson, i) => (
              <li key={i}>{lesson}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
