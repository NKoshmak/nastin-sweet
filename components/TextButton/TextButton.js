/** @format */

"use client";

import Link from "next/link";
import styles from "./TextButton.module.css";

export default function TextButton({
  children,
  href,
  variant = "default",
  size = "default",
  showArrow = true,
  className = "",
  ...props
}) {
  const isExternal = href?.startsWith("http");

  const content = (
    <>
      <span>{children}</span>

      {showArrow && (
        <svg
          className={styles.arrow}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4 12H18M18 12L12 6M18 12L12 18"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );

  if (href) {
    // 🔹 External link (Telegram, Stripe etc.)
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
        >
          {content}
        </a>
      );
    }

    // 🔹 Internal link
    return (
      <Link
        href={href}
        className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
}
