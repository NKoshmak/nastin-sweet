/** @format */

"use client";

import { useEffect } from "react";
import CakeGallery from "/components/CakeGallery";
import AOS from "aos";
import "aos/dist/aos.css";
import dessertsData from "../public/data/dessertsData";
import Link from "next/link";

export default function CakesPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <section className="video-hero">
        <video autoPlay muted loop playsInline>
          <source src="/images/dessert.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          <h1>Our Signature Desserts & Sweet Boxes</h1>
          <p>Crafted with elegance, precision, and love</p>
        </div>
      </section>

      <section className="cake-gallery">
        <h2>Explore the Collection</h2>
        <div className="section-divider" data-aos="zoom-in"></div>

        <CakeGallery data={dessertsData} />

        <div className="centered">
          <Link href="/order" className="btn-explore">
            Order Desserts
          </Link>
        </div>
        <div className="section-divider" data-aos="zoom-in"></div>
      </section>
    </>
  );
}
