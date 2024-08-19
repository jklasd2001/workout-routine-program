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

      <Heading size="lg">푸시 데이</Heading>

      <Box>플랫 벤치 프레스</Box>

      <Box>밀리터리 프레스</Box>

      <Box>스쿼트</Box>

      <Box>스미스머신 런지</Box>

      <Box>케이블 푸시 다운</Box>

      <Heading size="lg">Pull Day</Heading>

      <Box>어시스트 풀업</Box>

      <Box>데드리프트 or 시티드 로우</Box>

      <Box>사이드 레터럴 레이즈</Box>

      <Box>페이스 풀</Box>

      <Box>바벨 컬</Box>
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
