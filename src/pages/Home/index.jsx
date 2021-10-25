import { Redirect } from 'react-router'

import { Header } from '../../components/Header'
import { Leftside } from '../../components/Leftside'
import { Main } from '../../components/Main'
import { RightSide } from '../../components/RightSide'
import { Container, Layout, Section } from './style'

import { useSelector } from 'react-redux'
export const Home = () => {
  const user = useSelector(state => state.user.actor)
  console.log(user)
  return (
    <>
      <Header />
      <Container>
        {!user && <Redirect to="/" />}
        <Section>
          <h5>
            <a>Hiring in a hurry? - </a>
          </h5>
          <p> Find talented pros in record time with Upwork and keep bussiness moving.</p>
        </Section>

        <Layout>
          <Leftside></Leftside>
          <Main />
          <RightSide />
        </Layout>
      </Container>
    </>
  )
}
