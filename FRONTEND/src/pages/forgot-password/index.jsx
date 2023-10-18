import { useCallback, useRef } from 'react'

import { Container, Content } from './styles'
import { Button, Input } from '../../shared/components'
import { useNavigate } from 'react-router-dom'
import { forgotPassword } from '../../api/planet-motorhome-api'

import { MdOutlineMailOutline } from 'react-icons/md'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

import { useToast } from '../../shared/hooks/toast'

import { Form } from '@unform/web'

import * as Yup from 'yup'

import getValidationErrors from '../../shared/utils/getValidationErrors'

import logo from './../../assets/logo.png'

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
      <Content>
        <img src={logo} alt="planetMotorhome" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>esqueci minha senha</h1>
          <Input name="email" type="email" placeholder="Digite seu email" icon={MdOutlineMailOutline} />
          <Button type="submit">enviar<AiOutlineArrowRight size={12}></AiOutlineArrowRight></Button>
          <Button type="button"> <AiOutlineArrowLeft size={12} />voltar para login </Button>
        </Form>
      </Content>
    </Container>
  )
}
