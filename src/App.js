import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout/layout'
import './App.scss'
import Home from './components/Home/home'
import Contact from './components/Contact/contact'
import About from './components/About/about'
import Portfolio from './components/Portfolio/portfolio'
import { useEffect } from 'react'

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
      <ScrollToTop />
    </>
  )
}

export default App
