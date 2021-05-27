import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

const Header = styled.header`
  width: 100%;
  position: fixed;
  ul {
    list-style: none;
    display: flex;
    li {
      margin-right: 15px;
    }
  }
`

const Layout = ({ children, keyword, desc, title }) => {
  return (
    <main>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content={keyword} />
        <meta name='description' content={desc} />
        <meta charSet='utf-8' />
        <title>{title}</title>
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <article>
        <Header>
          <nav>
            <ul>
              <li>
                <Link href='/'>Register</Link>
              </li>
              <li>
                <Link href='/form'>Form</Link>
              </li>
            </ul>
          </nav>
        </Header>
        {children}
      </article>
    </main>
  )
}

Layout.defaultProps = {
  title: 'Test Project',
  keyword: 'Web Development, Programming',
  desc: 'Get the latest news in web dev'
}

export default Layout
