import { useState, useEffect } from 'react';
import { Input, Card, Button, List, Typography, Select } from 'antd';
import { getTodulist, addTodulist } from './request/index'

const { Option } = Select;

function Todolist() {
  const [todoList, setTodoList] = useState<string[]>([
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ])
  const [value, setValue] = useState<string>('')

  const getData = async () => {
    const data: any = await getTodulist()
    console.log(data, 'datadata');
    setTodoList(data.content)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleChange = (e: { target: { value: string; }; }) => {
    setValue(e.target.value)
  }

  const handleSubmit = () => {
    // setTodoList([...todoList, value])
    addTodulist({ content: value })
    setValue('')
  }


  return (
    <Card>
      <Input.Group compact>
        <Select defaultValue={1} style={{ width: 120 }}>
          <Option value={1}>一</Option>
          <Option value={2}>二</Option>
          <Option value={3}>三</Option>
        </Select>
        <Input value={value} onChange={handleChange} style={{ width: 'calc(100% - 195px)' }} placeholder="input to todolist" />
        <Button onClick={handleSubmit} type="primary">Submit</Button>
      </Input.Group>
      <List
        bordered
        dataSource={todoList}
        renderItem={item => (
          <List.Item>
            <Typography.Text mark>[ITEM]</Typography.Text> {item}
          </List.Item>
        )}
      />
    </Card>
  )
}

export default Todolist