/** @format */
import Image from "next/image";
import Link from "next/link";
import styles from "./instagram.module.css";

export default function InstagramCard({ src, alt }) {
  return (
    <Link
      href="https://www.instagram.com/nastin.sweet"
      target="_blank"
      className={styles.card}
    >
      <Image src={src} alt={alt} fill className={styles.image} />

      <div className={styles.overlay}>
        <Image
          src="/images/icons/insta.svg"
          alt="Instagram icon"
          width={90}
          height={90}
          className={styles.icon}
        />
      </div>
    </Link>
  );
}
