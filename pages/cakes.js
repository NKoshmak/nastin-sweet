

// "use client";

// import { useEffect } from "react";
// import CakeGallery from "/components/CakeGallery";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import cakeData from "../public/data/cakeData";
// import Link from "next/link.js";

// export default function CakesPage() {
//   useEffect(() => {
 
//     const filterButtons = document.querySelectorAll(".filter-btn");
//     const filterItems = document.querySelectorAll(".filter-item");

//     filterButtons.forEach((btn) => {
//       btn.addEventListener("click", () => {
//         filterButtons.forEach((b) => b.classList.remove("active"));
//         btn.classList.add("active");
//         const filter = btn.getAttribute("data-filter");

//         filterItems.forEach((item) => {
//           if (filter === "all" || item.classList.contains(filter)) {
//             item.style.display = "block";
//           } else {
//             item.style.display = "none";
//           }
//         });
//       });
//     });
//   }, []);

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <>
//       <section className="video-hero">
//         <video autoPlay muted loop playsInline>
//           <source src="/images/cake.MOV" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="video-overlay">
//           <h1>Our Signature Cakes</h1>
//           <p>Crafted with elegance, precision, and love</p>
//         </div>
//       </section>

//       <section className="cake-gallery">
//         <h2>Explore the Collection</h2>
//         <div className="section-divider" data-aos="zoom-in"></div>

//         <div className="cake-filters">
//           <button className="filter-btn active" data-filter="all">
//             All
//           </button>
//           <button className="filter-btn" data-filter="birthday">
//             Birthday
//           </button>
//           <button className="filter-btn" data-filter="wedding">
//             Wedding
//           </button>
//           <button className="filter-btn" data-filter="minimal">
//             Minimal
//           </button>
//         </div>

//         <CakeGallery data={cakeData} />

//         <div className="centered">
//           <Link href="/order" className="btn-explore">
//             Order Cake
//           </Link>
//         </div>
//         <div className="section-divider" data-aos="zoom-in"></div>
//       </section>
//     </>
//   );
// }
