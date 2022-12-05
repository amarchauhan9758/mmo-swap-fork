import { ReactNode } from 'react'
import styled from 'styled-components'
import { Card, CardBody, Box, CardProps } from '@pancakeswap/uikit'

const StyledCard = styled(Card)<{ background: string; rotation?: string }>`
  height: fit-content;
  padding: 1px;
  box-sizing: border-box;
  text-align: center;
  ${({ theme }) => theme.mediaQueries.md} {
    ${({ rotation }) => (rotation ? `transform: rotate(${rotation});` : '')}
  }
  margin: 5px 10px;
`

const IconWrapper = styled(Box)<{ rotation?: string }>`
  position: absolute;
  top: 24px;
  right: 24px;

  ${({ theme }) => theme.mediaQueries.md} {
    ${({ rotation }) => (rotation ? `transform: rotate(${rotation});` : '')}
  }
`

interface IconCardProps extends IconCardData, CardProps {
  children: ReactNode
}

export interface IconCardData {
  icon: ReactNode
  background?: string
  borderColor?: string
  rotation?: string
}

const IconCard: React.FC<React.PropsWithChildren<IconCardProps>> = ({
  icon,
  background,
  borderColor,
  rotation,
  children,
  translate,
  ...props
}) => {
  return (
    <StyledCard
      background={background}
      borderBackground={borderColor}
      rotation={rotation}
      translate={translate}
      {...props}
    >
      <CardBody>
        {/* <IconWrapper rotation={rotation}>{icon}</IconWrapper> */}
        {children}
      </CardBody>
    </StyledCard>
  )
}

export default IconCard
