import styled from 'styled-components'

export const Container = styled.div`
  grid-area: leftside;
`

export const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 0.5em;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`

export const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 0.75em 0.75em 1rem;
  word-wrap: break-word;
  word-break: break-word;
`

export const CardBack = styled.div`
  background: url('/images/card-bg.svg');
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -0.75em -0.75em 0;
`
export const Photo = styled.div`
  box-shadow: none;
  background-image: url('/images/photo.svg');
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -2.375em auto 0.75em;
  border-radius: 50%;
`
export const Link = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`
export const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 0.75em;
  line-height: 1.33;
  font-weight: 400;
`
export const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-top: 0.75em;
  padding-bottom: 0.75em;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25em 0.75em;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  div {
    display: flex;
    flex-direction: column;
    text-align: left;
    span {
      font-size: 0.85rem;
      line-height: 1.333;
      &:first-child {
        color: rgba(0, 0, 0, 0.6);
      }
      &:nth-child(2) {
        color: rgba(0, 0, 0, 1);
      }
    }
  }
  svg {
    color: rgba(0, 0, 0, 1);
  }
`
export const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  font-size: 12px;
  padding: 0.75em;
  text-align: left;

  display: block;
  span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 1);
    font-size: 0.85rem;
    svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`

export const CommunityCard = styled(ArtCard)`
  padding: 0.5em 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  a {
    color: black;
    padding: 0.25em 0.75em;
    font-size: 12px;
    &:hover {
      color: #0a66c2;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;
      border-top: 1px solid #d6cec2;
      padding: 0.75em;
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`
