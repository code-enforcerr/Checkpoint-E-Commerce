import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/home'
import Contact from './Components/Contact/contact'
import About from './Components/About/about'
import Product from './Components/Product/Product'
import ProductDetails from './Components/Product/ProductDetails'
import Checkout from './Components/Checkout/Checkout'
import Cart from './Components/Cart/Cart'
import './App.css'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/products/:id' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
