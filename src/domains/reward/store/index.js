import { refreshActiveTime, getMyCurrentRecord } from '../repository'

class RewardStore {
  constructor() {
    makeAutoObservable(this)
  }

  standTime = NUMBER_ZERO

  checkInTime = NUMBER_ZERO

  user_name = ''
  account = ''
  v_price = ''

  getReward = () => {}

  addStandTime = (time) => {
    this.standTime += time
    refreshActiveTime({ active_time: this.standTime })
  }

  getMyCurrentRecord = async () => {
    const { data } = await getMyCurrentRecord()
    if (_.isEmpty(data.data)) return
    const { check_in_time, active_time, user_name, account, v_price } =
      data.data ?? {}
    this.standTime = active_time ?? NUMBER_ZERO
    this.checkInTime = check_in_time ?? NUMBER_ZERO
    this.user_name = user_name
    this.account = account
    this.v_price = v_price
  }
}

export const rewardStore = new RewardStore()
export const rewardStoreKey = 'rewardStore'
