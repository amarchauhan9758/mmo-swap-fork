import { Heading, Flex, Text, useMatchBreakpoints } from '@pancakeswap/uikit'

const StatCardContent: React.FC<
  React.PropsWithChildren<{ headingText: string; bodyText: string; highlightColor: string }>
> = ({ headingText, bodyText, highlightColor }) => {
  const { isMobile, isTablet } = useMatchBreakpoints()
  const isSmallerScreen = isMobile || isTablet
  const split = headingText.split(' ')
  const lastWord = split.pop()
  const remainingWords = split.slice(0, split.length).join(' ')

  return (
    <Flex
      minHeight={[null, null, null, '168px']}
      flexDirection="column"
      justifyContent="flex-end"
      mt={[null, null, null, '64px']}
    >
      {isSmallerScreen && remainingWords.length > 13 ? (
        <Heading textAlign="left" scale="xl" color="#1BE0AA">
          {remainingWords}
        </Heading>
      ) : (
        <Heading scale="xl" textAlign="left" color="#1BE0AA">
          {remainingWords}
        </Heading>
      )}
      <Heading scale="xl" mb="24px" textAlign="left">
        {lastWord}
      </Heading>
      <Text color="textSubtle" textAlign="left">
        {bodyText}
      </Text>
    </Flex>
  )
}

export default StatCardContent
