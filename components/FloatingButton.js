export default function FloatingOrderButton() {
  return (
    <button
      className="floating-order-button"
      onClick={() => window.location.href = "/order"}
    >
      Order Now →
    </button>
  );
}