import { useEffect, useRef } from "react"
import { useState } from "react"
import MileStones from "../components/MileStones"
import Redeem from "../components/Redeem"
// import data from '../data/reward.content'
import data from '/public/reward'

async function DataUpdate(c) {
  console.log(c)
  const response = await fetch("/api/trophy-api", {
    method: "POST",
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(c)
  })
  await response.json() ? console.log("done") : console.log("something wrong")
}

export default function Trophies() {

  const [content, setContent] = useState(data)
  const update = useRef(true)

  const updatedContent = {}

  useEffect(() => {
    if (update.current) return
    update.current = true
    DataUpdate(content)
  }, [content])

  function addTrophy() {
    if (!content.TakenToday) {
      updatedContent['Count'] = content.Count + 1
      updatedContent['TakenToday'] = true
      update.current = false
      setContent({ ...content, ...updatedContent })
      // setTrophies(prev => prev + 1)
    }
  }

  function updateContent(val, key) {
    if (key == "addMilestone") {
      updatedContent['MileStones'] = [...content.MileStones, val]
    }
    else if (key == "checkbox") {
      updatedContent['MileStones'] = [...content.MileStones]
      const currState = updatedContent['MileStones'][val.index]["finished"]
      updatedContent['MileStones'][val.index]["finished"] = !currState
      updatedContent['Count'] = currState ? content.Count - val.reward : content.Count + val.reward
    }
    else if (key == 'redeem') {
      if (content.Count >= content.Rewards[val][1]) {
        updatedContent['Count'] = content.Count - content.Rewards[val][1]
        updatedContent['RedeemHistory'] = [...content.RedeemHistory, {
          "date": Date.now(),
          "item": val,
          "points": content.Count
        }]
      }
    }
    else if (key == 'date') {
      updatedContent['TakenToday'] = false
      updatedContent['Date'] = val
    }
    update.current = false
    setContent({ ...content, ...updatedContent })
  }

  function checkDate() {


  }
  useEffect(() => {
    const date = new Date()
    if (content.Date !== date.toDateString()) {
      updateContent(date.toDateString(), 'date')
    }
  })

  return (
    <div className="m-5 text-xl">
      <div className="grid grid-cols-12 grid-rows-6 h-screen justify-items-center">
        <div className="col-span-6 row-span-2 ">
          <div className="flex w-max items-center">
            <svg className="w-20 fill-yellow-300" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512"><path d="M392,105c0.9-27,0.2-56,0.1-57H119.3c0,1-0.8,30,0.1,57H48c0,68,9.9,102.3,21,126.7s26.4,45.3,58.7,70.3
        c30.1,23.3,95.5,53.6,104.3,57.6v28.3c-4.6,10-23.5,28.2-83.3,28.2H128v48h256v-48h-25.7c-60.7,0-75-19.1-78.3-28.2v-28.3
        c9.3-4.6,80.9-40.3,104.4-57.5c25.2-18.4,50.9-51.5,58.7-70.3S464,167,464,105H392z M109.6,211.9c-8.8-18.2-14-37.9-15.7-61.9h28.7
        c0.7,6,1.4,11.3,2.3,16.3c6.6,39.2,14.8,70.2,25.7,96.5C133.3,249.3,119.3,232,109.6,211.9z M402.4,211.9
        c-9.9,20.3-24,37.7-41.6,51.3c11-26.2,19-56.8,25.8-96.9c0.8-5,1.6-10.3,2.3-16.3h29.3C416.4,174,411.3,193.7,402.4,211.9z"></path></svg>
            <span className="ml-8 text-7xl text-yellow-400 font-Overlock">{content.Count}</span>
          </div>
          <button className="animate-bounce m-2 py-4 px-6 text-center text-white uppercase shadow-md rounded-xl bg-gradient-to-r from-yellow-700 to-yellow-300" onClick={addTrophy}>Today's reward</button>
        </div>
        <div className="row-span-4 row-start-3 col-span-6 col-start-1">
          <Redeem rewards={content.Rewards} update={(val, key) => updateContent(val, key)} />
        </div>
        <div className="col-span-5 col-start-7">
          <MileStones milestones={content.MileStones} update={(val, key) => updateContent(val, key)} />
        </div>
      </div>
    </div>
  )
}