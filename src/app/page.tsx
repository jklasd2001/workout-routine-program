import { useTranslations } from 'next-intl'

import { Card } from 'src/components/ui'
import { Box } from 'styled-system/jsx'

const Home = () => {
  const t = useTranslations()

  return (
    <Box>
      <Card.Root>
        <Card.Header>asdasd</Card.Header>

        <Card.Body>aspodkaspok</Card.Body>

        <Card.Footer>aspodkaspok</Card.Footer>
      </Card.Root>
    </Box>
  )
}

export default Home
