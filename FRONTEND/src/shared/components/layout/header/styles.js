import styled from 'styled-components'

export const Container = styled.div`
  grid-area: HE;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.primary};
  color:${({ theme }) => theme.contrast};
  
`
export const ImageContainer = styled.div``

export const Image = styled.img`
  margin-top: 10px;
  margin-left:10px;
  width: 80px;
  height: 80px;
  cursor: pointer;

  border-radius: 50%;
  `

export const ActionsProfileContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin: 40px;

> a {
  color:${({ theme }) => theme.contrast};

  &:active {
    text-decoration: none;
    color: inherit;
  }
}

transition: all 0.3s;

  &:hover {
  scale: 1.1;
}

`
export const NavLinks = styled.div`
  display: flex;
  margin: auto;
  gap: 150px;
  
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    font-size: 18px;

    &:hover {
      color: ${({ theme }) => theme.secondary};
      transition: all 0.5s;
      transform: scale(1.15);
    }
  }
`;