import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 3.25em;
  max-width: 100%;
`
export const Content = styled.div`
  max-width: 81.9912vw;
  margin: 0 auto;
`

export const Section = styled.section`
  min-height: 50px;
  padding: 1em 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  h5 {
    color: #0a66c2;
    font-size: 0.875em;
    a {
      font-weight: 700;
    }
  }
  p {
    font-size: 0.875em;
    color: #434649;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`

export const Layout = styled.section`
  display: grid;
  grid-template-areas: 'leftside main rightside';
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  gap: 1.5625em;
  grid-template-rows: auto;
  margin: 1.5625em 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`
