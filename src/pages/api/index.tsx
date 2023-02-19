import type { NextApiResponse, NextApiRequest } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).send("Method Not Allowed");
    }
    const { ipAdress, userAgent } = req.body;
    if (!ipAdress || !userAgent) return res.status(200).send("OK");
}
