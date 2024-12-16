import './App.scss'
import Header from './components/header/Header.jsx'
import Main from './components/main/Main.jsx'
import { BrowserRouter } from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </>
  )
}

export default App
