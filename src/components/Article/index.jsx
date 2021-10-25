import { BiDotsHorizontalRounded } from 'react-icons/bi'
import ReactPlayer from 'react-player'

import { Comment, Like, Send, Share } from './icons'
import * as style from './style'

export const Article = ({ articles }) => {
  const { description, user } = articles
  return (
    <style.Article>
      <style.SharedActor>
        <span>
          <img src={user.image} alt="User Profile" />
          <div>
            <span>Title</span>
            <span>Info</span>
            {/* <span>{user.date }</span> */}
          </div>
        </span>
        <button>
          <BiDotsHorizontalRounded />
        </button>
      </style.SharedActor>
      <style.Description>{description}</style.Description>
      <style.SharedImg>
        <span>
          {!articles.sharedImg && articles.video ? (
            <ReactPlayer width={'100%'} url={articles.video} />
          ) : (
            articles.sharedImg && <img src={articles.sharedImg} alt="Shared Img for User" />
          )}
        </span>
      </style.SharedImg>
      <style.SocialCount>
        <li>
          <button>
            <img
              src="https://static-exp1.licdn.com/sc/h/f4ly07ldn7194ciimghrumv3l"
              alt="Like to post"
            />
            <img
              src="https://static-exp1.licdn.com/sc/h/3c4dl0u9dy2zjlon6tf5jxlqo"
              alt="Clap to post"
            />
            <span>75</span>
            <li>
              <span>{articles.comments}</span>
            </li>
          </button>
        </li>
      </style.SocialCount>
      <style.SocialActions>
        <button>
          <Like />
          <span>Like</span>
        </button>
        <button>
          <Comment />
          <span>comments</span>
        </button>
        <button>
          <Share />
          <span>Share</span>
        </button>
        <button>
          <Send />
          <span>Send</span>
        </button>
      </style.SocialActions>
    </style.Article>
  )
}
