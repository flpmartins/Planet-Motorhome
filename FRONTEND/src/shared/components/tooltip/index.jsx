import { Container } from './styles'

export const Tooltip = ({ children, title, className }) => {
  return (
    <Container className={className}>
      <span>{title}</span>{children}
    </Container>)

}