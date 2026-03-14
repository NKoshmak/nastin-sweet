/** @format */

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
import { useTranslation } from "../translations/provider.js";

import Hero from "../components/Hero/Hero.js";
import Marquee from "../components/Marquee/Marquee.js";
import CategorySection from '../components/categories/CategoriesSection.js';
import AboutSection from "../components/About/AboutSection";
import ReviewsSection from "@/components/ReviewSection/ReviewGrid.js";
import InstagramSection from '../components/Instagram/InstagramSection.js';
import FAQ from "@/components/FAQ/Faq.js";


export default function Home() {
  const { translations, changeLanguage } = useTranslation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({ duration: 1000, easing: "ease-in-out", once: true });

      const backToTop = document.querySelector(".back-to-top");
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          backToTop?.classList.add("show");
        } else {
          backToTop?.classList.remove("show");
        }
      });
    }
  }, []);

  return (
    <main>
      <Hero title={"Sweet Artistry"} subtitle={"Layered to Perfection"}/>
      <Marquee />
      <AboutSection />    
      <CategorySection />
      
      <ReviewsSection />
      <InstagramSection />
      <FAQ />


      {/* FEATURES section */}
      {/* <section class="section features">
        <div className="container">
          <div class="features__grid">
            <div class="feature">
              <Image
                src="/images/icons/organic.png"
                alt="Organic"
                width={60}
                height={60}
              />
              <h3>High Quality ingredients</h3>
              <p>Only fresh, natural ingredients for unforgettable taste.</p>
            </div>
            <div class="feature">
              <Image
                src="/images/icons/whisk-and-bowl.png"
                alt="Design"
                width={60}
                height={60}
              />
              <h3>Exclusive Design</h3>
              <p>Each cake is a one-of-a-kind piece of edible art.</p>
            </div>
            <div class="feature">
              <Image
                src="/images/icons/baking.png"
                alt="Custom"
                width={60}
                height={60}
              />
              <h3>Made to Order</h3>
              <p>Personalized just for your event, down to every detail.</p>
            </div>
            <div class="feature">
              <Image
                src="/images/icons/on-time.png"
                alt="Delivery"
                width={60}
                height={60}
              />
              <h3>Local Delivery</h3>
              <p>Timely delivery with care so your cake arrives perfect.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* <div class="section-divider-svg reverse" data-aos="zoom-in">
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#f9d7dd"
            d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"
          ></path>
        </svg>
      </div> */}

      {/* ABOUT section */}
      {/* <section id="about" class="about">
        <div class="about-container">
          <div class="about-image">
            <Image
              src="/images/nastya3.JPG"
              alt="Baker at work"
              width={500}
              height={300}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div class="about-text">
            <h2>Meet the Maker</h2>
            <p>
              Hi, I&apos;m Nastin — the hands and heart behind Sweet Artistry.
              Every cake I create is a story told in buttercream, berries, and
              delicate textures. What began as a passion project in my home
              kitchen has grown into a full expression of edible elegance.
            </p>
            <p>
              Whether it’s for a birthday, wedding, or cozy café, I believe
              desserts should be both beautiful and unforgettable.
            </p>
          </div>
        </div>
      </section> */}

      {/* <div class="section-divider" data-aos="zoom-in"></div> */}

      {/* PRODUCTS section */}
      {/* <section class="product-section" data-aos="fade-up" data-aos-delay="100">
        <h2 class="section-title">Cakes</h2>
        <p class="section-subtitle">
          Custom cakes for weddings, birthdays, and all of life’s sweetest
          moments.
        </p>

        <div class="product-gallery">
          <Image
            src="/images/cake1.jpg"
            alt="Cake 1"
            data-aos="zoom-in"
            width={320}
            height={400}
          />
          <Image
            src="/images/cake2.JPG"
            alt="Cake 2"
            data-aos="zoom-in"
            data-aos-delay="150"
            width={320}
            height={400}
          />
          <Image
            src="/images/cake3.JPG"
            alt="Cake 3"
            data-aos="zoom-in"
            data-aos-delay="300"
            width={320}
            height={400}
          />
        </div>

        <Link href="/cakes" class="btn-order">
          Explore Cakes
        </Link>
      </section>

      <section class="product-section" data-aos="fade-up" data-aos-delay="250">
        <h2 class="section-title">Candy Bars</h2>
        <p class="section-subtitle">
          Magical displays for weddings, parties, and baby showers — styled to
          impress your guests.
        </p>

        <div class="product-gallery">
          <Image
            src="/images/candy_bar2.JPG"
            alt="Candy Bar 1"
            data-aos="zoom-in"
            width={320}
            height={400}
          />
          <Image
            src="/images/candy_bar1.JPG"
            alt="Candy Bar 2"
            data-aos="zoom-in"
            data-aos-delay="150"
            width={320}
            height={400}
          />
          <Image
            src="/images/candy_bar3.JPG"
            alt="Candy Bar 3"
            data-aos="zoom-in"
            data-aos-delay="300"
            width={320}
            height={400}
          />
        </div>

        <Link href="/candy_bars" class="btn-order">
          Explore Candy Bars
        </Link>
      </section>

      <section class="product-section" data-aos="fade-up" data-aos-delay="350">
        <h2 class="section-title">Desserts</h2>
        <p class="section-subtitle">
          A curated selection of mini treats — perfect for gifting, events, or a
          little personal indulgence.
        </p>

        <div class="product-gallery">
          <Image
            src="/images/capcake3.JPG"
            alt="Dessert Box 1"
            data-aos="zoom-in"
            width={320}
            height={400}
          />
          <Image
            src="/images/capcake2.jpg"
            alt="Dessert Box 2"
            data-aos="zoom-in"
            data-aos-delay="150"
            width={320}
            height={400}
          />
          <Image
            src="/images/capcake1.jpg"
            alt="Dessert Box 3"
            data-aos="zoom-in"
            data-aos-delay="300"
            width={320}
            height={400}
          />
        </div>

        <Link href="/desserts" class="btn-order">
          Explore Desserts & Sweet Boxes
        </Link>
      </section> */}

      {/* <div class="section-divider" data-aos="zoom-in"></div> */}

      {/* <section class="testimonials" id="testimonials">
        <div class="container" data-aos="fade-up">
          <h2 class="section-title">Client Love</h2>
          <div class="testimonial-grid">
            <div class="testimonial">
              <p>
                “The cake was absolutely stunning and tasted even better than it
                looked. Thank you for making our day extra sweet!”
              </p>
              <span>- Amanda L.</span>
            </div>
            <div class="testimonial">
              <p>
                “Elegant, fresh, and delicious! Everyone at the baby shower
                raved about the dessert table. Truly beautiful work.”
              </p>
              <span>- Sarah W.</span>
            </div>
            <div class="testimonial">
              <p>
                “I’ve never had anything like it — artistry in every bite is
                right. Highly recommended!”
              </p>
              <span>- Julia M.</span>
            </div>
          </div>
        </div>
      </section> */}

      {/* <div class="section-divider-svg" data-aos="zoom-in">
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#f9d7dd"
            d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"
          ></path>
        </svg>
      </div> */}

      {/* <section class="instagram" id="instagram">
        <div class="container" data-aos="fade-up">
          <h2 class="section-title">Follow on Instagram</h2>
          <div class="instagram-grid">
            <Image
              class="instagram-img"
              src="/images/instagram/4.png"
              alt="Instagram 1"
              width={300}
              height={200}
            />
            <Image
              class="instagram-img"
              src="/images/instagram/11.png"
              alt="Instagram 2"
              width={300}
              height={200}
            />
            <Image
              class="instagram-img"
              src="/images/instagram/20 2.jpeg"
              alt="Instagram 3"
              width={300}
              height={200}
            />
            <Image
              class="instagram-img"
              src="/images/instagram/25.jpeg"
              alt="Instagram 4"
              width={300}
              height={200}
            />
          </div>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            class="btn-explore"
          >
            @nastin.sweet
          </a>
        </div>
      </section> */}

      {/* <section class="contact" id="contact">
        <div class="container" data-aos="fade-up">
          <h2 class="section-title">Get in Touch</h2>
          <p>Email: hello@sweetartistry.com</p>
          <p>Located in Calgary · Delivery available within Calgary</p>
          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20094.373769066865!2d-114.094232!3d51.044733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371700c3bc58d09%3A0x6f92a3c0dc6c74cf!2sCalgary%2C%20AB!5e0!3m2!1sen!2sca!4v1716845000000"
              width="50%"
              height="400"
              style={{ border: "0", borderRadius: "12px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section> */}

      {/* <div class="section-divider-svg reverse" data-aos="zoom-in">
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#f9d7dd"
            d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"
          ></path>
        </svg>
      </div> */}
     
    </main>
  );
}


