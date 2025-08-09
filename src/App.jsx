import './App.css'
import Landing from './Pages/Landing'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import { Route, Routes } from 'react-router-dom'
import ViewProduct from './Pages/ViewProduct'
import Footer from './Components/Footer'
import { ToastContainer } from 'react-toastify'


function App() {

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        theme="colored"
      />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/view/:id' element={<ViewProduct />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
