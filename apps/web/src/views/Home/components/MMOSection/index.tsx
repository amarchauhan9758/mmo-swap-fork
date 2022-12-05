import { Flex, Text, Button, Link, NextLinkFromReactRouter as RouterLink } from '@pancakeswap/uikit'
import CompositeImage, { CompositeImageProps } from '../CompositeImage'
import ColoredWordHeading from '../ColoredWordHeading'

interface MMOSectionButton {
  to: string
  text: string
  external: boolean
}

export interface MMOSectionProps {
  headingText: string
  bodyText: string
  reverse: boolean
  primaryButton: MMOSectionButton
  secondaryButton: MMOSectionButton
  images: CompositeImageProps
}

const MMOSection: React.FC<React.PropsWithChildren<MMOSectionProps>> = (props) => {
  const { headingText, bodyText, reverse, primaryButton, secondaryButton, images } = props

  return (
    <Flex flexDirection="column">
      <Flex
        flexDirection={['column-reverse', null, null, reverse ? 'row' : 'row']}
        alignItems={['flex-start', null, null, 'center']}
        justifyContent="center"
      >
        <Flex
          flexDirection="column"
          flex="1"
          ml={[null, null, null, reverse && null]}
          mr={[null, null, null, !reverse && '64px']}
          alignSelf={['flex-start', null, null, 'center']}
        >
          <ColoredWordHeading text={headingText} color="#1BE0AA" />
          <Text color="textSubtle" mb="24px">
            {bodyText}
          </Text>
          <Flex>
            <Button mr="16px">
              {primaryButton.external ? (
                <Link external href={primaryButton.to}>
                  <Text color="card" bold fontSize="16px">
                    {primaryButton.text}
                  </Text>
                </Link>
              ) : (
                <RouterLink to={primaryButton.to}>
                  <Text color="card" bold fontSize="16px">
                    {primaryButton.text}
                  </Text>
                </RouterLink>
              )}
            </Button>
            {secondaryButton.external ? (
              <Link external href={secondaryButton.to}>
                {secondaryButton.text}
              </Link>
            ) : (
              <RouterLink to={secondaryButton.to}>{secondaryButton.text}</RouterLink>
            )}
          </Flex>
        </Flex>
        <Flex
          height={['192px', null, null, '100%']}
          width={['192px', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
        >
          <CompositeImage {...images} />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default MMOSection
