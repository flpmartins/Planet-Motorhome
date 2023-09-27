import { useCallback, useRef } from 'react'

import { Container, Content } from './styles'

import { Button, Input } from '../../shared/components'

import { MdOutlineMailOutline } from 'react-icons/md'

import { AiOutlineArrowRight, AiFillLock } from 'react-icons/ai'

import { Form } from '@unform/web'

import * as Yup from 'yup'

import getValidationErrors from '../../shared/utils/getValidationErrors'

import logo from './../../assets/logo.png'
import { Link } from 'react-router-dom'

export const SignIn = () => {
  const formRef = useRef(null)
  const handleSubmit = useCallback(async (formData) => {
    try {
      console.log(formData)

      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um email válido'),
        password: Yup.string().required('Senha obrigatória')
      })

      await schema.validate(formData, { abortEarly: false })
    } catch (err) {
      console.log(err) // <-- Correção: usar err em vez de error
      if (err instanceof Yup.ValidationError) { // <-- Correção: verificar o tipo de erro corretamente
        const errors = getValidationErrors(err)

        formRef.current?.setErrors(errors)
      }
    }
  }, [])

  return (
    <Container>
      <Content>
        <img src={logo} alt="planetMotorhome" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Log In</h1>
          <Input name="email" type="email" placeholder="Digite seu email" icon={MdOutlineMailOutline} />
          <Input name="password" type="password" placeholder="Digite sua senha" icon={AiFillLock} />
          <Button type="submit">To Enter <AiOutlineArrowRight size={12}></AiOutlineArrowRight></Button>
          <Button type="button">Register <AiOutlineArrowRight size={12} /></Button>
        </Form>
      </Content>
    </Container>
  )
}
