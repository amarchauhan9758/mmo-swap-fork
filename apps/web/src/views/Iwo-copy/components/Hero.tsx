import React from 'react'
import styled from 'styled-components'
import { Heading, Text } from '@pancakeswap/uikit'
import Container from 'components/layout/Container'
 
import { useTranslation } from '@pancakeswap/localization'

const Title = styled(Heading).attrs({ as: 'h1', size: 'xl' })`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 24px;
`

const Blurb = styled(Text)`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
`

const StyledHero = styled.div`
  background-image:  url('/images/IWO.png');
  background-position: center;
  background-size: cover;
  padding-bottom: 40px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 40px;
  margin-bottom: 32px;
`
const Hero = () => {
  const { t } = useTranslation()

  return (
    <StyledHero>
      <Container>
        <Title>{t('IWO: Initial Wizard Offerings')}</Title>
        <Blurb>{t('Buy new tokens with a brand new token sale model.')}</Blurb>
      </Container>
    </StyledHero>
  )
}

export default Hero
