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
      <NavLinks>
        <Link to="/about">Sobre Nós</Link>
        <Link to="/campings">Campings</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/team">Equipe</Link>
      </NavLinks>
    </Container>
  )
}