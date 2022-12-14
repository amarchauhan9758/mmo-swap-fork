import { ifosConfig, iwosConfig } from 'config/constants'
import Ifo from './CurrentIfo'
import ComingSoon from './ComingSoon'

/**
 * Note: currently there should be only 1 active IFO at a time
 */
const activeIwo = iwosConfig.find((ifo) => ifo.isActive)

const Iwo = () => {
  return activeIwo ? <Ifo  /> : <ComingSoon />
}

export default Iwo
