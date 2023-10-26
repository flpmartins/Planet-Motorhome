import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;

  grid-template-columns:  23% auto;
  grid-template-rows: 15% auto;

  grid-template-areas:
    'HE HE'
    'AS CT';

  height: 100vh;
`