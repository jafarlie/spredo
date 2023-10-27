// pages/api/verifyCaptcha.js
// import fetch from "isomorphic-unfetch";

export async function POST(req, res) {
  if (req.method === "POST") {
    const { captchaValue } = req.body;

    const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_DEV}&response=${captchaValue}`;

    const response = await fetch(verificationURL, {
      method: "POST",
    });

    const data = await response.json();

    if (data.success) {
      res.status(200).json({ verified: true });
    } else {
      res.status(400).json({ verified: false, error: data["error-codes"] });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
