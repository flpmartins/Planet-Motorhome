import { ButtonContainer } from './styles'

export const Button = ({ children, ...rest }) => {
  return <ButtonContainer {...rest}>{children}</ButtonContainer>
}