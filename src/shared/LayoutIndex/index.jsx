import { Layout } from 'antd'
import { Outlet } from 'react-router'
import FHeader from '../FHeader'
import SideBar from '../SideBar'

const { Content, Sider } = Layout
const LayoutIndex = () => {
  return (
    <Layout className="min-h-[100vh] h-full">
      <FHeader />
      <Layout className="bg-[#eee]">
        <Sider>
          <SideBar />
        </Sider>
        <Layout>
          <Content className="m-[0px] min-h-full">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default LayoutIndex
