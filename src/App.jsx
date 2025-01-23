import './App.scss'
import Header from './components/header/Header.jsx'
import Main from './components/main/Main.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { ToastContainer } from 'react-toastify'
function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Header />
          <ToastContainer theme="dark" />
          <Main />
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
