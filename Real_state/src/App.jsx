import './App.css'
import Header from './components/Header'
import Body from './components/Body'

function App() {
  return (
    <>
      <div className="bg-[url('./assets/Landing_page_gif.gif')] bg-cover bg-center min-h-screen">
        <Header/>
        <Body/>
      </div>
    </>
  )
}

export default App
