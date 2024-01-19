import background from './../../assets/background.png';
import { Button } from '../../shared/components/form/button';

import {
  Container,
  Content,
  LeftContent,
  RightContent,
  Paragraph,
  Title,
  ImgContainer,
  ImgOverlay,
  Img,
  InfoText,
} from './styles';

export const Factorys = () => {
  return (
    <Container>
      <Content>
        <LeftContent>
          <Title>Explorando o Mundo com Estilo</Title>
          <Paragraph>
            Descubra a liberdade de viajar com conforto e estilo em um motorhome.
            Com a nossa frota premium, você está pronto para embarcar em uma jornada
            inesquecível. Planeje sua rota, faça memórias duradouras e viva a
            experiência única do nomadismo moderno.
          </Paragraph>
          <Button>
            <InfoText>Conheça nossos modelos e fabricantes</InfoText>
          </Button>
        </LeftContent>
        <RightContent>
          <ImgContainer>
            <Img src={background} alt="planetMotorhome" />
            <ImgOverlay />
          </ImgContainer>
        </RightContent>
      </Content>
    </Container>
  );
};
