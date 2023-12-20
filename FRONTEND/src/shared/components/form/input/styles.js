import styled, { css } from 'styled-components'

import { Tooltip } from '../../tooltip'

export const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.secondary_light};
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.secondary_light};
  margin: 10px;
  width: 270px;
  color: ${({ theme }) => theme.text};
  align-items: center;


  ${props =>
    props.isErrored &&
    css`
      border-color: ${propsTheme => propsTheme.theme.error_title};
    `}

  
  ${props => props.isFocused && css`
  color:${({ theme }) => theme.primary};
  border-color: ${({ theme }) => theme.gray};;
  `
  }

  ${props => props.isFilled && css`
  color:${({ theme }) => theme.primary};
  `
  }
  input { 
   display:flex;
    width: 270px;
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
export const Error = styled(Tooltip)`
  margin-left: 0px;
  height: 26px;

  svg {
  margin: 0;
  margin-top: 2px;
  }
  `