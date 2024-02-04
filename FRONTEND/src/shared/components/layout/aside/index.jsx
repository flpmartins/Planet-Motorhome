import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Button, Divider, Drawer, } from '@material-ui/core';

import { FaHome } from 'react-icons/fa';
import { MdFactory } from "react-icons/md";
import { FaTrailer } from "react-icons/fa";
import { ImExit } from 'react-icons/im';
import { useTheme } from 'styled-components'
import { useDrawerContext } from '../../../hooks/DrawerContext';

import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/auth';
import { Container, Content, ExitButton, ActionsProfileContainer, Img } from './styles';
import { FiEdit } from 'react-icons/fi'
import { enviroments } from '../../../environments'

export const Aside = () => {
  const { user } = useAuth()
  const navigate = useNavigate();
  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

  const { signOut } = useAuth();
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
  const menuItems = [
    { icon: <FaHome style={{ fontSize: '28px', color: '#717339', fontWeight: 'bold' }} />, text: 'INÍCIO', path: '/home' },
    { icon: <MdFactory style={{ fontSize: '28px', color: '#717339', fontWeight: 'bold' }} />, text: 'FABRICANTES', path: '/list/factory' },
    { icon: <FaTrailer style={{ fontSize: '28px', color: '#717339', fontWeight: 'bold' }} />, text: 'MEUS MODELOS', path: '/models/:id' },
    { icon: <MdFactory style={{ fontSize: '28px', color: '#717339', fontWeight: 'bold' }} />, text: 'MEUS FABRICANTES', path: '/factory' },
  ];

  return (
    <Container>
      <Drawer anchor="left" open={isDrawerOpen} onClose={() => toggleDrawerOpen(false)}>
        <Content>
          <Img src={
            picture
              ? `${enviroments.URL_API_PLANETMOTORHOME + '/files/' + picture}`
              : `https://ui-avatars.com/api/?font-size=.33&background=717339&color=fff&=${theme.background.substring(
                1,
                theme.background.length,
              )}&color=${theme.contrast.substring(
                1,
                theme.contrast.length,
              )}&name=${user.name}`
          }
            style={{
              background: theme.background.substring(1, theme.background.length),
              color: theme.contrast.substring(1, theme.contrast.length),
            }} alt="" />
          <br />
          <ActionsProfileContainer>
            <strong style={{
              color: 'white'
            }}> Olá, </strong>
            <Link to="/profile">
              <FiEdit />
              <span>{user.name}</span>
            </Link>
          </ActionsProfileContainer>
          <List>
            <Divider style={{ backgroundColor: 'white', margin: '16px 0' }} />

            {menuItems.map((item, index) => (
              <ListItem button key={index} onClick={() => navigate(item.path)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} style={{ fontSize: '18px', color: 'white' }} />
              </ListItem>
            ))}
          </List>

          <Divider style={{ backgroundColor: 'white', margin: '16px 0' }} />

          <ExitButton onClick={signOut}>

            <Button
              startIcon={<ImExit />}
              variant="contained"
              color="secondary"
              style={{ textTransform: 'none', fontSize: '18px', background: "#717339", borderRadius: "20px" }}
            >
              Sair
            </Button>
          </ExitButton>
        </Content>
      </Drawer>
    </Container>
  );
};