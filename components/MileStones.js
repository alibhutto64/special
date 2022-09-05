import { useState } from "react"

export default function MileStones({ milestones, update }) {
  const [newMilestone, setNewMilestone] = useState("")
  const [reward, setReward] = useState(2)

  function handleSubmit(e) {
    e.preventDefault();
    update({ "title": newMilestone, "finished": false, "reward": reward }, 'addMilestone')
    setNewMilestone("")
    setReward(2)
    // console.log(newMilestone)
  }

  function handleClick(i) {
    // console.log(e.target.value)
    update({ index: i, reward: milestones[i]['reward'] }, 'checkbox')
  }
  return (
    <div className="flex justify-between flex-col h-screen p-3 shadow">
      <div><h2 className="text-4xl font-bold border-b-2 border-gray-500 pb-3">Milestones</h2></div>
      <div className="mb-auto overflow-scroll">
        {milestones.map((m, i) => {
          return (
            <div
              className={"flex justify-between gap-4 mb-4 hover:bg-blue-200 p-2 cursor-pointer" + (m.finished ? " bg-blue-200" : "")}
              key={i}
              onClick={() => handleClick(i)}
            >
              <div className={"text-lg select-none" + (m.finished ? " line-through" : "")}>{m.title}</div>
              <div className="ml-auto font-medium text-lg">{m.reward}</div>
            </div>
          )
        })}
      </div>
      <div className="">
        <form onSubmit={e => handleSubmit(e)}>
          <div className="flex justify-between p-2 gap-4">
            <input
              className=" w-full border pl-1"
              type="text"
              placeholder="Add New Milestone..."
              value={newMilestone}
              onChange={(e) => { setNewMilestone(e.target.value) }}
              required
            />
            <select
              className="px-2"
              value={reward}
              onChange={(e) => { setReward(parseInt(e.target.value)) }}
              required
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
            <button type="submit" className="p-1 bg-blue-600 text-white rounded">Add</button>
          </div>
        </form>
      </div>
    </div >
  )
}