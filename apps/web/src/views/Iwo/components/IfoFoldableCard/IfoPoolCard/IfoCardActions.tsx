import { useTranslation } from '@pancakeswap/localization'
import { Button, NextLinkFromReactRouter } from '@pancakeswap/uikit'
import { useWeb3React } from '@pancakeswap/wagmi'
import { Iwo, PoolIds } from 'config/constants/types'
import { WalletIfoData, PublicIfoData } from 'views/Iwo/types'
import ConnectWalletButton from 'components/ConnectWalletButton'
import ContributeButton from './ContributeButton'
import ClaimButton from './ClaimButton'
import { SkeletonCardActions } from './Skeletons'
import { EnableStatus } from '../types'

interface Props {
  poolId: PoolIds
  ifo: Iwo
  publicIfoData: PublicIfoData
  walletIfoData: WalletIfoData
  hasProfile?: boolean
  isLoading?: boolean
  isEligible?: boolean
  enableStatus?: EnableStatus
}

const IfoCardActions: React.FC<React.PropsWithChildren<Props>> = ({
  poolId,
  ifo,
  publicIfoData,
  walletIfoData,
  hasProfile,
  isLoading,
  isEligible,
  enableStatus,
}) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const userPoolCharacteristics = walletIfoData[poolId]

  if (!account) {
    return <ConnectWalletButton width="100%" />
  }

  console.log('again check', userPoolCharacteristics.hasHarvest)

  const needClaim =
    !userPoolCharacteristics.hasHarvest &&
    userPoolCharacteristics.userAllocation.gt(0) &&
    userPoolCharacteristics.status == 'finished'

  if (needClaim) {
    return <ClaimButton poolId={poolId} ifoVersion={ifo.version} walletIfoData={walletIfoData} />
  }

  const alreadyClaimed = userPoolCharacteristics.hasHarvest && userPoolCharacteristics.userAllocation.gt(0)

  if (alreadyClaimed) {
    return (
      <Button disabled width="100%">
        Already Claimed
      </Button>
    )
  }

  if (userPoolCharacteristics.status != 'live') {
    return userPoolCharacteristics.status
  }

  return (
    <>
      <ContributeButton poolId={poolId} ifo={ifo} publicIfoData={publicIfoData} walletIfoData={walletIfoData} />
    </>
  )
}

export default IfoCardActions
