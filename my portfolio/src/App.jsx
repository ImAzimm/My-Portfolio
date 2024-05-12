import './App.css'
import './assets/color.css'
import './assets/font.css'
import Header from './component/Header'
import AboutMe from './component/AboutMe'
import Home from './component/Home'
import Portfolio from './component/Portfolio'
import Footer from './component/Footer'
import HomePage from './PortfolioPage/HomePage'
import PortfolioPage from './PortfolioPage/PortfolioPage'
import {Routes, Route} from 'react-router-dom'
import ScrollToTop from './ScrollToTop'


function App() {
  return (
    <>
      <Header />
      <ScrollToTop />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
