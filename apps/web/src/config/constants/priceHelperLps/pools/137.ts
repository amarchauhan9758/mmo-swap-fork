
import { maticTokens } from '@pancakeswap/tokens'
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
        lpSymbol: 'USDC-MMO LP',
        lpAddress: '0x49E331Ed721255d5c70046755834A3321dfE81B9',
        token: maticTokens.mmo,
        quoteToken: maticTokens.usdc, 
      },
      {
        pid: null,
        lpSymbol: 'MATIC-MMO LP',
        lpAddress: '0x83FE4910f417999B7091581Bcd7c39e9EE7BC260',
        token: maticTokens.mmo,
        quoteToken: maticTokens.wmatic,
      },
      {
        pid: null,
        lpSymbol: 'USDC-MATIC LP',
        lpAddress: '0x7f694841C3dF9a454126A614bf9B89205d8e3039',
        token: maticTokens.usdc,
        quoteToken: maticTokens.wmatic,
      },
  ].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))
  
  export default priceHelperLps
  









