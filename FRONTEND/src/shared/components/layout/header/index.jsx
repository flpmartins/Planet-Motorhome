
import { FiEdit } from 'react-icons/fi'
import { useTheme } from 'styled-components'

import { Link } from 'react-router-dom'

import { useAuth } from '../../../hooks/auth'
import { Container, ActionsProfileContainer, ImageContainer, Image } from './styles'
export const Header = () => {
  const { user } = useAuth()
  const theme = useTheme()

  return (
    <Container>
      <ImageContainer>

        <Image src={
          user.avatar
            ? user.avatar
            : `https://ui-avatars.com/api/?font-size=0.33&background=${theme.secondary.substring(
              1,
              theme.primary.length,
            )}&color=${theme.contrast.substring(
              1,
              theme.contrast.length,
            )}&name=${user.name}`
        }
          alt={user.name} />
      </ImageContainer >
      <ActionsProfileContainer>
        <strong> Olá, </strong>
        <Link to="/profile">
          <FiEdit />
          <span>{user.name}</span>
        </Link>
      </ActionsProfileContainer>

    </Container >
  )
}