import nodemailer from "nodemailer";

export async function POST(request) {

    try{
        const {name, email, message} = await request.json();

        if(!name || !email || !message) {
            return new Response(
                JSON.stringify({ error: "Missing required fields" }),
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS // The 16-character App Password
            },
        });

        const mailOption = {
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: `New message from ${name}`,
            text: "This is the plaintext version of the email.",
            replyTo: email,
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p> ${message}</p>
            `,
        };

        await transporter.sendMail(mailOption);

        return new Response(
            JSON.stringify({ success: true  }),
            { status: 200 }
        );

    } catch (error) {
        return new Response(
            JSON.stringify({ error: "Failed to send email"  }),
            { status: 500 }
        )
    }
}