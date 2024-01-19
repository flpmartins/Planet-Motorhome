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

import { Container, Content, Loginstyle } from './styles';
import logo from './../../assets/logo.png';

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
      <Content>
        <img src={logo} alt="planetMotorhome" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>faça seu login</h1>
          <Input name="email" type="email" placeholder="Digite seu email" icon={MdOutlineMailOutline} />
          <Input name="password" type="password" placeholder="Digite sua senha" icon={AiFillLock} />
          <Link to="/forgot-password">Esqueci minha senha</Link>
          <Button type="submit">entrar <AiOutlineArrowRight size={12}></AiOutlineArrowRight></Button>
          <Button type="button">
            <AiOutlineArrowLeft size={12} style={{ marginRight: '5px' }}></AiOutlineArrowLeft>
            <Link to="/sign-up" style={{ color: 'white' }}>faça seu cadastro</Link>
          </Button>
          <Loginstyle>
            <Login />
          </Loginstyle>
        </Form>
      </Content>
    </Container>
  );
};
