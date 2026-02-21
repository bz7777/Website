import { Resend } from "resend";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !message) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Bezati Contact <noreply@bezati.tech>",
    to: "info@bezati.tech",
    replyTo: email,
    subject: `[Bezati] ${subject || "Mesazh i ri"} — ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
        <h2 style="color:#7c3aed;margin-bottom:4px">Mesazh i ri nga bezati.tech</h2>
        <hr style="border:1px solid #e5e7eb;margin:16px 0"/>
        <p><strong>Emri:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Subjekti:</strong> ${subject || "—"}</p>
        <hr style="border:1px solid #e5e7eb;margin:16px 0"/>
        <p style="white-space:pre-wrap;color:#374151">${message}</p>
      </div>
    `,
  });

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ success: true });
}
