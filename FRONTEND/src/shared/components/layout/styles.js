import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;

  grid-template-columns:  14% auto;
  grid-template-rows: 15% auto;

  grid-template-areas:
    'AS HE'
    'AS CT';

  height: 100vh;
`