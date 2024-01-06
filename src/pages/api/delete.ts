import type { NextApiRequest, NextApiResponse } from 'next'
import { deleteFeedback } from '@/functions/db_api'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const id = JSON.parse(req.body).id
    console.log()
    if(req.method == "POST"){
        await deleteFeedback(id)
        res.status(200).json({success: true})
    }
}