import { forwardRef, Fragment } from 'react'

import { Center, styled } from 'styled-system/jsx'

import { Spinner } from 'src/components/ui'
import {
  Button as StyledButton,
  type ButtonProps as StyledButtonProps,
} from 'src/components/ui/primitives'

interface ButtonLoadingProps {
  loading?: boolean
  loadingText?: React.ReactNode
}

export interface ButtonProps extends StyledButtonProps, ButtonLoadingProps {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { loading, disabled, loadingText, children, ...rest } = props

  const trulyDisabled = loading || disabled

  return (
    <StyledButton disabled={trulyDisabled} ref={ref} {...rest}>
      {loading && !loadingText ? (
        <Fragment>
          <ButtonSpinner />
          <styled.span opacity={0}>{children}</styled.span>
        </Fragment>
      ) : loadingText ? (
        loadingText
      ) : (
        children
      )}
    </StyledButton>
  )
})

Button.displayName = 'Button'

const ButtonSpinner = () => (
  <Center
    inline={true}
    position="absolute"
    transform="translate(-50%, -50%)"
    top="50%"
    insetStart="50%"
  >
    <Spinner colorPalette="gray" />
  </Center>
)
