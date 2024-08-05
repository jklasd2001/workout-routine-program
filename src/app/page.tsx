import { Heading } from 'src/components/ui/heading'
import { Box } from 'styled-system/jsx'

// import { RoutineCard } from './components/routine-card'

const Home = async () => {
  // const data = await getRoutines()

  // console.log(data)

  return (
    <Box css={{}}>
      <Heading size="lg" css={{ mb: 2 }}>
        내 루틴
      </Heading>
    </Box>
  )
}

// export const getRoutines = async () => {
//   const res = await fetch('http://localhost:3000/routines')

//   console.log(res.ok)

//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   return res.json()
// }

export default Home
