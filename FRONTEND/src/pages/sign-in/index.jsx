import React, { useRef, useCallback, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from '@unform/web';
import { gapi } from 'gapi-script';
import * as Yup from 'yup';
import { useAuth } from '../../shared/hooks/auth';
import { useToast } from '../../shared/hooks/toast';
import getValidationErrors from '../../shared/utils/getValidationErrors';
import { Input, Button, Login } from '../../shared/components';

import { MdOutlineMailOutline } from 'react-icons/md';
import { AiFillLock, AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { Box, Divider } from '@mui/material';
import { Container, Content, Loginstyle } from './styles';
import logo from './../../assets/logo.png';
import background from './../../assets/background.png';
import display from 'material/src/view/display';

const clientId = "949022787391-reo50io8kup6ec5gmcu2ss93phdb1v79.apps.googleusercontent.com";

export const SignIn = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    }
    gapi.load("client:auth", start)
  }, []);

  const formRef = useRef(null);
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(async (formData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um email válido'),
        password: Yup.string()
          .required('Senha obrigatória')
          .min(6, 'senha com mínimo de 8 caracteres')
      });

      await schema.validate(formData, { abortEarly: false });
      const { email, password } = formData;

      await signIn(email, password);

      addToast({
        type: 'success',
        title: 'Usuário logado com sucesso!',
      });

      navigate('/home');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }

      addToast({
        type: 'error',
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
      });
    }
  }, [signIn, addToast, navigate]);

  return (

    <Container>
      <Box
        sx={{
          position: 'fixed',
          display: 'flex',
          zIndex: -1,
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          width: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          filter: 'blur(2px)',
        }}
      />
      <Box sx={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        position: 'fixed',
        margin: 'auto',

      }}>
        <Content>
          <img src={logo} alt="planetMotorhome" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1 style={{
              fontWeight: "bold",
            }}>faça seu login</h1>
            <Divider color='717339' width='80%' />
            <br />
            <Input name="email" type="email" placeholder="Digite seu email" icon={MdOutlineMailOutline} />
            <Input name="password" type="password" placeholder="Digite sua senha" icon={AiFillLock} />
            <Link to="/forgot-password" style={{ marginBottom: '10px', display: 'flex', justifyContent: 'flex-end' }}>Esqueci minha senha</Link>
            <Button type="submit">entrar <AiOutlineArrowRight size={12}></AiOutlineArrowRight></Button>
            <Link to="/sign-up" style={{ color: 'white', marginTop: '10px' }}>
              <AiOutlineArrowLeft size={12} style={{ marginRight: '5px' }} />
              faça seu cadastro
            </Link>
            <Loginstyle>
              <Login />
            </Loginstyle>
          </Form>
        </Content>
      </Box>
    </Container >
  );
};
