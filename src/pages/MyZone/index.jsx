import { Calendar } from 'antd'
import ActiveProgress from './components/ActiveProgress'

// 个人空间
const MyZone = () => {
  const { rewardStore } = useStores()

  useEffect(() => {
    rewardStore.getMyCurrentRecord()
  }, [])

  return (
    <div className="flex flex-col justify-between">
      <div className="p-[10px]">
        <h1>个人信息</h1>
        <div className="w-full h-[50px] flex gap-[10px] items-center">
          <div>姓名：{rewardStore.user_name}</div>
          <div>账号：{rewardStore.account}</div>
          <div>代币数：{rewardStore.v_price}</div>
          <Button
            disabled={rewardStore.checkInTime > NUMBER_ZERO}
            onClick={() => {
              rewardStore.checkIn(TWO_HUNDRED).then(() => {
                message.success('签到成功')
                rewardStore.getMyCurrentRecord()
              })
            }}
          >
            {rewardStore.checkInTime <= NUMBER_ZERO
              ? '立即签到+200'
              : '今日你已签到'}
          </Button>
        </div>
      </div>
      <div className="p-[10px]">
        <h1>签到记录</h1>
        <div className="flex justify-between">
          <Calendar
            rootClassName="w-[35vw] h-[50vh] border-[1px] border-[#000] border-solid"
            fullscreen={false}
          />
          <div className="p-[2px] w-[35vw] h-[50vh] border-[1px] border-[#000] border-solid rounded-[8px]">
            {rewardStore.checkInTime > NUMBER_ZERO && <ActiveProgress />}
            {/* <div className="w-[100%] h-[80%] bg-[#008c8c]"></div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default observer(MyZone)
