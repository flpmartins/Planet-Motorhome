import styled from "styled-components";

export const Container = styled.div`
  background-color:#fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #6C7339;
  margin: 0;
  padding: 0px;
  align-items: center;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.10);


  img {
    width: 90px;
  }
`;

export const Menu = styled.div`
  > button {
    margin-left: 20px;
    width: 100px;
    border: none;
    background: none;
    font-size: 16px;
    color: ${({ theme }) => theme.text};
  }
`;

export const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-left: auto;

  > button {
    width: 100px;
    border: none;
    background: none;
    font-size: 16px;
    color: ${({ theme }) => theme.text};

  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  font-size: medium;
`;

export const CampText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;  
  margin: 60px;
  background-color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 10px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.10);


  p {
    font-size: 18px;
    padding: 20px;
    margin: 0;
    color: ${({ theme }) => theme.secondary};
  }
  h1 {
    margin-top: 20px;
  }
`;
