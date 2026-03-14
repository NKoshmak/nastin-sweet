/** @format */

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./dropdown.module.css";
import { useRouter } from "next/router";

export default function NavDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={styles.dropdown}>
      <button
        className={`${styles.toggle} ${isOpen ? styles.toggleActive : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Gallery ▾
      </button>

      <div className={`${styles.menu} ${isOpen ? styles.show : ""}`}>
        <Link href="/cakes" className={styles.link}>
          Cakes
        </Link>
        <Link href="/candy_bars" className={styles.link}>
          Candy Bars
        </Link>
        <Link href="/desserts" className={styles.link}>
          Desserts & Sweet Boxes
        </Link>
      </div>
    </div>
  );
}
