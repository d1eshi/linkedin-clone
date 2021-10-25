/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Timestamp } from 'firebase/firestore'
import { useState } from 'react'
import ReactPlayer from 'react-player'

import { postArticleAPI } from '../../firebase/functions'
import { CloseIcon, SharedComment, SharedImg, SharedVideo } from './icons'
import {
  AssetButton,
  AttachAssets,
  Container,
  Content,
  Editor,
  Header,
  PostButton,
  ShareComment,
  SharedContent,
  SharedCreation,
  UploadImg,
  UserInfo,
} from './style'


import { useSelector, useDispatch } from 'react-redux'
export const PostModal = ({ showModal, handleClick }) => {
  const [editorText, setEditorText] = useState('')
  const [shareImage, setShareImage] = useState(undefined)
  const [videoLink, setVideoLink] = useState('')
  const [assetArea, setAssetArea] = useState('')
  const dispatch = useDispatch()

  const user = useSelector(state => state.user.actor)

  const handleChange = (e) => {
    const image = e.target.files[0]

    if (image === undefined) {
      alert(`Not an image, the file ies a  ${typeof image}`)
      return
    }
    setShareImage(image)
  }

  const postArticle = (e) => {
    e.preventDefault()
    if (e.target != e.currentTarget) return

    const payload = {
      image: shareImage,
      video: videoLink,
      user: user,
      description: editorText,
      timestamp: Timestamp.now(),
    }
    dispatch(postArticleAPI(payload))
    reset(e)
  }

  const switchAssetArea = (area) => {
    setShareImage(undefined)
    setVideoLink('')
    setAssetArea(area)
  }

  const reset = (e) => {
    setEditorText('')
    setVideoLink('')
    setShareImage(undefined)
    setAssetArea('')
    handleClick(e)
  }

  return (
    <>
      {showModal === 'open' && (
        <Container>
          <Content>
            <Header>
              <h1>Create a post</h1>
              <button onClick={event => reset(event)}>
                <CloseIcon />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                {user?.photoURL ? (
                  <img src={user?.photoURL} alt="user profile" />
                ) : (
                  <img src="/images/user.svg" alt="" />
                )}
                <span>{user?.displayName}</span>
              </UserInfo>
              <Editor>
                <textarea
                  value={editorText}
                  placeholder="What do you want to talk about?"
                  onChange={e => setEditorText(e.target.value)}
                />
                {assetArea === 'image' ? (
                  <UploadImg>
                    <input
                      type="file"
                      style={{ display: 'none' }}
                      onChange={handleChange}
                      accept="image/gif, imge/jpeg, image/png"
                      name="image"
                      id="file"
                    />
                    <p>
                      <label htmlFor="file">Select an image to shrare</label>
                    </p>
                    {shareImage && <img src={URL.createObjectURL(shareImage)} alt="Selected" />}
                  </UploadImg>
                ) : (
                  assetArea === 'media' && (
                    <>
                      <input
                        type="text"
                        placeholder="Please input a video link"
                        value={videoLink}
                        onChange={e => setVideoLink(e.target.value)}
                      />
                      {videoLink && <ReactPlayer width={'100%'} url={videoLink} />}
                    </>
                  )
                )}
              </Editor>
            </SharedContent>
            <SharedCreation>
              <AttachAssets>
                <AssetButton onClick={() => setAssetArea('image')}>
                  <SharedImg />
                </AssetButton>
                <AssetButton onClick={() => setAssetArea('media')}>
                  <SharedVideo />
                </AssetButton>
              </AttachAssets>
              <ShareComment>
                <AssetButton>
                  <SharedComment />
                  Anyone
                </AssetButton>
              </ShareComment>

              <PostButton disabled={!editorText ? true : false} onClick={e => postArticle(e)}>
                Post
              </PostButton>
            </SharedCreation>
          </Content>
        </Container>
      )}
    </>
  )
}
