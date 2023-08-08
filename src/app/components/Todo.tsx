import React from 'react'
import { Todo } from 'src/types'

const Todo = ({ todo }: { todo: Todo }) => {
  return (
    <li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
      <span>{todo.text}</span>
      <div>
        <button className="text-green-500 mr-3">edit</button>
        <button className="text-red-500">Delete</button>
      </div>
    </li>
  )
}

export default Todo
