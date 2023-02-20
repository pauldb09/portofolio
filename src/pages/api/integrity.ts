import type { NextApiResponse, NextApiRequest } from "next";
import { integrityData } from "../../lib/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).send("Requested method is not allowed for that route");
    }
    let fetchErrored = false;
    let integrityData: integrityData;
    const integrityFetch = await fetch(`${process.env.API_URL}/integrity`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
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
