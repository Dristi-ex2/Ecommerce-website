
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';
import Header from './components/Header';
import Footer from './components/Footer';
import Errorpage from './pages/ErrorPage';

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
function App() {

  return (
  
    <Router>
    <Header />
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/products" element={<Products />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="/singleproduct/:id" element={<SingleProduct />} />
     <Route path="/cart" element={<Cart />} />
     <Route path='*' element={< Errorpage/>} />
     
     </Routes>
     <Footer />
     </Router>
  )
}
export default App
