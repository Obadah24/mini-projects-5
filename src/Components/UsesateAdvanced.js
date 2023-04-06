import React, { useState } from 'react'
import '../App.css'
 export const GoalForm = (props) => {
  const [formData, setformData] = useState({goal:'', by:''})
  const ChangeHandle = (e) => {
    setformData({...formData, [e.target.name]:e.target.value})
  }
  const SumbitHandle = (e) => {
    e.preventDefault()
    props.onAdd(formData)
    setformData({goal:'', by:''})
  }
  return (
    <>
    <h1 className='header'>My Little Lemon Goals</h1>
    <form onSubmit={SumbitHandle}>
      <input className='input' name='goal' type='text' placeholder='goal' value={formData.goal} onChange={ChangeHandle}/>
      <input className='input' name='by' type='text' placeholder='by' value={formData.by} onChange={ChangeHandle}/>
      <button className='button'>Submit Goal</button>
    </form>
    </>
  )
}
const ListofGoals = (props) => {
  return (
<ol className='orderlist'>
  {props.allGoals.map((g) => (
    <li key={g.goal}>
      <span >My goal is to {g.goal}, by {g.by}</span>
    </li>
  ))}
</ol>
  )
}

export default function UsesateAdvanced() {
  const [allGoals, UpdateAllGoals] = useState([])
  function addGoal(goal) {UpdateAllGoals([...allGoals, goal])}
  return (
    <main className='main'>
      <section className='article'>
      <GoalForm onAdd={addGoal} />
      <ListofGoals allGoals={allGoals} />
      </section>
    </main>
  )
}

