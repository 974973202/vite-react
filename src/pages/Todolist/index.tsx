import { useState, useEffect } from 'react';
import { Input, Card, Button, List, Typography, Select, message } from 'antd';
import { getTodulist, addTodulist, delTodulist } from './request/index'

const { Option } = Select;

function Todolist() {
  const [todoList, setTodoList] = useState<Record<string, any>[]>([])
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
    if(!value) return message.info('请输入文本')
    // setTodoList([...todoList, value])
    addTodulist({ content: value })
    setValue('')
    getData()
  }

  const handleDel = async (_id: number) => {
    const { success, message: msg } = await delTodulist(_id);
    success ? getData() : message.error(msg)
  }


  return (
    <Card>
      <Input.Group compact>
        <Select defaultValue={1} style={{ width: 120 }}>
          <Option value={1}>TODO</Option>
          <Option value={2}>二</Option>
          <Option value={3}>三</Option>
        </Select>
        <Input showCount allowClear value={value} onChange={handleChange} style={{ width: 'calc(100% - 195px)' }} placeholder="input to todolist" />
        <Button onClick={handleSubmit} type="primary">Submit</Button>
      </Input.Group>

      <List
        bordered
        dataSource={todoList}
        renderItem={item => (
          <List.Item actions={
            [
              <Button size="small" type="primary" ghost>修改</Button>,
              <Button onClick={() => handleDel(item._id)} size="small" danger>删除</Button>
            ]
          }>
            <Typography.Text mark>{item.createdAt}</Typography.Text> {item.content}
          </List.Item>
        )}
      />
    </Card>
  )
}

export default Todolist