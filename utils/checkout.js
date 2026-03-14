export const handleCheckout = async (course) => {
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ course }),
  });

  const data = await res.json();

  if (data.url) {
    window.location.href = data.url;
  }
};