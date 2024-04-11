// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer';

type Data = {
message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { type, date, name, email, phone, street, city, state, zip, description } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'frontfourcellars.com',
        port: 587,
        secure: false,
        auth: {
            user: 'intake@frontfourcellars.com',
            pass: 'ReloFrog1@'
        },
        tls: { rejectUnauthorized: false },
    });

    const emailObj = {
        from: 'intake@frontfourcellars.com',
        to: 'frontfourcellars@gmail.com',
        subject: 'Special Events Request',
        html: `
            <p>Special Events Request</p>
            <p>Type: ${type}</p>
            <p>Date: ${date}</p>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>
                <span>Address:</span>
                <br/>
                <span>${street}</span>
                <br/>
                <span>${city}, ${state} ${zip}</span>
            </p>
            <p>
                <span>Details:</span>
                <br/>
                <span>${description}</span>
            </p>
        `
    };

    try {
        const info = await transporter.sendMail(emailObj);
        res.status(200).json({ message: `Message sent: ${info?.messageId}` });
    } catch (error: any) {
        res.status(200).json({ message: `Error: ${error?.message}` });
    };
}
