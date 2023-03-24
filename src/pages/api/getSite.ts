import type { NextApiResponse, NextApiRequest } from "next";
import { integrityData } from "../../lib/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).send("Requested method is not allowed for that route");
    }
    const { siteName } = req.body;
    let fetchErrored = false;
    let integrityData: integrityData;
    const integrityFetch = await fetch(`${process.env.API_URL}/block_data`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            site: siteName,
        }),
    });
    if (!fetchErrored && integrityFetch) {
        integrityData = (await integrityFetch.json()) as any;
        console.log(integrityData);
    }

    return res.json({
        error: fetchErrored,
        data: fetchErrored ? "Can't retrieve data" : integrityData,
    });
}
