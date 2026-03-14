/** @format */

import styles from "../styles/menu.module.css";
import menu from "../public/data/menu.json";
import Image from "next/image";
import fillings from "../public/data/fillings.json";

export default function MenuPage() {
  return (
    <section className={styles.menuPage}>
      <div className={styles.menuContainer}>
        <div className={styles.glow}></div>
        <div className={styles.glowSoft}></div>
        <div className={styles.menuHeader}>
          <h1>Menu & Pricing</h1>
          <p>
            Custom cakes, mousse desserts and sweet tables — handcrafted for
            your special moments.
          </p>
        </div>

        {menu.map((section, i) => (
          <div key={i} className={styles.menuSection}>
            <h2 className={styles.menuTitle}>{section.category}</h2>

            {section.items.map((item, index) => (
              <div key={index} className={styles.menuItem}>
                {/* SIMPLE ITEM */}
                {!item.sizes && (
                  <div className={styles.priceRow}>
                    <span className={styles.itemName}>
                      {item.name}
                      {item.size && (
                        <span className={styles.itemMeta}> — {item.size}</span>
                      )}
                      {item.weight && (
                        <span className={styles.itemMeta}>
                          {" "}
                          — {item.weight}
                        </span>
                      )}
                    </span>

                    {item.price && (
                      <span className={styles.itemPrice}>{item.price}</span>
                    )}
                  </div>
                )}

                {/* ITEM WITH MULTIPLE SIZES */}
                {item.sizes && (
                  <>
                    <div className={styles.itemName}>{item.name}</div>

                    {item.sizes.map((size, idx) => (
                      <div key={idx} className={styles.priceRow}>
                        <span className={styles.itemMeta}>
                          {size.weight} — {size.size} for {size.serves}
                        </span>

                        <span className={styles.itemPrice}>{size.price}</span>
                      </div>
                    ))}
                  </>
                )}
                {/* FLAVORS */}
                {item.flavors && (
                  <div className={styles.flavors}>
                    {item.flavors.map((flavor, idx) => (
                      <span key={idx} className={styles.flavorItem}>
                        {flavor}
                      </span>
                    ))}
                  </div>
                )}

                {/* NOTE */}
                {item.note && <p className={styles.itemNote}>{item.note}</p>}
              </div>
            ))}

            {/* SECTION NOTES */}
            {section.notes?.map((note, idx) => (
              <p key={idx} className={styles.sectionNote}>
                {note}
              </p>
            ))}
          </div>
        ))}

        {/* Fillings */}
        <div className={styles.fillingsSection} id="fillings">
          <h2 className={styles.menuTitle}>Fillings</h2>

          {fillings[0].items.map((category, idx) => (
            <div key={idx} className={styles.fillingsCategory}>
              <h3 className={styles.fillingsType}>{category.type}</h3>

              <div className={styles.fillingsGrid}>
                {category.fillings.map((filling, i) => (
                  <div key={i} className={styles.fillingCard}>
                    <Image
                      src={filling.image}
                      alt={filling.name}
                      width={300}
                      height={200}
                      className={styles.fillingImg}
                    />
                    <h4>{filling.name}</h4>
                    <p>{filling.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
