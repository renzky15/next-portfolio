import type { NextApiRequest, NextApiResponse } from 'next'
export default async function handler(  req: NextApiRequest,
                                        res: NextApiResponse) {
    const response = await fetch("https://eoj4p8e9b8imx18.m.pipedream.net", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
    });

    if (response.ok) {
        res.status(200).json({ success: true });
    } else {
        res.status(500).json({ error: "Zapier request failed" });
    }
}