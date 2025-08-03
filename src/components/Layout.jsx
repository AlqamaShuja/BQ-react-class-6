import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className='main-content'>{children}</div>
    </div>
  )
}

export default Layout
