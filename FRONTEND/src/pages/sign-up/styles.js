import styled from 'styled-components'

export const Container = styled.div`
height: 100vh;
display: flex;
`

export const Content = styled.div`
display:flex;
align-items:center;
flex-direction:row-reverse;
margin:auto;
border-radius: 5px;
background: rgb(255, 255, 255, 0.1);
border-radius: 5px;
box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.45);


img {
align-self: center;
width: 200px;
}

Form {
display: flex;
flex-direction: column;
margin:auto;
padding: 0 150px 0 150px;
justify-content: center;
align-items: center;
max-width: 600px;
height: 90vh;

@media screen and (max-width: 400px) {
display:flex;
flex-direction:column;
margin:auto;
justify-content: center;
align-items: center;
background: rgb(255, 255, 255, 0.1);
border-radius: 5px;
box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.45);
  form {
display: flex;
margin:auto;
justify-content: center;
align-items: center;
height: 90vh; 
  }
}
>span {
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  margin-top: 10px;
  text-align: right;
  margin-left: 160px;
  cursor:pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(2px);
  }
}
>button {
  align-items: center;
}
>h1 {
text-align: center;
font-size: 29px;
font-weight: normal;
margin: 10px;
color: ${({ theme }) => theme.text};
}
svg {
  margin-right: 10px;
}
}`



