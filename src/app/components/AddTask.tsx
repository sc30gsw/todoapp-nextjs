'use client'
import React, { useState } from 'react'
import { addTodo } from 'src/api'
import { v4 as uuid } from 'uuid'

const AddTask = () => {
  const [text, setText] = useState('')
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await addTodo({ id: uuid(), text })

    setText('')
  }

  return (
    <form className="mb-4 space-y-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="w-full px-4 py-2 text-white bg-blue-500 rounded transform hover:bg-blue-400 hover:scale-95 duration-200">
        Add Task
      </button>
    </form>
  )
}

export default AddTask
