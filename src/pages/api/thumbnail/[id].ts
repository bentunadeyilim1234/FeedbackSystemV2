import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method == "GET"){
        const { id } = req.query
        const response = await fetch(`https://thumbnails.roblox.com/v1/users/avatar-bust?userIds=${id}&size=48x48&format=Png&isCircular=false`)
        const returnData = await response.json()
        const imgData = returnData.data[0]
        if(imgData !== undefined && "imageUrl" in imgData){
            res.redirect(returnData.data[0].imageUrl)
        }
        else{
            res.status(404).json({success: false})
        }
    }
}