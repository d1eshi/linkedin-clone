import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  color: #000;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.3s;
`

export const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: #eee;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`

export const Header = styled.div`
  display: block;
  padding: 1em 1.625em;
  border-radius: 3px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.4);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.15);
    img,
    svg {
      pointer-events: none;
    }
  }
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75em 1.5em;
  svg,
  img {
    width: 40px;
    height: 40px;
    background-clip: content-box;
    border: 2px solid transparent;
  }
  span {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5;
    margin-left: 5px;
  }
`
export const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 0.5em 0.75em;
`

export const SharedCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75em 1.5em 0.75em 1em;
`

export const AssetButton = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  min-width: auto;
  color: rgba(0, 0, 0, 0.5);
`

export const AttachAssets = styled.div`
  display: flex;
  align-items: center;
  padding-right: 0.5em;
  ${AssetButton} {
    width: 40px;
  }
`

export const ShareComment = styled.div`
  padding-left: 0.5em;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  ${AssetButton} {
    svg {
      margin-right: 5px;
    }
  }
`
export const PostButton = styled.button`
  min-width: 40px;
  border-radius: 20px;
  padding: 0 1em;
  background: ${props => (props.disabled ? 'rgba(0,0,0, 0.5)' : '#0a66c2')};
  color: #eee;
  border: unset;
  &:hover {
    background: #004182;
  }
`

export const Editor = styled.div`
  padding: 0.75em 1.5em;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
  }
  input {
    width: 100%;
    height: 35px;
    font-size: 1rem;
    margin-bottom: 1.25em;
  }
`

export const UploadImg = styled.div`
  text-align: center;
  img {
    width: 100%;
    object-fit: cover;
  }
`
