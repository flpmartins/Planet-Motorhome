import styled, { css } from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.secondary_light};
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.secondary_light};
  margin: 10px;
  width: 100%;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  } 
  ${props => props.isFocused && css`
  color:${({ theme }) => theme.primary};
  border-color: ${({ theme }) => theme.primary};;
  `
  }

  ${props => props.isFilled && css`
  color:${({ theme }) => theme.primary};
  `
  }

  input {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: 0;
    font-size: 16px;

    ${props => props.isFilled && css`
  color:${({ theme }) => theme.primary};
  `
  }

    &::placeholder {
      color:${({ theme }) => theme.gray}
    }
  }
  
  `