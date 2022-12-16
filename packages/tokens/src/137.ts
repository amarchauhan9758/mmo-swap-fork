import { ChainId, WMATIC, ERC20Token } from '@pancakeswap/sdk'
import { MMO_MAINET, USDC_MATIC  } from './common'

export const maticTokens = {
    wmatic: WMATIC[ChainId.MATIC],
    // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
    matic: new ERC20Token(
      ChainId.MATIC,
      '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
      18,
      'MATIC',
      'MATIC',
      'https://www.binance.com/',
    ),
    cttoken: new ERC20Token(
      ChainId.MATIC,
      '0x9E1871AEDED1475796bC1AD210A7eC895c6b9a31',
      18,
      'CT',
      'CT',
      'https://www.binance.com/',
      
    ),
    dttoken: new ERC20Token(
      ChainId.MATIC,
      '0x79C1098f258A1A4C5c2AEc0a270358Ae62bb5096',
      18,
      'DT',
      'DT',
      'https://www.binance.com/',
      
    ),
    
    cake: MMO_MAINET,
    mmo: MMO_MAINET,
    usdc: USDC_MATIC,
    rewardToken: new ERC20Token(
      ChainId.MATIC,
      '0x7A6bF45876F6EE1Db37e180408a18551a356A770',
      18,
      'RewardToken',
      'RewardToken',
      'https://www.binance.com/',
    ),
}
 
  