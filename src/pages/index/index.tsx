import { useEffect, useState } from 'react'
import { Button } from 'antd'
import Todolist from '../Todolist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      123
      <Button type='primary'>dianji</Button>
      <br />
      <Todolist />
    </div>
  )
}

export default App
