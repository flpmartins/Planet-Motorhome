import { useCallback, useRef } from 'react'

import { Link } from 'react-router-dom'
import { Container, Content } from './styles'
import { Button, Input } from '../../shared/components'

import { MdOutlineMailOutline } from 'react-icons/md'
import { AiOutlineArrowRight, AiOutlineArrowLeft, AiFillLock } from 'react-icons/ai'

import { useAuth } from '../../shared/hooks/auth'
import { useToast } from '../../shared/hooks/toast'

import { Form } from '@unform/web'

import * as Yup from 'yup'

import getValidationErrors from '../../shared/utils/getValidationErrors'

import logo from './../../assets/logo.png'

export const SignIn = () => {
  const formRef = useRef(null)

  const { signIn } = useAuth()
  const { addToast } = useToast()

  const handleSubmit = useCallback(async (formData) => {
    try {
      console.log(formData)

      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um email válido'),
        password: Yup.string()
          .required('Senha obrigatória')
          .min(6, 'senha com minimo de 8 caracteres')
      })

      await schema.validate(formData, { abortEarly: false })

      const { email, password } = formData

      await signIn(email, password)

      addToast({
        type: 'success',
        title: 'Usuário logado com sucesso!',
      })

    } catch (err) {
      console.log(err)
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors)

      }
      addToast({
        type: 'error',
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
      })
    }
  },
    [signIn, addToast]
  )

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
          <Button type="button"><AiOutlineArrowLeft size={12} style={{ marginRight: '5px' }}></AiOutlineArrowLeft>
            <Link to="/sign-up" style={{ color: 'white' }}>faça seu cadastro</Link>
          </Button>
        </Form>
      </Content>
    </Container>
  )
}
