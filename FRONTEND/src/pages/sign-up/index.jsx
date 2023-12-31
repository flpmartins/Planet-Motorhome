import { useCallback, useRef, useState } from 'react'

import { Container, Content } from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Input } from '../../shared/components'
import { MdOutlineMailOutline } from 'react-icons/md'
import { AiOutlineArrowRight, AiOutlineArrowLeft, AiFillLock } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'

import { Form } from '@unform/web'

import * as Yup from 'yup'

import getValidationErrors from '../../shared/utils/getValidationErrors'

import logo from './../../assets/logo.png'

import { signUp } from '../../api/planet-motorhome-api'


export const SignUp = () => {

  const formRef = useRef(null)
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = useCallback(
    async (formData) => {
      try {

        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          name: Yup.string().required('nome obrigatorio'),
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email válido'),
          password: Yup.string()
            .required('Senha obrigatória')
            .min(6, 'senha com minimo de 8 caracteres'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')
              , null], 'Passwords precisam ser iguais',)
        })

        await schema.validate(formData, { abortEarly: false })

        const { name, email, password } = formData

        await signUp({ name, email, password })

        navigate('/')

      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const error = getValidationErrors(err)
          formRef.current.setErrors(error)
          console.log(err)
          return
        }
        console.error(err)
      }
    },
    [navigate]
    ,
  )
  const handleShowPassword = useCallback(() => {
    setShowPassword((prevState) => !prevState)
  }, [])

  return (
    <Container>
      <Content>
        <img src={logo} alt="planetMotorhome" />

        <Form ref={formRef} onSubmit={handleSubmit}>

          <h1>faça seu cadastro</h1>

          <Input name="name" type="text"
            placeholder="Digite seu nome" icon={FaUserAlt} />
          <Input name="email" type="email"
            placeholder="Digite seu email" icon={MdOutlineMailOutline} />
          <Input name="password" type={showPassword ? 'text' : 'password'}
            placeholder="Digite sua senha" icon={AiFillLock} />

          <Input name="confirmPassword" type={showPassword ? 'text' : 'password'}
            placeholder="confirme sua senha" icon={AiFillLock} />

          <span onClick={handleShowPassword}>mostrar senha</span>

          <Button type="submit">entrar <AiOutlineArrowRight size={12}></AiOutlineArrowRight></Button>

          <Button type="button">
            <AiOutlineArrowLeft size={12} />
            <Link to="/" style={{ color: 'white' }}>já tem cadastro</Link>
          </Button>

        </Form>
      </Content>
    </Container>
  )
}
