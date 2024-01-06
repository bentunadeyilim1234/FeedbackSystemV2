import React, { useState, useEffect } from 'react'
import dynamic from "next/dynamic"

const DynamicItem = dynamic(() => import("../components/usercard"), {
  loading: () => <p>Loading...</p>
})

type FeedbackType = {
  id: string
  feedbackId: number
  feedback: string
  playerName: string
  userId: number
  rating: number
}

type NullableFeedbackType = {
  id: null | string
  feedbackId: null | number
  feedback: null | string
  playerName: null | string
  userId: null | number
  rating: null | number
}

export default function Index(){
  const [feedbackList, setFeedbackList] = useState<FeedbackType[]>()
  useEffect(() => {
    const fetchData = async () => {
      console.log(feedbackList)
      const response = await fetch('/api/list/')
      const result = await response.json()
      setFeedbackList(result)
    }
    fetchData()
    setInterval(() => {
      try{
        fetchData()
      }
      catch {}
    }, 60*1000)
  }, [])
  const removeHandler = async (feedback: FeedbackType) => {
    await fetch("/api/delete/" + feedback.id)
    const response = await fetch('/api/list/')
    const result = await response.json()
    setFeedbackList(result)
    console.log(result)
  }
  return (
    <div>
      <h1 className="text-4xl font-medium text-center mb-8 pt-8">Feedbacks</h1>
        {feedbackList ?
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-6">
            {feedbackList.map((feedback: FeedbackType) => feedback.id && (
              <DynamicItem
                key={feedback.id}
                feedback={feedback.feedback}
                userId={feedback.userId}
                playerName={feedback.playerName}
                feedbackId={feedback.feedbackId}
                rating={feedback.rating}
                onRemove={function(){removeHandler(feedback)}}
              />))}
          </ul> : <p>Loading, please wait...</p>}
    </div>
  )
}