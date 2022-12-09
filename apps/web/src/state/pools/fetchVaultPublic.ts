import BigNumber from 'bignumber.js'
import multicall, { multicallv2 } from 'utils/multicall'
import cakeVaultAbi from 'config/abi/cakeVaultV2.json'
import { getCakeVaultAddress, getCakeFlexibleSideVaultAddress } from 'utils/addressHelpers'
import { BIG_ZERO } from '@pancakeswap/utils/bigNumber'
import { getCakeContract } from 'utils/contractHelpers'
import erc20ABI from 'config/abi/erc20.json'

const cakeVaultV2 = getCakeVaultAddress(137)
const cakeFlexibleSideVaultV2 = getCakeFlexibleSideVaultAddress(137)
const cakeContract = getCakeContract()

export const fetchPublicVaultData = async (cakeVaultAddress = cakeVaultV2) => {
  try {
    const calls = ['getPricePerFullShare', 'totalShares', 'totalLockedAmount'].map((method) => ({
      address: cakeVaultAddress,
      name: method,
    }))

    const calls2 = [
      {
        address: '0x991CaC1ACFe7CFB24EbF036Df86101A72B43F533',
        name: 'balanceOf',
        params: ['0x2f4e8133fEDD9BeE97Ea6E6Cb4540D48c6D33C73'],
      },
    ]

    const chainId = 137

    const result = await Promise.all([
      multicallv2({
        abi: cakeVaultAbi,
        calls,
        chainId,
        options: {
          requireSuccess: false,
        },
      }),
      await multicall(erc20ABI, calls2, chainId),
    ])

    // console.log('YHN', result)

    const [sharePrice, shares, totalLockedAmount] = result[0]
    const totalCakeInVault = result[1]

    const totalSharesAsBigNumber = shares ? new BigNumber(shares.toString()) : BIG_ZERO
    const totalLockedAmountAsBigNumber = totalLockedAmount ? new BigNumber(totalLockedAmount[0].toString()) : BIG_ZERO
    const sharePriceAsBigNumber = sharePrice ? new BigNumber(sharePrice.toString()) : BIG_ZERO

    // console.log('totalCakeInVault', totalCakeInVault)

    return {
      totalShares: totalSharesAsBigNumber.toJSON(),
      totalLockedAmount: totalLockedAmountAsBigNumber.toJSON(),
      pricePerFullShare: sharePriceAsBigNumber.toJSON(),
      totalCakeInVault: new BigNumber(totalCakeInVault.toString()).toJSON(),
    }
  } catch (error) {
    return {
      totalShares: null,
      totalLockedAmount: null,
      pricePerFullShare: null,
      totalCakeInVault: null,
    }
  }
}

export const fetchPublicFlexibleSideVaultData = async (cakeVaultAddress = cakeFlexibleSideVaultV2) => {
  try {
    const calls = ['getPricePerFullShare', 'totalShares'].map((method) => ({
      address: cakeVaultAddress,
      name: method,
    }))

    const calls2 = [
      {
        address: '0x991CaC1ACFe7CFB24EbF036Df86101A72B43F533',
        name: 'balanceOf',
        params: ['0xcb4cdfFe7B876D1E7ca6233287A56ee8A68f96B5'],
      },
    ]

    const chainId = 137

    const result = await Promise.all([
      multicallv2({
        abi: cakeVaultAbi,
        calls,
        chainId,
        options: {
          requireSuccess: false,
        },
      }),
      await multicall(erc20ABI, calls2, chainId),
    ])

    const [sharePrice, shares] = result[0]
    const totalCakeInVault = result[1]

    const totalSharesAsBigNumber = shares ? new BigNumber(shares.toString()) : BIG_ZERO
    const sharePriceAsBigNumber = sharePrice ? new BigNumber(sharePrice.toString()) : BIG_ZERO
    return {
      totalShares: totalSharesAsBigNumber.toJSON(),
      pricePerFullShare: sharePriceAsBigNumber.toJSON(),
      totalCakeInVault: new BigNumber(totalCakeInVault.toString()).toJSON(),
    }
  } catch (error) {
    return {
      totalShares: null,
      pricePerFullShare: null,
      totalCakeInVault: null,
    }
  }
}

export const fetchVaultFees = async (cakeVaultAddress = cakeVaultV2) => {
  try {
    const calls = ['performanceFee', 'withdrawFee', 'withdrawFeePeriod'].map((method) => ({
      address: cakeVaultAddress,
      name: method,
    }))

    const chainId = 137

    const [[performanceFee], [withdrawalFee], [withdrawalFeePeriod]] = await multicallv2({
      abi: cakeVaultAbi,
      calls,
      chainId,
    })

    return {
      performanceFee: performanceFee.toNumber(),
      withdrawalFee: withdrawalFee.toNumber(),
      withdrawalFeePeriod: withdrawalFeePeriod.toNumber(),
    }
  } catch (error) {
    return {
      performanceFee: null,
      withdrawalFee: null,
      withdrawalFeePeriod: null,
    }
  }
}

export default fetchPublicVaultData
