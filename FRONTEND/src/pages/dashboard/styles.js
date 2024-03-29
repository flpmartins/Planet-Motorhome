import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
flex-direction:column; 
align-items:center;
`;
export const ContentImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SectionContainer = styled.div`
  margin: 20px;
`;

export const ImagesContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const ImgContainer = styled.div`
  margin: 20px;
  position: relative;
  width: 300px;
  height: 400px;
`;

export const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.55);
  transition: transform 0.3s;

  &:hover {
    transform: scale(0.99);
  }
`;

export const ImgOverlay = styled.div`
`;


export const IconContainer = styled.div`
  font-size: 36px;
  color: ${({ theme }) => theme.primary};
  margin-top: 10px;
`;


export const Title = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.primary};
`;


export const Paragraph = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.secondary};
  text-align: center;
`;

