import { useCallback, useRef, useState } from 'react'

import { Container, Content } from './styles'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Input } from '../../shared/components'

import { useToast } from '../../shared/hooks/toast'

import { AiOutlineArrowRight, AiFillLock } from 'react-icons/ai'

import { Form } from '@unform/web'

import * as Yup from 'yup'

import getValidationErrors from '../../shared/utils/getValidationErrors'

import { Box, Divider } from '@mui/material'
import logo from './../../assets/logo.png'
import background from '../../assets/background.png'
import { resetPassword } from '../../api/planet-motorhome-api'


export const ResetPassword = () => {

  const formRef = useRef(null)
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)

  const { token } = useParams()

  const { addToast } = useToast()


  const handleSubmit = useCallback(
    async (formData) => {
      try {

        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          password: Yup.string()
            .required('Senha obrigatória')
            .min(6, 'senha com minimo de 8 caracteres'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')
              , null], 'Passwords precisam ser iguais',)
        })

        await schema.validate(formData, { abortEarly: false })

        const { password } = formData

        await resetPassword({ token, password })

        addToast({
          type: 'success',
          title: 'Senha resetada com sucesso',
        })

        navigate('/')
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const error = getValidationErrors(err)

          formRef.current.setErrors(error)
        }

        addToast({
          type: 'error',
          title: 'Erro no Reset',
          description:
            'Ocorreu um erro ao fazer o reset de senha, verifique seu email e informe o token correto',
        })
      }
    },
    [addToast, token],
  )
  const handleShowPassword = useCallback(() => {
    setShowPassword((prevState) => !prevState)
  }, [])

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
            }}>resete sua senha</h1>
            <br />
            <Divider color='717339' width='80%' />
            <br />
            <Input name="password" type={showPassword ? 'text' : 'password'}
              placeholder="Digite sua senha" icon={AiFillLock} />

            <Input name="confirmPassword" type={showPassword ? 'text' : 'password'}
              placeholder="confirme sua senha" icon={AiFillLock} />
            <span onClick={handleShowPassword}>
              mostrar senha</span>
            <Button type="submit">resetar <AiOutlineArrowRight size={12}></AiOutlineArrowRight></Button>
          </Form>
          <br />
        </Content>
      </Box>
    </Container>
  )
}
