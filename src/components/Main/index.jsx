import { MouseEventHandler, useEffect, useState } from 'react'
import { IoMdPhotos } from 'react-icons/io'
import { MdOutlineArticle } from 'react-icons/md'
import { RiCalendarEventFill, RiVideoLine } from 'react-icons/ri'

import { getArticlesAPI } from '../../firebase/functions'
import { Article } from '../Article'
import { Loader } from '../Loader'
import { PostModal } from '../PostModal'
import { Container, Content, ShareBox } from './style'
import { useSelector, useDispatch } from 'react-redux'
export const Main = () => {
  const [showModal, setShowModal] = useState('close')
  const user = useSelector(state => state.user.actor)
  const loading = useSelector(state => state.article.loading)
  const articles = useSelector(state => state.article.articles)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getArticlesAPI())
  }, [dispatch])

  const handleClick = e => {
    e.preventDefault()
    if (e.target !== e.currentTarget) {
      return
    }

    switch (showModal) {
      case 'open':
        setShowModal('close')
        break
      case 'close':
        setShowModal('open')
        break
      default:
        setShowModal('close')
        break
    }
  }

  return (
    <>
      {articles.length > 0 ? (
        <Container>
          <ShareBox>
            <div>
              {user && user?.photoURL ? (
                <img src={user?.photoURL} alt="User Profile" />
              ) : (
                <img src="/images/user.svg" alt="User Profile" />
              )}
              <button disabled={loading ? true : false} onClick={handleClick}>
                Start a post
              </button>
            </div>
            <div>
              <button>
                <IoMdPhotos size="1.5rem" color="#70b5f9" />
                <span>Photo</span>
              </button>

              <button>
                <RiVideoLine size="1.5rem" color="#7fc15e" />
                <span>Video</span>
              </button>
              <button>
                <RiCalendarEventFill size="1.5rem" color="#e7a33e" />
                <span>Event</span>
              </button>
              <button>
                <MdOutlineArticle size="1.5rem" color="#fc9295" />
                <span>Article</span>
              </button>
            </div>
          </ShareBox>

          <Content>
            {loading && <Loader />}
            {articles.length > 0 &&
              articles.map((article, index) => <Article key={index} articles={article} />)}
          </Content>
          <PostModal showModal={showModal} handleClick={handleClick} />
        </Container>
      ) : (
        <p>There are not Articles</p>
      )}
    </>
  )
}
