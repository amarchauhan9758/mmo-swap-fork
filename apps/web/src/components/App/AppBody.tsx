import styled from 'styled-components'
import { Card } from '@pancakeswap/uikit'

export const BodyWrapper = styled(Card)`
  border-radius: 0px;
  max-width: 436px;
  width: 100%;
  z-index: 1;
  box-shadow: 0px -1px 2px 1px #1be0aa, 0px -2px 3px 0px #1be0aa;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
