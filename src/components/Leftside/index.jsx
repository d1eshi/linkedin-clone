import {
  AddPhotoText,
  ArtCard,
  CardBack,
  CommunityCard,
  Container,
  Item,
  Link,
  Photo,
  UserInfo,
  Widget,
} from './style'

import {   useSelector } from 'react-redux'
export const Leftside = () => {
  const user = useSelector(state => state.user.actor)
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBack />
          <Photo />
          <Link>Welcome, {user ? user?.displayName : 'there'}!</Link>
          <AddPhotoText>Add a photo</AddPhotoText>
        </UserInfo>

        <Widget>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src="/images/widget-icon.svg" alt="" />
        </Widget>
        <Item>
          <a>
            <img src="/images/item-icon.svg" alt="" />
            My Items
          </a>
        </Item>
      </ArtCard>

      <CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <img src="/images/plus-icon.svg" alt="" />
          </span>
        </a>
        <a>
          <span>Follow Hashtags</span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </CommunityCard>
    </Container>
  )
}
