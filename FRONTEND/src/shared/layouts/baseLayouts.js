import { Container } from './styles'

export const BaseLayout = ({ children, toolbar }) => {
  return (
    <Container>
      {toolbar && <div>{toolbar}</div>}

      {children}
    </Container>
  )
}