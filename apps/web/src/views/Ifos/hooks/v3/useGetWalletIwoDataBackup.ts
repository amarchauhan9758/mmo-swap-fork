import { useState, useCallback } from 'react'
import { useWeb3React } from '@pancakeswap/wagmi'
import BigNumber from 'bignumber.js'
import { Ifo, PoolIds } from 'config/constants/types'
import { useERC20, useIfoV3Contract, useIwoContract } from 'hooks/useContract'
import { multicallv2 } from 'utils/multicall'
import ifoV3Abi from 'config/abi/ifoV3.json'
import iwoAbi from 'config/abi/iwo.json'
import { fetchCakeVaultUserData } from 'state/pools'
import { useAppDispatch } from 'state'
import { useIfoCredit } from 'state/pools/hooks'
import { BIG_ZERO } from '@pancakeswap/utils/bigNumber'
import useIfoAllowance from '../useIfoAllowance'
import { WalletIfoState, WalletIfoData } from '../../types'

const initialState = {
  isInitialized: false,
  poolBasic: {
    endBlock: BIG_ZERO,
    amountTokenCommittedInLP: BIG_ZERO,
    refundingAmountInLP: BIG_ZERO,
    hasHarvest: false,
    userAllocation: BIG_ZERO,
    offeringAmountInToken: BIG_ZERO,
    raisingAmount: BIG_ZERO,
    startblock: BIG_ZERO,
    totalAmount: BIG_ZERO,
  },
  poolUnlimited: {
    endBlock: BIG_ZERO,
    amountTokenCommittedInLP: BIG_ZERO,
    refundingAmountInLP: BIG_ZERO,
    hasHarvest: false,
    userAllocation: BIG_ZERO,
    offeringAmountInToken: BIG_ZERO,
    raisingAmount: BIG_ZERO,
    startblock: BIG_ZERO,
    totalAmount: BIG_ZERO,
  },
}

/**
 * Gets all data from an IFO related to a wallet
 */
const useGetWalletIwoData = (ifo: Ifo): WalletIfoData => {
  const [state, setState] = useState<WalletIfoState>(initialState)
  const dispatch = useAppDispatch()
  const credit = useIfoCredit()

  const { address, currency, version } = ifo

  const { account } = useWeb3React()
  const contract = useIwoContract(address)
  const currencyContract = useERC20(currency.address, false)
  const allowance = useIfoAllowance(currencyContract, address)

  const setPendingTx = (status: boolean, poolId: PoolIds) =>
    setState((prevState) => ({
      ...prevState,
      [poolId]: {
        ...prevState[poolId],
        isPendingTx: status,
      },
    }))

  const setIsClaimed = (poolId: PoolIds) => {
    setState((prevState) => ({
      ...prevState,
      [poolId]: {
        ...prevState[poolId],
        hasClaimed: true,
      },
    }))
  }

  const fetchIfoData = useCallback(async () => {
    const iwoCalls = ['userInfo','getRefundingAmount','getOfferingAmount','getUserAllocation','hasHarvest'].map((method) => ({
      address,
      name: method,
      params: [account],
    }))

    const iwoCalls2 = ['endBlock' , 'offeringAmount' , 'raisingAmount' ,  'startBlock' , 'totalAmount' ].map((method) => ({
      address,
      name: method,
    }))

    

    dispatch(fetchCakeVaultUserData({ account }))

    const [
      userInfo,
      getRefundingAmount,
      getOfferingAmount,
      getUserAllocation,
      hasHarvest,
      endblock,
      offeringAmount,
      raisingAmount,
      startblock,
      totalAmount
    ] = await multicallv2({ abi: iwoAbi, calls: [...iwoCalls,...iwoCalls2], options: { requireSuccess: false } })

    setState((prevState) => ({
      ...prevState,
      isInitialized: true,
      poolBasic: {
        ...prevState.poolBasic,
          endBlock: endblock.toString(),
          amountTokenCommittedInLP:  new BigNumber(userInfo[0].toString()),
          refundingAmountInLP:  new BigNumber(getRefundingAmount.toString()),
          hasHarvest: hasHarvest,
          userAllocation: new BigNumber(getOfferingAmount.toString()),
          offeringAmountInToken:  new BigNumber(offeringAmount.toString()),
          raisingAmount:  new BigNumber(raisingAmount.toString()),
          startblock: startblock.toString(),
          totalAmount: new BigNumber(totalAmount.toString()),

      },
      poolUnlimited: {
        ...prevState.poolUnlimited,
        endBlock: endblock.toString(),
        amountTokenCommittedInLP:  new BigNumber(userInfo[0].toString()),
        refundingAmountInLP:  new BigNumber(getRefundingAmount.toString()),
        hasHarvest: hasHarvest,
        userAllocation: new BigNumber(getOfferingAmount.toString()),
        offeringAmountInToken:  new BigNumber(offeringAmount.toString()),
        raisingAmount:  new BigNumber(raisingAmount.toString()),
        startblock: startblock.toString(),
        totalAmount: totalAmount.toString(),

      },
    }))
  }, [account, address, dispatch, version])

  const resetIfoData = useCallback(() => {
    setState({ ...initialState })
  }, [])

  const creditLeftWithNegative = credit.minus(state.poolUnlimited.amountTokenCommittedInLP)

  const ifoCredit = {
    credit,
    creditLeft: BigNumber.maximum(BIG_ZERO, creditLeftWithNegative),
  }

  return { ...state, allowance, contract, setPendingTx, setIsClaimed, fetchIfoData, resetIfoData, ifoCredit }
}

export default useGetWalletIwoData
