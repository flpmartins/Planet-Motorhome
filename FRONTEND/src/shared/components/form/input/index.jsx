import { useField } from '@unform/core'
import { useRef, useEffect, useState, useCallback } from 'react'
import { Container } from './styles'

export const Input = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef(null)
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
    <Container isFocused={isFocused} isFilled={isFilled}>
      {Icon && <Icon size={20} />}
      <input
        type="text"
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
      />
    </Container>
  )
}
