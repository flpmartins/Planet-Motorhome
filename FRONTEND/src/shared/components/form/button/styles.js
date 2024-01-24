import styled from "styled-components"

export const ButtonContainer = styled.button`
background:${({ theme }) => theme.primary};
align-items: center;
height:48px;
border:0;
border-radius:10px;
width: 100%;
color:${({ theme }) => theme.text};
margin-top: 20px;
transition: all 0.3s;
border: none;
color: white; 
font-size: 16px;

&:hover {
  transform: scale(1.03);
box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.05);
}
`