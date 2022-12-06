// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../configs/sendgrid/sendgrid";
type Data = {
  status: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const memberStr = JSON.stringify(req.body);

    const message = {
      to: [
        "saeid.savage@gmail.com",
        "saeid@step-agent.com",
        "frkaksan@gmail.com",
      ],
      from: {
        email: "saeid.noormohammad@gmail.com",
        name: "saeid noormohammad",
      },
      subject: "Yeni Uye Bilgileri",
      html: `
      <h3>
   Yeni Uye Bilgileri:
      </h3>
      <br>
     <p>${memberStr}</p>
      <br>
      `,
    };

    // <h4>Zoomda Gorusme Zamani</h4>
    // <p>${time}</p>
    await client.send(message);
    res.status(200).json({ status: "done" });
    return;
  }
}
