import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { course } = req.body;

  const telegramLinks = {
    basic: "https://t.me/basicgroup",
    pro: "https://t.me/progroup",
  };

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name:
              course === "pro"
                ? "Онлайн-школа «Кондитер PRO»"
                : "Курс «Десерти з нуля»",
          },
          unit_amount: course === "pro" ? 9800 : 1900,
        },
        quantity: 1,
      },
    ],
    mode: "payment",

    success_url: `${req.headers.origin}/success?link=${encodeURIComponent(
      telegramLinks[course]
    )}`,

    cancel_url: `${req.headers.origin}/cancel`,
  });

  res.status(200).json({ url: session.url });
}
