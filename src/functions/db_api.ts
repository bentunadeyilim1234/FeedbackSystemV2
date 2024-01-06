import prisma from './_db'

export const deleteFeedback = async (_id: string) => {
    await prisma.feedbacks.delete({
        where: {
            id: _id,
        },
    })
    return true
}

export const listFeedbacks = async (experienceId?: number) => {
    const listedData = await prisma.feedbacks.findMany({
        orderBy: {createdAt: 'desc'}
    })
    return listedData
}

export const postFeedback = async (feedback: any) => {
    await prisma.feedbacks.create({
        data: feedback,
    })
    return true
}