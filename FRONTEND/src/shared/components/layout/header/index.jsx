import { useState, useEffect } from 'react'

import { FiEdit } from 'react-icons/fi'
import { useTheme } from 'styled-components'
import { enviroments } from '../../../environments'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../hooks/auth'

import {
  Container,
  ActionsProfileContainer,
  ImageContainer,
  Image,
  NavLinks,
} from './styles'

export const Header = () => {
  const { user } = useAuth()

  const theme = useTheme()
  const [picture, setPicture] = useState(() => {
    const appData = JSON.parse(localStorage.getItem(enviroments.APP_NAME))

    if (appData) {
      return appData.user.avatar
    }

    return ''
  })

  useEffect(() => {
    setPicture(() => {
      const appData = JSON.parse(localStorage.getItem(enviroments.APP_NAME))

      if (appData) {
        return appData.user.avatar
      }

      return ''
    })
  }, [user.avatar])

  return (
    <Container>
      <ImageContainer>
        <Image to="/profile"
          src={
            picture
              ? `${enviroments.URL_API_PLANETMOTORHOME + '/files/' + picture}`
              : `https://ui-avatars.com/api/?font-size=0.33&background=${theme.background.substring(
                1,
                theme.background.length,
              )}&color=${theme.contrast.substring(
                1,
                theme.contrast.length,
              )}&name=${user.name}`
          }
          alt={user.name}
        />
      </ImageContainer>

      <NavLinks>
        <Link to="/about">Sobre Nós</Link>
        <Link to="/campings">Campings</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/team">Equipe</Link>
      </NavLinks>

      <ActionsProfileContainer>
        <strong> Olá, </strong>
        <Link to="/profile">
          <FiEdit />
          <span>{user.name}</span>
        </Link>
      </ActionsProfileContainer>
    </Container>
  )
}
