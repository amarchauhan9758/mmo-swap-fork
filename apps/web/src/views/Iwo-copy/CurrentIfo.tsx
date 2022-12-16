import React from 'react'
import styled from 'styled-components'
import { Text, Heading, BaseLayout, Button, LinkExternal, Flex, Image } from '@pancakeswap/uikit'
import { iwosConfig } from 'config/constants'
 
import { useTranslation } from '@pancakeswap/localization'

import IfoCard from './components/IfoCard'
import Title from './components/Title'
import IfoCards from './components/IfoCards'

const LaunchIfoCallout = styled(BaseLayout)`
  border-top: 2px solid ${({ theme }) => theme.colors.textSubtle};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  margin: 0 auto;
  padding: 32px 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: 1fr 1fr;
  }
`

const List = styled.ul`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;

  & > li {
    line-height: 1.4;
    margin-bottom: 8px;
  }
`

/**
 * Note: currently there should be only 1 active IFO at a time
 */
const activeIfo = iwosConfig.find((ifo) => ifo.isActive)

const Ifo = () => {
  const {t} = useTranslation()

  return (
    <div>
      
      <IfoCards isSingle>
        
        <IfoCard ifo={activeIfo} />
      </IfoCards>
      <LaunchIfoCallout>
        <div style={{padding: "0px 40px"}}>
          <Title as="h2">{t('How to take part')}</Title>
          <Heading mb="16px">{t( 'Before Sale')}:</Heading>
          <List>
            <li>{t('Get BUSD tokens')}</li>
            {/* <li>{t(598, 'Get CAKE-BNB LP tokens by adding CAKE and BNB liquidity')}</li> */}
          </List>
          {/* <Flex mb="16px">
            <LinkExternal href="https://exchange.pancakeswap.finance/#/swap" mr="16px">
              {t(999, 'Buy cake')}
            </LinkExternal>
            <LinkExternal href="https://exchange.pancakeswap.finance/#/add/ETH/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82">
              {t(999, 'Get LP tokens')}
            </LinkExternal>
          </Flex> */}
          <Heading mb="16px">{t('During Sale')}:</Heading>
          <List>
            <li>{t('While the sale is live, commit your tokens to buy the IWO tokens')}</li>
          </List>
          <Heading mb="16px">{t( 'After Sale')}:</Heading>
          <List>
            <li>{t('Claim the tokens you purchased, along with any unspent funds.')}</li>
            <li>{t('Done!')}</li>
          </List>
          <Text as="div" pt="16px">
            <Button
              as="a"
              variant="secondary"
              href="https://wizardtokenofficial.medium.com/initial-wizard-offering-53bea354455d"
            >
              {t('Read more')}
            </Button>
          </Text>
        </div>
        <div>
          <img src="/images/ifo-bunny.png" alt="ifo bunny"   />
          <div>
            <Title as="h2">{t('Want to launch your own IWO?')}</Title>
            <Text mb={3}>
              {t("Launch your project with Knightswap, Binance Smart Chain's fastest growing AMM project and liquidity provider, to bring your token directly to the most active and rapidly growing community on BSC."
              )}
            </Text>
            <Button
              as="a"
              href="https://forms.gle/RLfABw2AkePF5gSUA"
              external
            >
              {t('Apply to launch')}
            </Button>
          </div>
        </div>
      </LaunchIfoCallout>
    </div>
  )
}

export default Ifo
