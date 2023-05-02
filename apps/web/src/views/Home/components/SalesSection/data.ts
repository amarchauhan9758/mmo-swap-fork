import { TranslateFunction } from '@pancakeswap/localization'
import { SalesSectionProps } from '.'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('HASSLE-FREE GAMING LESS TIME SETTING UP, MORE TIME PLAYING!'),
  bodyText: t('Just connect your wallet and instantly unlock the ability to trade, play, and earn; no registration required. '),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: '#',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'MATIC', alt: t('MATIC token') },
      { src: 'USD', alt: t('USDC token') },
      { src: 'MOMO', alt: t('MOMO token') },
    ],
  },
})

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t(' MAKE CRYPTO WORK FOR YOU.'),
  bodyText: t('MMO Swap makes it easy to make your crypto work for you.'),
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: t('Explore'),
    external: false,
  },
  secondaryButton: {
    to: '#',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      // { src: 'pie', alt: t('Pie chart') },
      { src: 'FOLDER-TRANSPARENT', alt: t('Transparent folder') },
      { src: 'stocks', alt: t('Stocks chart') },
    ],
  },
})

export const cakeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('MMO makes our world go round.'),
  bodyText: t(
    'MMO token is at the heart of the MMOSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!',
  ),
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=137',
    text: t('Buy MMO'),
    external: false,
  },
  secondaryButton: {
    to: '#',
    text: t('Learn'),
    external: true,
  },

  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'MOMO', alt: t('Small 3d pancake') },
      // { src: 'top-right', alt: t('Small 3d pancake') },
      // { src: 'coin', alt: t('CAKE token') },
      // { src: 'top-left', alt: t('Small 3d pancake') },
    ],
  },
})
