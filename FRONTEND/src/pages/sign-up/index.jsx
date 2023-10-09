import { useCallback, useRef } from 'react'

import { Container, Content } from './styles'

import { Button, Input } from '../../shared/components'

import { MdOutlineMailOutline } from 'react-icons/md'

import { AiOutlineArrowRight, AiOutlineArrowLeft, AiFillLock } from 'react-icons/ai'

import { FaUserAlt } from 'react-icons/fa'

import { Form } from '@unform/web'

import * as Yup from 'yup'

import getValidationErrors from '../../shared/utils/getValidationErrors'

import logo from './../../assets/logo.png'

export const SignUp = () => {
  const formRef = useRef(null)
  const handleSubmit = useCallback(async (formData) => {
    try {
      console.log(formData)

      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        name: Yup.string().required('nome obrigatorio'),
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um email válido'),
        password: Yup.string().required('Senha obrigatória').min(6, 'senha com minimo de 8 caracteres'),
        confirmPassword: Yup.string().required('Senha obrigatória').min(6, 'senha com minimo de 8 caracteres')

      })

      await schema.validate(formData, { abortEarly: false })
      const { email, password } = formData

      console.log(email, password)

    } catch (err) {
      console.log(err)
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors)
        return
      }
    }
  }, [])

  return (
    <Container>
      <Content>
        <img src={logo} alt="planetMotorhome" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>faça seu cadastro</h1>
          <Input name="name" type="string" placeholder="Digite seu nome" icon={FaUserAlt} />
          <Input name="email" type="email" placeholder="Digite seu email" icon={MdOutlineMailOutline} />
          <Input name="password" type="password" placeholder="Digite sua senha" icon={AiFillLock} />
          <Input name="confirmPassword" type="password" placeholder="confirme sua senha" icon={AiFillLock} />
          <Button type="submit">entrar <AiOutlineArrowRight size={12}></AiOutlineArrowRight></Button>
          <Button type="button"><AiOutlineArrowLeft size={12} />já tem cadastro </Button>
        </Form>
      </Content>
    </Container>
  )
}
