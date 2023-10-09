import { useField } from '@unform/core'
import { useRef, useEffect, useState, useCallback } from 'react'
import { Container, Error } from './styles'
import { FiAlertCircle } from 'react-icons/fi'
import { useTheme } from 'styled-components'

export const Input = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef(null)

  const theme = useTheme()

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const { fieldName, registerField, error, defaultValue } = useField(name)

  const handleOnFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleOnBlur = useCallback(() => {
    setIsFocused(false)
    setIsFilled(!!inputRef.current?.value)
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  return (
    <Container isFocused={isFocused} isFilled={isFilled} isErrored={!!error}>
      {Icon && <Icon size={20} />}
      <input
        type="text"
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
      />


      {error && (
        <Error title={error}>
          <FiAlertCircle color={theme.error_title} size={20} />
        </Error>
      )}
    </Container>
  )
}
