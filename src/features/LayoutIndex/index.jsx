import { Layout } from 'antd'
import { Outlet } from 'react-router'
import FHeader from '../FHeader'
import SideBar from '../SideBar'

const { Content, Sider } = Layout
const LayoutIndex = () => {
  const { rewardStore } = useStores()
  const start = useRef(NUMBER_ZERO)

  window.onload = () => {
    start.current = new Date().valueOf()
  }

  // 页面被切换了，也需要监听
  document.addEventListener('webkitvisibilitychange', () => {
    const now = new Date().valueOf()
    const activeTime = now - start.current
    const isHidePage = document.webkitVisibilityState === 'hidden'
    if (isHidePage) {
      rewardStore.addStandTime(activeTime)
      document.removeEventListener('webkitvisibilitychange')
    } else start.current = now
  })

  return (
    <Layout className="min-h-[100vh] h-full">
      <FHeader />
      <Layout className="bg-[#eee]">
        <Sider>
          <SideBar />
        </Sider>
        <Layout>
          <Content className="m-[15px] p-[10px] h-full bg-[#fff] rounded-[8px]">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default LayoutIndex
