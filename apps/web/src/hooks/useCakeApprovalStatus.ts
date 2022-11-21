import { useMemo } from 'react'
import { useWeb3React } from '@pancakeswap/wagmi'
import { useCake } from 'hooks/useContract'
import { useSWRContract, UseSWRContractKey } from 'hooks/useSWRContract'
import multicall from 'utils/multicall'
import { getAddress } from 'utils/addressHelpers'
import erc20ABI from 'config/abi/erc20.json'


// TODO: refactor as useTokenApprovalStatus for generic use

export const useCakeApprovalStatus = (spender) => {
  const { account } = useWeb3React()
  const { reader: cakeContract } = useCake()

  const key = useMemo<UseSWRContractKey>(
    () =>
      account && spender
        ? {
            contract: cakeContract,
            methodName: 'allowance',
            params: [account, spender],
          }
        : null,
    [account, cakeContract, spender],
  )

   const calls = [{
      address: cakeContract.address,
      name: 'allowance',
      params: [account, spender],
      }]
     
      // const allowances = await multicall(erc20ABI, calls, 97)


  const { data, mutate } = useSWRContract(key)

  return { isVaultApproved: data ? data.gt(0) : false, setLastUpdated: mutate }
}

export default useCakeApprovalStatus



