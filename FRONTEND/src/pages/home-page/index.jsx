import { Header, Menu, MenuIcon, Container, CampText, Content } from "./styles"

import { GrInstagram, GrFacebook } from "react-icons/gr"

import { PiMagnifyingGlassBold } from "react-icons/pi"

import { Button } from '../../shared/components/form/button'

import logoPage from '../../assets/logo-page.png'

export const HomePage = () => {
  return (
    <Container>
      <Header>
        <img src={logoPage} alt="teste" />
        <Menu>
          <Button>Sobre nós</Button>
          <Button>Serviços</Button>
          <Button>produtos</Button>
          <Button>contato</Button>
        </Menu>
        <MenuIcon>
          <Button><GrInstagram size={20}></GrInstagram></Button>
          <Button><GrFacebook size={20}></GrFacebook></Button>
          <Button><PiMagnifyingGlassBold size={20}></PiMagnifyingGlassBold></Button>
        </MenuIcon>
      </Header>
      <Content>
        <img src={logoPage} alt="" />
        <CampText>
          <h1>MotorHome</h1>
          <br />
          <h2>uma casa sobre rodas!</h2>
          <br />
          <p>  O motorhome, também conhecido como casa sobre rodas, é uma forma incrivelmente versátil e conveniente de viajar e explorar o mundo. Esses veículos são projetados para oferecer uma experiência de viagem única, combinando o conforto de uma casa com a mobilidade de um veículo motorizado.

            Um motorhome típico inclui comodidades essenciais, como quartos, banheiros, cozinhas compactas e áreas de estar, permitindo que os viajantes levem o conforto de casa para qualquer lugar que desejem ir. Com uma ampla variedade de tamanhos e layouts disponíveis, os motorhomes atendem às necessidades de uma variedade de viajantes, desde casais em busca de aventuras até famílias inteiras em férias memoráveis.</p>
        </CampText>
      </Content>
    </Container>
  )
}
