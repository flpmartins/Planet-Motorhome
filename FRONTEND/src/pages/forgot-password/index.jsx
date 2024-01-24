import { useCallback, useRef } from 'react'
import { Container, Content } from './styles'
import { Button, Input } from '../../shared/components'
import { useNavigate } from 'react-router-dom'
import { forgotPassword } from '../../api/planet-motorhome-api'
import { Link } from 'react-router-dom'
import { MdOutlineMailOutline } from 'react-icons/md'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { useToast } from '../../shared/hooks/toast'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import getValidationErrors from '../../shared/utils/getValidationErrors'
import { Box, Divider } from '@mui/material'
import logo from './../../assets/logo.png'
import background from '../../assets/background.png'
export const Forgot = () => {
  const formRef = useRef(null)
  const navigate = useNavigate()

  const { addToast } = useToast()

  const handleSubmit = useCallback(
    async (formData) => {
      try {
        console.log(formData)

        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email válido'),
        })

        await schema.validate(formData, { abortEarly: false })

        const { email } = formData

        await forgotPassword({ email })

        addToast({
          type: 'success',
          title: 'email enviado com sucesso',
        })
        navigate('/')

      } catch (err) {
        console.log(err)
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)
          formRef.current?.setErrors(errors)

        }
        addToast({
          type: 'error',
          title: 'Erro ao enviar email',
          description: 'Ocorreu erro ao enviar o email, envie um email valido',
        })
      }
    },
    [addToast]
  )

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
          <Form ref={formRef} onSubmit={handleSubmit} >
            <h1 style={{
              fontWeight: "bold",
            }}>Recuperar Senha</h1>

            <br />
            <Divider color='717339' width='80%' />

            <br />
            <Input name="email" type="email" placeholder="Digite seu email" icon={MdOutlineMailOutline} />
            <Button type="submit">enviar<AiOutlineArrowRight size={12}></AiOutlineArrowRight></Button>
            <Link to="/" style={{ color: 'white', textAlign: 'center' }}><AiOutlineArrowLeft size={12} style={{ marginRight: '5px' }}></AiOutlineArrowLeft>voltar para login</Link>
            <br />
          </Form>
        </Content>
      </Box>
    </Container >
  )
}
