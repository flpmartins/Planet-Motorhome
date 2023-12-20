import { FaHome } from 'react-icons/fa'
import { ImExit } from 'react-icons/im'
import { MdFactory } from "react-icons/md"
import { FaTrailer } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/auth'

import { Container, Content, List, ListItem, ExitButton } from './styles'

export const Aside = () => {
  const navigate = useNavigate()

  const { signOut } = useAuth()

  return (
    <Container>
      <Content>
        <List>
          <ListItem onClick={() => navigate('/home')}>
            <FaHome />
            <span>Início</span>
          </ListItem>
          <br />
          <ListItem onClick={() => navigate('/home')}>
            <MdFactory />
            <span>Fabricantes</span>
          </ListItem>
          <br />
          <ListItem onClick={() => navigate('/home')}>
            <FaTrailer />
            <span>Modelos</span>
          </ListItem>
          <br />
        </List>
        <ExitButton onClick={signOut}>
          <span>
            <ImExit />
            Sair
          </span>
        </ExitButton>
      </Content>
    </Container>
  )
}