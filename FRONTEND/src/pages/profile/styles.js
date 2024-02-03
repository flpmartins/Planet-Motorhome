import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
height: 85vh;
width: 100%;
justify-content: center;
align-items: center;
`;

export const Content = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
padding-left:4%;
padding-right:4%;
border-radius: 5px;
background: rgb(111, 111,111, 0.2);
padding-bottom:30px;

`;

export const Img = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin-top: 8px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.35);
;
`

export const FormContainer = styled(Form)`
  padding: 80px;
  display: flex;
  align-items: center;
  flex-direction: column;

  > h1 {
    text-align: center;
    font-size: 25px;
    font-weight: normal;
    color: ${({ theme }) => theme.secondary};
  }

  > div {
    display: flex;
    align-items: center;
    width: 100%;
    text-align: center;
  }

  hr {
    margin: 8px 0px 10px 0px;
    height: 1px;
    width: 100%;
    opacity: 0.2;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const ButtonImage = styled.label`
  position: absolute;
  opacity: 0;
  transition: opacity 0.3s, transform 0.3s;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 1;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.40);
  }

  svg {
    font-size: 70px;
    color: ${({ theme }) => theme.text};
  }

  input {
    display: none;
  }
`;
