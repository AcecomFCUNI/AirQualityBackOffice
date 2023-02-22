import type { FC } from 'react'
import { Box } from '@mui/material'
import { useIsSubmitting } from 'remix-validated-form'

type SubmitButtonProps = {
  boxClassName: string
  buttonClassName: string
  buttonContent: string
  buttonContentLoading: string
  solvedCaptcha: boolean
}

const SubmitButton: FC<SubmitButtonProps> = props => {
  const {
    boxClassName,
    buttonClassName,
    buttonContent,
    buttonContentLoading,
    solvedCaptcha
  } = props
  const isSubmitting = useIsSubmitting()

  return (
    <Box className={boxClassName}>
      <button
        disabled={isSubmitting || !solvedCaptcha}
        className={buttonClassName}
      >
        {isSubmitting ? buttonContentLoading : buttonContent}
      </button>
    </Box>
  )
}

export { SubmitButton }
