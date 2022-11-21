
import { bscTestnetTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '../../types'

const priceHelperLps: SerializedFarmConfig[] = [
    /**
     * These LPs are just used to help with price calculation for MasterChef LPs (farms.ts).
     * This list is added to the MasterChefLps and passed to fetchFarm. The calls to get contract information about the token/quoteToken in the LP are still made.
     * The absence of a PID means the masterchef contract calls are skipped for this farm.
     * Prices are then fetched for all farms (masterchef + priceHelperLps).
     * Before storing to redux, farms without a PID are filtered out.
     */

      {
        pid: null,
        lpSymbol: 'BUSD-MMO LP',
        lpAddress: '0x6BBA354355Fe416a716E967a0C481a907956EC3b',
        token: bscTestnetTokens.mmo,
        quoteToken: bscTestnetTokens.busd, 
      },
      {
        pid: null,
        lpSymbol: 'BNB-MMO LP',
        lpAddress: '0x07ae38447D4D8B707dD8984EEd87542437f94f9f',
        token: bscTestnetTokens.mmo,
        quoteToken: bscTestnetTokens.wbnb,
      },
      {
        pid: null,
        lpSymbol: 'BNB-BUSD LP',
        lpAddress: '0xAa9F8efCb2033d7B4Dbcd7EA54b122574565B058',
        token: bscTestnetTokens.busd,
        quoteToken: bscTestnetTokens.wbnb,
      },
  ].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))
  
  export default priceHelperLps
  









