/* eslint-disable no-magic-numbers */
import { Progress } from 'antd'

const TWENTY_MIN = 1000 * 60 * 20
const MIN = 1000 * 60
const HANDURD = 100

const ActiveProgress = () => {
  const { rewardStore } = useStores()
  const getPrice = () => {
    rewardStore.addActiveVPrice(TWO_HUNDRED).then(() => {
      message.success('领取成功')
      rewardStore.v_price += TWO_HUNDRED
    })
  }
  return (
    <div className="w-[100%] h-[20%] flex items-center gap-[10px] pl-[5px] pr-[5px]">
      <Progress
        className="pt-[4px]"
        percent={((rewardStore.standTime * HANDURD) / TWENTY_MIN).toFixed(
          NUMBER_ONE
        )}
      />
      <div>{(rewardStore.standTime / MIN).toFixed(NUMBER_ONE)}/20min</div>
      <Button onClick={getPrice} disabled={rewardStore.standTime <= TWENTY_MIN}>
        {rewardStore.standTime > TWENTY_MIN
          ? '可领取奖励+200'
          : '请稍后领取奖励'}
      </Button>
    </div>
  )
}

export default observer(ActiveProgress)
