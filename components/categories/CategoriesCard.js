/** @format */

import Image from "next/image";
import styles from "./categories.module.css";
import Link from "next/link";
import TextButton from "../TextButton/TextButton";

export default function CategoryCard({ title, href, image, large }) {
  return (
    <Link href={href} className={`${styles.card} ${large ? styles.large : ""}`}>
      <Image
        src={image}
        alt={title}
        fill
        className={styles.image}
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      <div className={styles.overlay}>
        <h3>{title}</h3>
        <TextButton>Explore</TextButton>
      </div>
    </Link>
  );
}
