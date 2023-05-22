import { Calendar, Progress } from 'antd'

// 个人空间
const MyZone = () => {
  const { rewardStore } = useStores()
  rewardStore.getMyCurrentRecord()

  return (
    <div className="flex flex-col justify-between">
      <div className="p-[10px]">
        <h1>个人信息</h1>
        <div className="w-full h-[50px] flex gap-[10px] items-center">
          <div>姓名：{rewardStore.user_name}</div>
          <div>账号：{rewardStore.account}</div>
          <div>代币数：{rewardStore.v_price}</div>
          <Button>立即签到+200</Button>
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
            <div className="w-[100%] h-[20%] bg-[#a48f8e] flex items-center gap-[10px]">
              <Progress percent={130} size="small" showInfo={false} />
              <Button>可领取奖励+200</Button>
            </div>
            <div className="w-[100%] h-[80%] bg-[#008c8c]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default observer(MyZone)
