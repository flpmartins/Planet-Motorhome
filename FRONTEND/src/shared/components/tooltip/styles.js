import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  cursor: pointer;
  text-align: center;

  span {
    position: absolute;
    bottom:calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    

    width:180px;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;


    background: ${({ theme }) => theme.error_background};
    color: ${({ theme }) => theme.error_title};
    border: 1px solid ${({ theme }) => theme.error_title};

    opacity: 0;
    visibility: hidden;
    transition:opacity 0.4s;
  

    &::before {
      content: '';
      border-style: solid;
      border-color: ${({ theme }) => theme.error_title} transparent;
      border-width: 6px 6px 0px 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
}
&:hover span {
      opacity: 1;
      visibility: visible;
}
`