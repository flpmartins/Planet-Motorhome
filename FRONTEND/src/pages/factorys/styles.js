import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  text-align: center;
`;

export const RightContent = styled.div`
  position: relative;
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const ImgOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 15px;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 20px;
`;

export const InfoText = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.secondary};
`;

export const ActionsButton = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-left: 10px;
    background: transparent;
    border: 0;
    transition: all 0.3s;
    &:hover {
      transform: scale(1.1);
    }


    svg {
      font-size: 18px;
    }
   
  }
`;

export const ImageFactory = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;