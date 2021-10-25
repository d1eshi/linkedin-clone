import { Redirect } from 'react-router'

import { signInGogle } from '../../firebase/functions'
import { Container, Form, Google, Hero, Join, Nav, Section, SignIn } from './style'
import { useSelector, useDispatch } from 'react-redux'

export const Login = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const user = useSelector(state => state.user.actor)
  const dispatch = useDispatch()

  return (
    <Container>
      {user && <Redirect to="feed" />}
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="logo" />
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>

      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src="/images/login-hero.svg" alt="Login hero" />
        </Hero>
        <Form>
          <Google onClick={() => dispatch(signInGogle())}>
            <img src="/images/google.svg" alt="Sign In with Google" />
            Sign In with Google
          </Google>
        </Form>
      </Section>
    </Container>
  )
}
