import { iwosConfig } from 'config/constants'
import CurrentIfo from './CurrentIfo'
import SoonIfo from './SoonIfo'

/**
 * Note: currently there should be only 1 active IWO at a time
 */
const activeIwo = iwosConfig.find((iwo) => iwo.isActive)

const Ifo = () => {
  return activeIwo ? <CurrentIfo activeIfo={activeIwo} /> : <SoonIfo />
}

export default Ifo
