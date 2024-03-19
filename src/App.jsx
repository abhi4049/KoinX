import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Performance from './components/Performance'
import TradingViewWidget from './components/TradingViewWidget'
import Sentiment from './components/Sentiment'
import About from './components/About'
import Tokenomics from './components/Tokenomics'
import Team from './components/Team'
import Banner from './components/Banner'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="w-full grid grid-cols-1 lg:grid-cols-4 bg-gray-200">
        <div className="col-span-1 lg:col-span-3 p-4">
          <TradingViewWidget></TradingViewWidget>
          <Menu></Menu>
          <Performance></Performance>
          <Sentiment></Sentiment>
          <About></About>
          <Tokenomics></Tokenomics>
          <Team></Team>
        </div>
        <div className="col-span-1 lg:col-span-1 h-fit">
          <Banner></Banner>
        </div>

      </div>
      <Footer></Footer>
    </>
  )
}

export default App

