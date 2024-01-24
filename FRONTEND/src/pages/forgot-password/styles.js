import styled from 'styled-components'

export const Container = styled.div`
height: 100vh;
display: flex;
`

export const Content = styled.div`
display:flex;
align-items:center;
flex-direction:column;
margin: auto;
padding-left:10%;
padding-right:10%;
background: rgb(255, 255, 255, 0.1);
border-radius: 5px;
box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.45);


img {
width: 300px;
}

Form {
display: flex;
align-items: center;
flex-direction: column;
text-align: center;


>h1 {
text-align: center;
font-size: 29px;
font-weight: normal;
margin: 10px;
color: ${({ theme }) => theme.text};
}
> a {
  margin-top: 10px;
      color: ${({ theme }) => theme.primary};
      display: block;
      text-align: right;

      transition: all 0.3s;

      &:hover {
        transform: scale(1.02);
      }
    }

> svg {
  margin-right: 10px;
}
}`


