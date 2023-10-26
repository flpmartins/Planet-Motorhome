import { Aside } from './aside'
import { Content } from './content'
import { Header } from './header'

import { GridContainer } from './styles'

export const Layout = ({ children }) => {
  return (
    <GridContainer>
      <Aside />
      <Header />
      <Content>{children}</Content>
    </GridContainer>
  )
}