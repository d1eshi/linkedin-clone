import styled from 'styled-components'

export const Container = styled.div`
  grid-area: main;
`

export const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 0.8em;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`

export const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 0.5em;
  background-color: #fff;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0 0.6);
      font-size: 0.85rem;
      line-height: 1.5;
      min-height: 48px;
      background-color: transparent;
      border: none;
      display: flex;
      align-items: center;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 0.5em 1em 0 1em;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 0.5em;
      }
      button {
        margin: 0.25em 0;
        flex-grow: 1;
        padding-left: 1em;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 25px;
        background-color: #eee;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      button {
        img {
          margin: 0 0.25em 0 -0.25em;
        }
        span {
          color: #70b5f9;
        }
      }
    }
  }
`

export const Content = styled.div`
  text-align: center;
  & > img {
    width: 30px;
  }
`
