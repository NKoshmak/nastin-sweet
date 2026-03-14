/** @format */

"use client";

import CakeGallery from "/components/CakeGallery";
import AOS from "aos";
import "aos/dist/aos.css";
import candyBarsData from "../public/data/candyBarsData";
import { useEffect } from "react";
import Link from "next/link.js";

export default function CakesPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <section className="video-hero">
        <video autoPlay muted loop playsInline>
          <source src="/images/candy_bar.MOV" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          <h1>Our Signature Candy Bars</h1>
          <p>Crafted with elegance, precision, and love</p>
        </div>
      </section>

      <section className="cake-gallery">
        <h2>Explore the Collection</h2>
        <div className="section-divider" data-aos="zoom-in"></div>

        <CakeGallery data={candyBarsData} />

        <div className="centered">
          <Link href="/order" className="btn-explore">
            Order Candy Bar
          </Link>
        </div>
        <div className="section-divider" data-aos="zoom-in"></div>
      </section>
    </>
  );
}
