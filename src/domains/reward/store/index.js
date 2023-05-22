import { refreshActiveTime, getMyCurrentRecord, checkIn } from '../repository'

class RewardStore {
  constructor() {
    makeAutoObservable(this)
  }

  standTime = NUMBER_ZERO

  checkInTime = NUMBER_ZERO

  user_name = ''
  account = ''
  v_price = NUMBER_ZERO

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
    this.v_price = v_price ?? NUMBER_ZERO
    this.user_name = user_name
    this.account = account
  }

  addVPrice = (delta) => {
    this.v_price += delta
  }

  checkIn = () => checkIn({ v_price: this.v_price })
}

export const rewardStore = new RewardStore()
export const rewardStoreKey = 'rewardStore'
