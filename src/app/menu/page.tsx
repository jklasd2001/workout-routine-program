'use client'

import Image from 'next/image'
import { useSession } from 'next-auth/react'

import packageJson from 'package.json'
import { Text } from 'src/components/ui'
import { Heading } from 'src/components/ui/heading'
import { css } from 'styled-system/css'
import { Divider, Flex } from 'styled-system/jsx'

const MenuPage = () => {
  const { data: session } = useSession()

  return (
    <div>
      <Heading>프로필</Heading>

      <Flex css={{ alignItems: 'center', gap: 4 }}>
        {session?.user?.image && (
          <Image
            src={session?.user?.image}
            alt="profile image"
            width={60}
            height={60}
            quality={100}
            priority={true}
            className={css({
              w: '60px',
              h: '60px',
              objectFit: '',
              rounded: 'full',
            })}
          />
        )}

        <div>{session?.user?.email}</div>
      </Flex>

      <Divider />

      <Flex>
        <Text>앱 버전</Text>

        <Text>{packageJson.version}</Text>
      </Flex>
    </div>
  )
}

export default MenuPage
