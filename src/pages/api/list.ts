import type { NextApiRequest, NextApiResponse } from 'next'
import { listFeedbacks } from '@/functions/db_api'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const replacer = (key: any, value: any) => typeof value === "bigint" ? value.toString() : value
    if(req.method == "GET"){
        const listedData = await listFeedbacks(0)
        const jsonSafe = JSON.stringify(listedData, replacer)
        res.status(200).send(jsonSafe)
    }
}