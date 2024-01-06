import type { NextApiRequest, NextApiResponse } from 'next'
import { postFeedback } from '@/functions/db_api'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method == "POST"){
        await postFeedback(req.body)
        res.status(200).json({success: true})
    }
}