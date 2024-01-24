import styled from 'styled-components'

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CustomGoogleLoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #4285f4; 
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;


    

  img {
    width: 20px; 
    margin-right: 10px;
  }

  span {
    font-weight: bold;
  }
`;
