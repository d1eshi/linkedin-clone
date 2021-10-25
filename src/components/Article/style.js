import styled from 'styled-components'

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

export const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`

export const SharedActor = styled.div`
  padding-right: 2.5em;
  flex-wrap: nowrap;
  padding: 0.75em 1em 0;
  margin-bottom: 0.5em;
  align-items: center;
  display: flex;
  span {
    margin-right: 0.75em;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;
    img {
      width: 40px;
      height: 40px;
    }
    > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      margin-left: 7px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 0.875rem;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(n + 1) {
          font-size: 0.75rem;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
  }
`

export const Description = styled.div`
  padding: 0 1em;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 0.875rem;
  text-align: left;
`
export const SharedImg = styled.div`
  margin-top: 0.5em;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`

export const SocialCount = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 1em;
  padding: 0.5em 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  li {
    margin-right: 0.25em;
    font-size: 0.75rem;
    button {
      display: flex;
      border: none;
      background-color: #eee;
      img {
        max-width: 23px;
      }
    }
  }
`

export const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 0.25em 0.5em;
  button {
    display: inline-flex;
    align-items: center;
    padding: 0.5em;
    color: #0a66c2;
    border: none;
    background-color: #eee;
    @media (min-width: 768px) {
      span {
        margin-left: 0.5em;
      }
    }
  }
`
