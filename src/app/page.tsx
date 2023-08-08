import { getAllTodos } from 'src/api'

import AddTask from './components/AddTask'
import TodoList from './components/TodoList'

const Home = async () => {
  const todos = await getAllTodos()
  return (
    <main className="h-screen flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
      <h1 className="text-4xl font-bold text-gray-700">Next 13 Todo App</h1>
      <div className="w-full max-w-xl mt-5">
        <div className="w-full px-8 py-6 bg-white shadow-md rounded-lg overflow-y-auto max-h-[calc(100vh-10rem)]">
          <AddTask />
          <TodoList todos={todos} />
        </div>
      </div>
    </main>
  )
}

export default Home
