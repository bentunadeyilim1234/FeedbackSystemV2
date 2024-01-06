import React, { useState, useEffect } from 'react'
import dynamic from "next/dynamic"
import Loading from '@/components/loading'

const DynamicItem = dynamic(() => import("../components/usercard_2"))

type FeedbackType = {
  id: string
  feedbackId: number
  feedback: string
  playerName: string
  userId: number
  rating: number
}

export default function Index(){
  const [feedbackList, setFeedbackList] = useState<FeedbackType[]>()
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/list/')
      const result = await response.json()
      console.log(result)
      setFeedbackList(result)
    }
    fetchData()
    setInterval(() => {
      fetchData()
    }, 60*1000)
  }, [])
  const removeHandler = async (feedback: FeedbackType) => {
    await fetch("/api/delete/", {
      method: "POST",
      body: JSON.stringify({id: feedback.id})
    })
    const response = await fetch('/api/list/')
    const result = await response.json()
    setFeedbackList(result)
    console.log(result)
  }
  return (
    <div className='flex flex-col items-stretch'>
      <h1 className="text-4xl font-medium text-center mb-8 pt-8">Feedbacks</h1>
      {feedbackList ?
        <ul className="flex flex-col overflow-y-auto p-6">
          {feedbackList.map((feedback: FeedbackType) => feedback.feedbackId && (
            <DynamicItem
              key={feedback.id}
              feedback={feedback.feedback}
              userId={feedback.userId}
              playerName={feedback.playerName}
              feedbackId={feedback.feedbackId}
              rating={feedback.rating}
              onRemove={function(){removeHandler(feedback)}}
            />
          ))}
        </ul> : <Loading/>}
    </div>
  )
} 