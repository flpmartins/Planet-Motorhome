
import styled from "styled-components";


export const Container = styled.div`
height: 100vh;
display: flex;
background-color: #6C7339;`

export const Content = styled.div`
background-color: #262626;
border-radius: 30px;
margin: auto;
padding: 30px;
box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.75);

>img {
width: 300px;
}

>form {
display: flex;
flex-direction: column;
padding: 20px;

button {
padding: 10px;
margin-top: 20px;
border-radius: 10px;
background-color: #838C3F;
transition: all 0.3s;
border: none;
color: white; 
font-size: 16px;
}

button:hover {
transform: scale(1.05);
box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.15);
}

input {
border: 0;
margin-top: 20px;
padding: 5px;
box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.15);
border-radius: 6px;
}

>h1 {
  text-align: center;
  font-size: 29px;
  font-weight: normal;
  color: #FFF2D3;
}
}`
