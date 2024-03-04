import React from 'react'
import Array from './components/Array'
import ArrayObjects from './components/ArrayObjects'
import ToDoList from './components/ToDoList'

function Home() {
  return (
    <div className='h-screen bg-zinc-800'>
      <Array />
      <ArrayObjects />
      <ToDoList />

    </div>
  )
}

export default Home