import React from 'react'
import type { Todo as TodoModel } from 'src/types'

import Todo from './Todo'

const TodoList = ({ todos }: { todos: TodoModel[] }) => {
  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList
