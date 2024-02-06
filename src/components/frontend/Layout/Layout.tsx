import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
export type ILayout  = {
    children: JSX.Element|JSX.Element[],
    keywords: string,
    title: string,
    description: string,
    author: string
}
const Layout = ({children, title, description, keywords, author}:ILayout) => {
  return (
    <>
        <Header />
        <Helmet>
            <meta name='description' content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <title>{title}</title>
        </Helmet>
        <div className="container mx-auto">
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
          {children}
        </main>
      </div>
        <Footer />
    </>
  )
}
Layout.defaultProps = {
    title: "Blog ManageMent BaseUi",
    description: 'Mern stack developmen',
    keywords: 'Nodejs, React, MongoDB, Express',
    author: 'Mong Matubbar'
  }

export default Layout