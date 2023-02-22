import type { DetailedHTMLProps, FC } from 'react'
import { useField } from 'remix-validated-form'

import { Box } from '@mui/material'
import type { Theme } from '@mui/material'

import { makeStyles } from '~/utils'
import type { InputHTMLAttributes } from 'react'

type StylesProps = {
  marginBottom: number
  marginTop: number
}

const useStyles = makeStyles<StylesProps>()((theme: Theme, props) => ({
  inputWrapper: {
    marginBottom: props.marginBottom,
    marginTop: props.marginTop,
    placeContent: 'flex-end'
  }
}))

export type FormInputProps = {
  name: string
  inputClassName: string
  message?: boolean
  readonly?: boolean
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const FormInput: FC<FormInputProps> = props => {
  const {
    name,
    inputClassName,
    message = false,
    placeholder,
    type = 'text',
    value,
    readonly = false,
    ...rest
  } = props
  const { error, getInputProps } = useField(name)
  const { classes } = useStyles({
    marginBottom: error ? 0 : 24,
    marginTop: message ? 40 : 0
  })

  return (
    <Box className={classes.inputWrapper}>
      <input
        placeholder={placeholder}
        className={inputClassName}
        type={type}
        name={name}
        value={value}
        readOnly={readonly}
        {...getInputProps({ id: name })}
        {...rest}
      />
      {error ? (
        <p
          style={{
            color: 'red',
            fontSize: 12,
            marginTop: 6,
            marginBottom: 6
          }}
        >
          {error}
        </p>
      ) : null}
    </Box>
  )
}

export { FormInput }
