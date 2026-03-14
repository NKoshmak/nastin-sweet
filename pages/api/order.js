import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const data = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: "New Order from Website",
      text: `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Product: ${data.type}
Dessert Type: ${data.dessertType}
Filling: ${data.filling}
Size: ${data.size}
Quantity: ${data.quantity}

Delivery Date: ${data.deliveryDate}
Delivery Time: ${data.deliveryTime}
Address: ${data.address}

Details:
${data.details}
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
}

// export default function handler(req, res) {
//   console.log("API HIT");
//   res.status(200).json({ success: true });
// }