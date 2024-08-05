import ko from './messages/ko.json'

type Messages = typeof ko

declare global {
  // Use type safe message keys with `next-intl`
  type IntlMessages = Messages

  namespace NodeJS {
    interface ProcessEnv {
      NAVER_CLIENT_ID: string
      NAVER_CLIENT_SECRET: string
    }
  }
}
