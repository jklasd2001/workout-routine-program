import { useTranslations } from 'next-intl'

import { Button } from 'src/components/ui'
import { Box } from 'styled-system/jsx'

const Home = () => {
  const t = useTranslations('HomePage')
  return (
    <Box>
      <Button>{t('title')}</Button>
    </Box>
  )
}

export default Home
