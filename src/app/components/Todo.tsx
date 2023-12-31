'use client'

import React, { useEffect, useRef, useState } from 'react'
import { deleteTodo, editTodo } from 'src/api'
import { Todo } from 'src/types'

const Todo = ({ todo }: { todo: Todo }) => {
  const ref = useRef<HTMLInputElement | null>(null)

  const [isEdit, setIsEdit] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  useEffect(() => {
    if (isEdit) ref.current?.focus()
  }, [isEdit])

  const handleEdit = () => setIsEdit(true)

  const handleSave = async () => {
    await editTodo(todo.id, editText)
    setIsEdit(false)
  }

  const handleDelete = async () => await deleteTodo(todo.id)

  return (
    <li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
      {isEdit ? (
        <input
          ref={ref}
          type="text"
          className="mr-2 py-1 px-2 rounded border-gray-400 border"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <div>
        {isEdit ? (
          <button className="text-blue-500 mr-3" onClick={handleSave}>
            save
          </button>
        ) : (
          <button className="text-green-500 mr-3" onClick={handleEdit}>
            edit
          </button>
        )}

        <button className="text-red-500" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default Todo
