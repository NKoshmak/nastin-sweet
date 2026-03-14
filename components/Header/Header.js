/** @format */

import Link from "next/link";
// import NavDropdown from "../NavDropdown/NavDropdown";
import { useState, useEffect } from "react";
import styles from "./header.module.css";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const [navOpen, setNavOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [navOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setNavOpen(false);
    };

    if (navOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [navOpen]);

  const NavLink = ({ href, children }) => (
    <Link
      href={href}
      className={`${styles.link} ${
        router.pathname === href ? styles.active : ""
      }`}
      onClick={() => setNavOpen(false)}
    >
      {children}
    </Link>
  );

  return (
    <header className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        Nastin Sweet
      </Link>

      <button
        type="button"
        className={`${styles.burger} ${navOpen ? styles.burgerActive : ""}`}
        onClick={() => setNavOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        className={`${styles.navLinks} ${navOpen ? styles.navLinksOpen : ""}`}
      >
        <NavLink href="/">Home</NavLink>
         <NavLink href="/gallery">Gallery</NavLink>
{/* 
        <div className={styles.desktopOnly}>
          <NavDropdown />
        </div> */}

        {/* <div className={styles.mobileDropdown}>
          <button
            className={styles.mobileDropdownToggle}
            onClick={() => setProductsOpen((prev) => !prev)}
          >
            Products
          </button>

          <div
            className={`${styles.mobileDropdownMenu} ${
              productsOpen ? styles.mobileDropdownOpen : ""
            }`}
          >
            <Link href="/cakes" onClick={() => setNavOpen(false)}>
              Cakes
            </Link>
            <Link href="/candy_bars" onClick={() => setNavOpen(false)}>
              Candy Bars
            </Link>
            <Link href="/desserts" onClick={() => setNavOpen(false)}>
              Desserts
            </Link>
          </div>
        </div> */}

        <NavLink href="/menu">Menu</NavLink>
        <NavLink href="/courses">Courses</NavLink>
        <NavLink href="/order">Order</NavLink>
      </nav>
    </header>
  );
}
