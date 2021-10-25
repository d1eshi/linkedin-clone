import styled from 'styled-components'

export const Container = styled.div`
  padding: 0;
`

export const Nav = styled.nav`
  max-width: 82.57vw;
  margin: 0 auto;
  padding: 0.75em 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`

export const Join = styled.a`
  font-size: 1rem;
  padding: 0.625em 0.75em;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 0.75em;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
  }
`
export const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 1rem;
  font-weight: 600;
  line-height: 40px;
  padding: 0.625em 1.5em;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
  }
`

export const Section = styled.section`
  display: flex;
  align-content: flex-start;
  align-items: center;
  justify-content: center;
  min-height: 107.52688172043011vh;
  margin: auto;
  padding-bottom: 8.625em;
  padding-top: 2.5em;
  /* padding: 60px 0; */
  /* optional */
  position: relative;
  flex-wrap: wrap;
  max-width: 82.57686676427525vw;
  @media (max-width: 768px) {
    min-height: 0px;
  }
`

export const Hero = styled.div`
  width: 100%;
  h1 {
    width: 55%;
    font-size: 3.5rem;
    color: #2977c9;
    font-weight: 200;
    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
      line-height: 2;
      font-size: 1.25rem;
    }
  }
  img {
    width: 85.9vw;
    height: 102.9vh;
    @media (max-width: 768px) {
      width: inherit;
      height: inherit;
    }
  }
`
export const Form = styled.div`
  margin-top: 6.25em;
  width: 50.43vw;
  @media (max-width: 768px) {
    margin-top: 1.25em;
  }
`
export const Google = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0%);
  vertical-align: middle;
  transition-duration: 167ms;
  font-size: 1.25rem;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`
