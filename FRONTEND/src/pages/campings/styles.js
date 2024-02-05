import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 85vh;
`;

export const Content = styled.div`
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

