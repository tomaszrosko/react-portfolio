import { Outlet } from 'react-router-dom'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import './layout.scss'

const Layout = () => {
  return (
    <>
      <Header />
      <div className="page">
          <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout
