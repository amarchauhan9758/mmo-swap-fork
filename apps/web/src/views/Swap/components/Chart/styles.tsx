import { Box } from '@pancakeswap/uikit'
import styled from 'styled-components'

export const StyledPriceChart = styled(Box)<{
  $isDark: boolean
  $isExpanded: boolean
  $isFullWidthContainer?: boolean
}>`
  border: none;
  border-radius: 0;
  width: 100%;
  padding-top: 36px;



  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left:12px;
  background: rgba(217, 217, 217, 0.04);
backdrop-filter: blur(5.5px);
    padding-top: 8px;
    background: ${({ $isDark }) => ($isDark ? '' : 'rgba(255, 255, 255, 0.5)')};
   border: ${({ theme }) => `1px solid ${theme.colors.cardBorder}`};
    box-shadow: 0px -1px 2px 1px #1be0aa, 0px -2px 3px 0px #1be0aa;
    border-radius: ${({ $isExpanded }) => ($isExpanded ? '0' : '0px')};
    width: ${({ $isExpanded, $isFullWidthContainer }) => ($isFullWidthContainer || $isExpanded ? '100%' : '50%')};
    height: ${({ $isExpanded }) => ($isExpanded ? '100%' : '556px')};
  }
`

StyledPriceChart.defaultProps = {
  height: '70%',
}
