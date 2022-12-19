import React from 'react'
import { Button, useWalletModal } from '@pancakeswap/uikit'

import useI18n from 'hooks/useI18n'
import useActiveWeb3React from 'hooks/useActiveWeb3React'

const UnlockButton = (props) => {
  const TranslateString = useI18n()
  // const { connect, reset } = useActiveWeb3React()
  // const { onPresentConnectModal } = useWalletModal(connect, reset)

  return (
    <></>
    // <Button onClick={onPresentConnectModal} {...props}>
    //   {TranslateString(292, 'Unlock Wallet')}
    // </Button>
  )
}

export default UnlockButton
