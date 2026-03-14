/** @format */
"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import cakeData from "../public/data/cakeData.js";
import dessertsData from "../public/data/dessertsData.js";
import candyBarData from "../public/data/candyBarsData.js";
import Image from "next/image";
import styles from "../styles/gallery.module.css";
import TextButton from "@/components/TextButton/TextButton.js";

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (category) {
      setFilter(category);
    }
  }, [category]);

  // Об’єднані дані
  const allItems = [...cakeData, ...dessertsData, ...candyBarData];

  // Фільтрація
  const filteredItems =
    filter === "all"
      ? allItems
      : allItems.filter((item) => item.category === filter);

  return (
    <main className={styles.page}>
      <div className={styles.layout}>
        {/* ==== NAVIGATION ==== */}
        <aside className={styles.sidebar}>
          <button
            onClick={() => setFilter("all")}
            className={filter === "all" ? styles.active : ""}
          >
            All
          </button>
          <button
            onClick={() => setFilter("cake")}
            className={filter === "cake" ? styles.active : ""}
          >
            Cakes
          </button>
          <button
            onClick={() => setFilter("dessert")}
            className={filter === "dessert" ? styles.active : ""}
          >
            Desserts
          </button>
          <button
            onClick={() => setFilter("candy-bar")}
            className={filter === "candy-bar" ? styles.active : ""}
          >
            Candy Bars
          </button>
        </aside>

        {/* ==== GRID ==== */}
        <div className={styles.galleryContainer}>
          <div className={styles.grid}>
            {filteredItems.map((item) => (
              <div
                key={item.src || item.video}
                className={`${styles.card} ${
                  item.mediaType === "video" ? styles.videoCard : ""
                }`}
                onClick={() => setSelected(item)}
              >
                {item.mediaType === "video" ? (
                  <video
                    src={item.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.video}
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={500}
                    height={500}
                    className={styles.image}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ==== MODAL ==== */}
      {selected && (
        <div className={styles.modal} onClick={() => setSelected(null)}>
          <div
            className={styles.modalBrand}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.close} onClick={() => setSelected(null)}>
              ×
            </button>

            {/* MEDIA */}
            <div className={styles.mediaBrand}>
              {selected.mediaType === "video" ? (
                <video
                  src={selected.video}
                  controls
                  className={styles.mediaImg}
                />
              ) : (
                <Image
                  src={selected.src}
                  alt={selected.name}
                  fill
                  className={styles.mediaImg}
                />
              )}
            </div>

            {/* INFO */}
            <div className={styles.infoBrand}>
              <h2 className={styles.nameBrand}>{selected.name}</h2>

              {selected.price && (
                <p className={styles.line}>
                  <span>Price:</span>{" "}
                  {Array.isArray(selected.price)
                    ? selected.price.join(", ")
                    : selected.price}
                </p>
              )}

              {selected.size && (
                <p className={styles.line}>
                  <span>Size:</span>{" "}
                  {Array.isArray(selected.size)
                    ? selected.size.join(", ")
                    : selected.size}
                </p>
              )}

              {selected.weight && (
                <p className={styles.line}>
                  <span>Weight:</span> {selected.weight}
                </p>
              )}

              {selected.decorations && (
                <p className={styles.decorBrand}>
                  Decorations are charged separately.
                </p>
              )}

              <div className={styles.actions}>
                <TextButton size="small" href="/menu#fillings">
                  See Available Fillings
                </TextButton>

                <TextButton
                  size="small"
                  href={`/order?type=${selected.category}`}
                >
                  Order This
                </TextButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
