import { Colors, Heading, TextProps } from '@pancakeswap/uikit'
import useTheme from 'hooks/useTheme'
import { textSpanEnd } from 'typescript'

interface HeadingProps extends TextProps {
  text: string
  firstColor?: keyof Colors
}

const ColoredWordHeading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  text,
  firstColor,
  mb = '24px',
  ...props
}) => {
  const { theme } = useTheme()
  const split = text.split(' ')
  let firstWord = split[0]
  firstWord += ' ' + split[1]
  const remainingWords = split.slice(2).join(' ')
  // const displayedColor = (theme.colors[firstColor] as string) ?? theme.colors.secondary

  return (
    <Heading scale="xl" mb={mb} {...props} textTransform="uppercase">
      <h1 style={{ color: '#fff' }}>{firstWord} </h1>
      {remainingWords}
    </Heading>
  )
}

export default ColoredWordHeading
