import { SubMenuItems } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { PageMeta } from 'components/Layout/Page'
import { useRouter } from 'next/router'
import { useFetchIfo } from 'state/pools/hooks'
import Hero from './components/Hero'
import IfoProvider from './contexts/IfoContext'

export const IwoPageLayout = ({ children }) => {
  const { t } = useTranslation()
  const router = useRouter()
  const isExact = router.route === '/iwo'
  useFetchIfo()

  return (
    <IfoProvider>
      <PageMeta />
      <SubMenuItems
        items={[
          {
            label: t('Active'),
            href: '/iwo',
          },
          {
            label: t('Inactive'),
            href: '/iwo/history',
          },
        ]}
        activeItem={isExact ? '/iwo' : '/iwo/history'}
      />
      <Hero />
      {children}
    </IfoProvider>
  )
}
