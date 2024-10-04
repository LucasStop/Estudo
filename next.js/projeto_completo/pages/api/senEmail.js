import { SMTPClient } from 'emailjs';

export default function handler(req, res) {
    const client = new SMTPClient({
        user: "user",
        password: "password",
        host: 'smtp.your-gmail.com',
        ssl: true,
    });

    try {
        const message = await client.sendAsync({
            text: "I hope this works",
            from: "you <username@your-email.com>",
            to: "someone <someone@your-email.com>, another <another@your-email.com>",
            cc: "else <else@your-email.com>",
            subject: "testing emailjs",
        });
        console.log(message);
    }
    catch (error) {
        console.log(error);
    }

    res.status(200).json({ message: 'Send Email' })
  }