import { Box } from 'styled-system/jsx'

const RoutinePage = ({
  params: { id },
}: {
  params: {
    id: string
  }
}) => {
  return <Box>{id}</Box>
}

export default RoutinePage
