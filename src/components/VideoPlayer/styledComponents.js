import styled from 'styled-components'

export const ResponsiveContainer = styled.div`
  width: 100%;
  height: 250px;
  @media screen and (min-width: 576px) {
    height: 300px;
  }
  @media screen and (min-width: 768px) {
    min-height: 300px;
    height: 35vw;
    max-height: 400px;
    max-width: 800px;
  }
`
