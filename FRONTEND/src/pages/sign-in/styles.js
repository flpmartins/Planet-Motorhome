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
flex-direction:column;
margin: auto;
background-color:#262626;
padding: 30px;
border-radius: 30px;
box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.75);


img {
width: 300px;
}

Form {
display: flex;
align-items: center;
flex-direction: column;


>h1 {
text-align: center;
font-size: 29px;
font-weight: normal;
margin: 10px;
color: ${({ theme }) => theme.text};
}
> a {
      color: ${({ theme }) => theme.text};
      display: block;
      text-align: right;
      margin-left: 110px;

      transition: all 0.3s;

      &:hover {
        transform: scale(1.02);
      }
    }

> svg {
  margin-right: 10px;
}
}`

export const Loginstyle = styled.div`
display: flex;
align-items: stretch;
`

