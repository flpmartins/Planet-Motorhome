import logo from './../../assets/logo.png'

import { AiOutlineArrowRight } from 'react-icons/ai'

import { Container, Content } from './styles'

export const SignUp = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="teste" />
        <form>
          <h1>faça seu cadastro</h1>
          <input type="name" placeholder='digite seu nome' />
          <input type="email" placeholder='digite seu email' />
          <input type="password" placeholder='digite sua senha' />
          <button>to enter</button>
        </form>
      </Content>
    </Container>
  )
}
