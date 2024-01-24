import styled from 'styled-components';
import { List, ListItem as MUIListItem, Button, Divider } from '@material-ui/core';

export const Container = styled.div`
  grid-area: AS;
  background-color: #262626;
`;

export const Content = styled.div`
  height: 100vh;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CustomList = styled(List)`
  width: 100%;
`;

export const ListItem = styled(MUIListItem)`
  && {
    display: flex;
    align-items: center;
    font-size: 24px; 
    font-weight: 600;
    height: 64px; 
    cursor: pointer;

    .MuiSvgIcon-root {
      font-size: 32px; 
      margin-right: 16px;
    }

    &:hover {
      background-color: #e0f2f1;
    }
  }
`;

export const StyledDivider = styled(Divider)`
  margin: 16px 0;
  background-color: #4caf50;
`;

export const ExitButton = styled(Button)`
&& {
    margin-top: auto;
    display: flex;
    align-items: center;
    cursor: pointer;

    span {
      font-size: 20px;
      font-weight: 600;
      display: flex;
      align-items: center;

      .MuiSvgIcon-root {
        margin-right: 16px;
        font-size: 28px;
      }
    }
  }
`;

export const ActionsProfileContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin-top: 10px;
> a {
  color:white;

  &:active {
    text-decoration: none;
    color:white;
    
  }
}`
export const ImageContainer = styled.div`
margin:auto;
align-items:center;`

export const Img = styled.img`
  margin-top: 10px;
  width: 80px;
  height: 80px;
  cursor: pointer;
  margin:0 auto;

  border-radius: 50%;
  `