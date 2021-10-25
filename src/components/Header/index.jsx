import { signOutAPI } from '../../firebase/functions'
import {
  Container,
  Content,
  Logo,
  Nav,
  NavList,
  NavListWrap,
  Search,
  SearchIcon,
  SignOut,
  User,
  Work,
} from './style'

import {  useDispatch, useSelector } from 'react-redux'
export const Header = () => {
  const user = useSelector((state) => state.user.actor)
  const dispatch = useDispatch()

  return (
    <>
      <Container>
        <Content>
          <Logo to="/feed">
            <img src="/images/home-logo.svg" alt="Logo's Linkedin to Home" />
          </Logo>
          <Search>
            <div>
              <input type="text" placeholder="Search" />
            </div>
            <SearchIcon>
              <img src="/images/search-icon.svg" alt="Search Icon" />
            </SearchIcon>
          </Search>

          <Nav>
            <NavListWrap>
              {/* Item1 */}
              <NavList className="active">
                <button>
                  <img src="/images/nav-home.svg" alt="Home Icon to home" />
                  <span>Home</span>
                </button>
              </NavList>
              {/* Item 2 */}
              <NavList>
                <button>
                  <img src="/images/nav-network.svg" alt="Network Icon to Network" />
                  <span>My Network</span>
                </button>
              </NavList>
              <NavList>
                <button>
                  <img src="/images/nav-jobs.svg" alt="Jobs Icon to Jobs" />
                  <span>Jobs</span>
                </button>
              </NavList>
              {/* Item 3 */}
              <NavList>
                <button>
                  <img src="/images/nav-messaging.svg" alt="Messages Icon to Messages" />
                  <span>Messaging</span>
                </button>
              </NavList>

              {/* Item 4 */}
              <NavList>
                <button>
                  <img
                    src="/images/nav-notifications.svg"
                    alt="Notifications Icon to Notifications"
                  />
                  <span>Notifications</span>
                </button>
              </NavList>

              <User>
                <button>
                  {user && user.photoURL ? (
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    <img src={user.photoURL} alt="User" />
                  ) : (
                    <img src="/images/user.svg" alt="User Icon to User" />
                  )}
                  <span>
                    Me
                    <img src="/images/down-icon.svg" alt="Drop Down Icon" />
                  </span>
                </button>
                <SignOut onClick={() => dispatch(signOutAPI())}>SignOut</SignOut>
              </User>

              <Work>
                <button>
                  <img src="/images/nav-work.svg" alt="Work Icon to Work" />
                  <span>
                    Work
                    <img src="/images/down-icon.svg" alt="Drop Down Icon" />
                  </span>
                </button>
              </Work>
            </NavListWrap>
          </Nav>
        </Content>
      </Container>
    </>
  )
}
