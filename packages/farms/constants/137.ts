import { maticTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '@pancakeswap/farms'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */

  {
    pid: 0,
    lpSymbol: 'MMO',
    lpAddress: '0x49E331Ed721255d5c70046755834A3321dfE81B9',
    token: maticTokens.mmo,
    isToken: true,
    quoteToken: maticTokens.usdc,
   },
  {
    pid: 1,
    lpSymbol: 'USDC-MMO LP',
    lpAddress: '0x49E331Ed721255d5c70046755834A3321dfE81B9',
    token: maticTokens.mmo,
    quoteToken: maticTokens.usdc, 
  },
  {
    pid: 2,
    lpSymbol: 'MATIC-MMO LP',
    lpAddress: '0x83FE4910f417999B7091581Bcd7c39e9EE7BC260',
    token: maticTokens.mmo,
    quoteToken: maticTokens.wmatic,
  },
  {
    pid: 3,
    lpSymbol: 'USDC-MATIC LP',
    lpAddress: '0x7f694841C3dF9a454126A614bf9B89205d8e3039',
    token: maticTokens.usdc,
    quoteToken: maticTokens.wmatic,
  },

  // {
  //   pid: 0,
  //   lpSymbol: 'CAKE',
  //   lpAddress: '0x36e3E4fF6471559b19F66bD10985534d5e214D44',
  //   token: maticTokens.syrup,
  //   quoteToken: maticTokens.wbnb,
  // },
  // {
  //   pid: 3,
  //   lpSymbol: 'BUSD-CAKE LP',
  //   lpAddress: '0xb98C30fA9f5e9cf6749B7021b4DDc0DBFe73b73e',
  //   token: maticTokens.busd,
  //   quoteToken: maticTokens.cake,
  // },
  // {
  //   pid: 4,
  //   lpSymbol: 'CAKE-BNB LP',
  //   lpAddress: '0xa96818CA65B57bEc2155Ba5c81a70151f63300CD',
  //   token: maticTokens.cake,
  //   quoteToken: maticTokens.wbnb,
  // },
  // {
  //   pid: 10,
  //   lpSymbol: 'BNB-BUSD LP',
  //   lpAddress: '0x4E96D2e92680Ca65D58A0e2eB5bd1c0f44cAB897',
  //   token: maticTokens.wbnb,
  //   quoteToken: maticTokens.busd,
  // },
  // {
  //   pid: 9,
  //   lpSymbol: 'USDC-BUSD LP',
  //   lpAddress: '0xd1742b5eC6798cEB8C791e0ebbEf606A4946f67E',
  //   token: maticTokens.usdc, // coins[0]
  //   quoteToken: maticTokens.busd, // coins[1]
  //   stableSwapAddress: '0x1288026D2c5a76A5bfb0730F615131A448f4Ad06',
  //   infoStableSwapAddress: '0xaE6C14AAA753B3FCaB96149e1E10Bc4EDF39F546',
  // },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
