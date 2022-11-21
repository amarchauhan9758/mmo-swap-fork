import { StaticJsonRpcProvider } from '@ethersproject/providers'

export const BSC_PROD_NODE = process.env.NEXT_PUBLIC_NODE_PRODUCTION || 'https://bsc.nodereal.io'

export const bscRpcProvider = new StaticJsonRpcProvider(BSC_PROD_NODE)

export const maticRpcProvider = new StaticJsonRpcProvider('https://polygon-rpc.com')

export default null
