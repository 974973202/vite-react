import { useEffect, useState } from 'react'
import { Button, Typography, Divider } from 'antd'
import Todolist from '../Todolist'

const { Text, Title, Paragraph } = Typography;

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Button type='primary'>dianji</Button>
      <br />
      <Todolist />

      
      <Divider plain>110</Divider>
    </div>
  )
}

export default App
