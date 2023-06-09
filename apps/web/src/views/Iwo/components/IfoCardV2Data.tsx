import useGetPublicIfoV2Data from 'views/Iwo/hooks/v2/useGetPublicIfoData'
import useGetWalletIfoV2Data from 'views/Iwo/hooks/v2/useGetWalletIfoData'
import { Iwo } from 'config/constants/types'
import IfoFoldableCard from './IfoFoldableCard'

interface Props {
  ifo: Iwo
}

const IfoCardV2Data: React.FC<React.PropsWithChildren<Props>> = ({ ifo }) => {
  const publicIfoData = useGetPublicIfoV2Data(ifo)
  const walletIfoData = useGetWalletIfoV2Data(ifo)

  return <IfoFoldableCard ifo={ifo} publicIfoData={publicIfoData} walletIfoData={walletIfoData} />
}

export default IfoCardV2Data
