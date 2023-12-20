import styled from 'styled-components'

export const Container = styled.div`
  grid-area: AS;
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.contrast};
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
`

export const Content = styled.div`
  height: 100vh;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const List = styled.ul`
  height: 100%;
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;

  height: 25px;

  & + li {
    margin-top: 8px;
  }

  cursor: pointer;

  svg {
    font-size: 20px;
    margin-right: 8px;
  }

  transition: all 0.3s;

  &:hover {
    transform: translateX(16px);
  }
`

export const ExitButton = styled.button`
  height: 50px;

  display: flex;
  align-items: center;

  background: transparent;
  border: none;
  color: ${({ theme }) => theme.contrast};

  cursor: pointer;
  span {
    font-size: 18px;
    font-weight: 500;

    display: flex;
    align-items: center;
    svg {
      margin-right: 8px;
      font-size: 20px;
    }
  }
  transition: all 0.3s;
  &:hover {
    transform: translateX(30px);
  }
`