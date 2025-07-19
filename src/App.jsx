import { useState } from 'react'

function App() {{
  const [count, setCount] = useState(0)

  const increment = () => {{
    if (count < 10) setCount(count + 1)
  }}

  const decrement = () => {{
    setCount(count - 1)
  }}

  const reset = () => {{
    setCount(0)
  }}

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center space-y-6">
        <h1 className="text-4xl font-bold text-blue-600">React Counter App</h1>
        <div className="text-6xl font-bold text-gray-800">{count}</div>
        {count < 0 && <p className="text-red-500 font-semibold">Negative value!</p>}
        <div className="space-x-4">
          <button onClick={increment} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Increase</button>
          <button onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Decrease</button>
          <button onClick={reset} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Reset</button>
        </div>
      </div>
    </div>
  )
}}

export default App
