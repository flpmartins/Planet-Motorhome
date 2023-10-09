import styled from 'styled-components'

export const Container = styled.div`
height: 100vh;
display: flex;
align-items: stretch;
background-color: #6C7339;
`

export const Content = styled.div`
display:flex;
align-items:center;
flex-direction:row;
margin:auto;
background-color:#262626;
padding: 80px;
border-radius: 15px;
box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.75);


img {
width: 400px;
margin-right:60px;
}

Form {
display: flex;
flex-direction: column;
margin:auto;
padding: 30px;
border:6px solid ${({ theme }) => theme.primary};
border-radius: 15px;
box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.30);
justify-content: center;
align-items: center;

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


