import useGetPublicIfoV3Data from 'views/Iwo/hooks/v3/useGetPublicIwoData'
import useGetWalletIfoV3Data from 'views/Iwo/hooks/v3/useGetWalletIwoData'
import { Iwo } from 'config/constants/types'
import IfoFoldableCard from './IfoFoldableCard'

interface Props {
  ifo: Iwo
}

const IfoCardV3Data: React.FC<React.PropsWithChildren<Props>> = ({ ifo }) => {
  const publicIfoData = useGetPublicIfoV3Data(ifo)
  const walletIfoData = useGetWalletIfoV3Data(ifo)

  return <IfoFoldableCard ifo={ifo} publicIfoData={publicIfoData} walletIfoData={walletIfoData} />
}

export default IfoCardV3Data
