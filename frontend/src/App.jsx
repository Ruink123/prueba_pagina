
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Main from './Components/Main'
function App() {

  return (
    <>
      <div className="main-container">
        <Header />
        <Main/>
        <Footer />
      </div>
      <Header />
    </>
  )
}

export default App
