export default function ThankYou() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px 20px",
        color: "#3e4c6f",
        backgroundColor: "#f5edf7",
      }}
    >
      <div>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
          Thank you!
        </h1>
        <p style={{ fontSize: "1.1rem" }}>
          We will contact you soon.
        </p>
      </div>
    </div>
  );
}