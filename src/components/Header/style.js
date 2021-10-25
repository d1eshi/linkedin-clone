import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #eee;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 1.5em;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1;
  button {
    border: unset;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  width: 82.57vw;
`

export const Logo = styled(Link)`
  margin-right: 8px;
  font-size: 0px;
`

export const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 20.49vw;
    input {
      outline: none;
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 15.95vw;
      padding: 0 0.5em 0 2.5em;
      line-height: 1.75;
      font-weight: 400;
      font-size: 0.875rem;
      height: 5.12vh;
      border-color: #dce6f1;
      vertical-align: text-top;
      :focus-visible {
        font-size: 1.1rem;
      }
    }
  }
`

export const SearchIcon = styled.div`
  width: 2.5em;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`

export const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  .active {
    span:after {
      content: '';
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`

export const NavList = styled.li`
  display: flex;
  align-items: center;
  button {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 0.75rem;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 7.83vh;
    min-width: 5.94vw;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 76.5em) {
      min-width: 5.1244vw;
      min-width: 70px;
    }
  }
  &:hover,
  &:active {
    button {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`

export const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background-color: #eee;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 1rem;
  transition-duration: 167ms;
  text-align: center;
  display: none;
  cursor: pointer;
`

export const User = styled(NavList)`
  button > svg {
    width: 24px;
    border-radius: 50%;
  }
  button > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  span {
    display: flex;
    align-items: center;
  }
  &:hover {
    ${SignOut} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`
export const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`
