import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.secondary};
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
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.75);


  img {
    width: 90px;
  }
`;

export const Menu = styled.div`
  > button {
    margin-left: 20px;
    margin-right: 20px;
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
    margin-left: 20px;
    margin-right: 20px;
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
  margin-right: 40px;
  font-size: medium;
`;

export const CampText = styled.div`
  margin-top: 60px;
  background-color: ${({ theme }) => theme.text};
  margin-left: 230px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;

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
