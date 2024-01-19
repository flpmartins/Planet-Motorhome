import modelsImage from './../../assets/background.png';
import factoryImage from './../../assets/factory.jpg';
import campingImage from './../../assets/camping.jpg';
import { Link } from 'react-router-dom'

import {
  Container,
  Content,
  ContentImage,
  ImagesContainer,
  ImgContainer,
  ImgOverlay,
  Img,
  Paragraph,
  Title
} from './styles';

export const Dashboard = () => {
  return (
    <Container>
      <Content>
        <br />
        <Title>Explorando o Mundo com Estilo</Title>

        <br />
        <Paragraph>
          Descubra a liberdade de viajar com conforto e estilo em um motorhome.
          Com a nossa frota premium, você está pronto para embarcar em uma jornada
          inesquecível. Planeje sua rota, faça memórias duradouras e viva a
          experiência única do nomadismo moderno.
        </Paragraph>
        <br />
        <ContentImage>

          <ImagesContainer>
            <Link to="/campings">
              <ImgContainer>
                <Img src={campingImage} alt="Camping" />
                <ImgOverlay />


              </ImgContainer>
            </Link>
            <Link to="/factory">
              <ImgContainer>
                <Img src={factoryImage} alt="Factory" />
                <ImgOverlay />

              </ImgContainer>
            </Link>
            <Link to="/models">
              <ImgContainer>
                <Img src={modelsImage} alt="Models" />
                <ImgOverlay />

              </ImgContainer>
            </Link>
          </ImagesContainer>
        </ContentImage>
      </Content>
    </Container>
  );
};
