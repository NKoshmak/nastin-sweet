/** @format */

"use client";

import { useState } from "react";
import styles from "../styles/order.module.css";
import TextButton from "@/components/TextButton/TextButton";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function OrderPage() {
  const router = useRouter();
  const params = useSearchParams();
  const typeFromUrl = params.get("type");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: typeFromUrl || "",
    dessertType: "",
    filling: "",
    size: "",
    quantity: "",
    deliveryDate: "",
    deliveryTime: "",
    address: "",
    details: "",
  });

  const productTypes = [
    { value: "cake", label: "Cake", category: "cake" },
    { value: "mousse-cake", label: "Mousse Cake", category: "mousse" },
    { value: "bento-cake", label: "Bento Cake", category: "cake" },
    { value: "dessert", label: "Dessert", category: "dessert" },
    { value: "candy-bar", label: "Candy Bar", category: "candy-bar" },
  ];

  const dessertTypes = ["Macaroons", "Mousse Dessert", "Cupcake", "Eclairs"];

  const mousseFillings = [
    "Mango - Passionfruit",
    "Berry Yogurt",
    "Three Chocolates",
    "Hazelnut-Chocolate",
    "Raspberry-White Chocolate",
  ];

  const cakeFillings = [
    "Delight Cake",
    "Snickers",
    "Red Velvet",
    "Strawberry Cake",
    "Chocolate & Banana",
  ];

  const cakeSizes = {
    cake: ["6 inch", "7 inch", "8 inch"],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      if (name === "type") {
        let autoSize = "";

        if (value === "mousse-cake") autoSize = "4 inch";
        if (value === "bento-cake") autoSize = "5 inch";

        return {
          ...prev,
          type: value,
          dessertType: "",
          filling: "",
          quantity: "",
          size: autoSize,
        };
      }

      if (name === "dessertType") {
        return {
          ...prev,
          dessertType: value,
          filling: "",
        };
      }

      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      router.push("/thank-you");
    } else {
      alert("Something went wrong");
    }
  };

  const getFillings = () => {
    const selected = productTypes.find((p) => p.value === formData.type);
    if (!selected) return [];

    if (selected.category === "mousse") return mousseFillings;
    if (selected.category === "cake") return cakeFillings;

    return [];
  };

  const getSizes = () => cakeSizes[formData.type] || [];

  return (
    <div className={styles.page}>
      <div className={styles.heroLayout}>
        <div className={styles.left}>
          <h1 className={styles.heroTitle}>
            Let’s create something <span>sweet</span> together.
          </h1>

          <p className={styles.heroText}>
            Custom cakes and desserts handcrafted in Calgary. Share your vision
            — I’ll bring it to life.
          </p>
        </div>

        <div className={styles.right}>
          <div className={styles.container}>
            <div className={styles.glow}></div>
            <div className={styles.glowSoft}></div>
            <h1 className={styles.title}>Place Your Order</h1>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder=""
                />
                <label className={styles.label}>Your Full Name</label>
              </div>

              <div className={styles.field}>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  placeholder=""
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label className={styles.label}>Your Email Address</label>
              </div>

              <div className={styles.field}>
                <input
                  className={styles.input}
                  type="tel"
                  name="phone"
                  placeholder=""
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <label className={styles.label}>Best Number to Reach You</label>
              </div>

              <select
                className={styles.input}
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="">Select Product</option>
                {productTypes.map((p) => (
                  <option key={p.value} value={p.value}>
                    {p.label}
                  </option>
                ))}
              </select>

              {getSizes().length > 0 && (
                <select
                  className={styles.input}
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose size</option>
                  {getSizes().map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              )}

              {formData.type === "dessert" && (
                <select
                  className={styles.input}
                  name="dessertType"
                  value={formData.dessertType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select dessert type</option>
                  {dessertTypes.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              )}

              {formData.type === "dessert" && formData.dessertType && (
                <input
                  className={styles.input}
                  type="number"
                  name="quantity"
                  placeholder="How many? (min. 4)"
                  value={formData.quantity}
                  onChange={handleChange}
                  min={4}
                  required
                />
              )}

              {formData.dessertType === "Mousse Dessert" && (
                <select
                  className={styles.input}
                  name="filling"
                  value={formData.filling}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose filling</option>
                  {mousseFillings.map((f) => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
              )}

              {getFillings().length > 0 && (
                <select
                  className={styles.input}
                  name="filling"
                  value={formData.filling}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose filling</option>
                  {getFillings().map((f) => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
              )}

              <div className={styles.dateRow}>
                <input
                  className={styles.input}
                  type="date"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                />

                <input
                  className={styles.input}
                  type="time"
                  name="deliveryTime"
                  value={formData.deliveryTime}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.field}>
                <input
                  className={styles.input}
                  type="text"
                  name="address"
                  placeholder=""
                  value={formData.address}
                  onChange={handleChange}
                />
                <label className={styles.label}>
                  Delivery address in Calgary
                </label>
              </div>

              <div className={styles.field}>
                <textarea
                  className={styles.textarea}
                  name="details"
                  placeholder=""
                  value={formData.details}
                  onChange={handleChange}
                />
                <label className={styles.label}>
                  Tell us about your vision — colors, theme, allergies,
                  inspiration...
                </label>
              </div>

              <div className={styles.file}>
                <label>Attach Reference Image</label>
                <input type="file" accept="image/*" />
              </div>

              <TextButton type="submit">Submit Order</TextButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
