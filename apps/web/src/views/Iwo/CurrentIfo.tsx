/* eslint-disable react/jsx-boolean-value */
import { useMemo } from 'react'
import useGetPublicIfoV3Data from 'views/Iwo/hooks/v3/useGetPublicIwoData'
import useGetWalletIfoV3Data from 'views/Iwo/hooks/v3/useGetWalletIwoData'

import { Ifo } from 'config/constants/types'

import { IfoCurrentCard } from './components/IfoFoldableCard'
import IfoContainer from './components/IfoContainer'
import IfoSteps from './components/IfoSteps'

interface TypeProps {
  activeIfo: Ifo
}

const CurrentIfo: React.FC<React.PropsWithChildren<TypeProps>> = ({ activeIfo }) => {
  const publicIfoData = useGetPublicIfoV3Data(activeIfo)
  const walletIfoData = useGetWalletIfoV3Data(activeIfo)

  const { poolBasic, poolUnlimited } = walletIfoData

  return (
    <IfoContainer
      ifoSection={<IfoCurrentCard ifo={activeIfo} publicIfoData={publicIfoData} walletIfoData={walletIfoData} />}
      ifoSteps={
        <IfoSteps
          isLive={true}
          hasClaimed={poolBasic.hasClaimed || poolUnlimited.hasClaimed}
          ifoCurrencyAddress={activeIfo.currency.address}
        />
      }
    />
  )
}

export default CurrentIfo
