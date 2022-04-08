import { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd';

const { Header, Sider, Content, Footer } = Layout;

function Test() {

  return (
    <Layout>
        <Sider>left sidebar</Sider>
      <Layout>
      <Header>header</Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >main content</Content>
          <Footer>footer</Footer>
      </Layout>
    </Layout>
  )
}

export default Test
