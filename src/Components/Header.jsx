import Badge from 'react-bootstrap/Badge';
import { Navbar, Container, Nav, Form, FormControl} from 'react-bootstrap';
import specs from '../assets/home.png'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchingProduct } from '../Redux/Slices/productSlice';
import { useState } from 'react';


const Header = ({ insideLanding }) => {

  // To access States
  const Wishlist = useSelector(state => state.wishlistReducer)
  const Cart = useSelector(state => state.cartReducer)

  const dispatch = useDispatch()

  // To hide Header image and data on searching
  const [isSearchActive, setIsSearchActive] = useState(false);

  // To Search Products
  const handleSearch = (e) => {
    dispatch(searchingProduct(e.target.value.toLowerCase()))
  }

  return (
    <div>

      {/* Navbar */}
      <Navbar expand="sm" variant="dark" className="pt-4 px-sm-5 border-0" style={{ backgroundColor: '#cde5cd' }}>
        <Container fluid>
          {/* Brand */}
          <Link to={'/'} className='text-decoration-none'>
            <Navbar.Brand className="fs-2 d-flex align-items-center gap-2 px-3 py-0" style={{ color: '#36723fff', fontWeight: '600', backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: '30px', boxShadow: 'rgba(100, 100, 111, 0.2) 8px 7px 29px 0px' }}>
              <i className="fa-brands fa-shopify"></i>
              Shopverse
            </Navbar.Brand>
          </Link>

          {/* Toggler */}
          <Navbar.Toggle aria-controls="navbarContent" />

          {/* Collapsible Content */}
          <Navbar.Collapse id="navbarContent" className="mt-3 mt-sm-0">
            <Nav className="ms-auto d-flex flex-column flex-sm-row align-items-sm-center gap-sm-5 gap-3 w-100 justify-content-end iconsgap">

              {/* Search */}
              {/* To show Search tab only in Landing Page, not in other pages. */}
              {insideLanding && <Form onChange={(e) => handleSearch(e)} onFocus={() => setIsSearchActive(true)}
                onBlur={() => setIsSearchActive(false)} className="d-flex align-items-center px-5 px-sm-3 py-2" style={{ backgroundColor: 'white', borderRadius: '30px', boxShadow: 'rgba(100, 100, 111, 0.2) 8px 7px 29px 0px' }}>
                <FormControl size="sm" type="text" className="me-3 bg-transparent border-0" placeholder='Search Products' style={{ borderRadius: '20px' }} />
                <i className="fa-solid fa-magnifying-glass fa-lg" style={{ color: '#36723fff' }}></i>
              </Form>}

              {/* Icons */}
              <div className="fs-4 d-flex align-items-center justify-content-center gap-3 text-light px-3 py-1 get" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: '30px', boxShadow: 'rgba(100, 100, 111, 0.2) 8px 7px 29px 0px' }}>
                <Link to={'/wishlist'}>
                  <button style={{ color: '#36723fff' }} className='border-0 bg-transparent'><i className="fa-solid fa-heart"></i><Badge pill className="px-1 py-0 fs-6 bg-transparent" style={{ color: '#36723fff' }}>{Wishlist.length}</Badge></button>
                </Link>

                <Link to={'/cart'}>
                  <button style={{ color: '#36723fff' }} className='border-0 bg-transparent'><i className="fa-solid fa-cart-shopping"></i><Badge pill className="px-1 py-0 fs-6 bg-transparent" style={{ color: '#36723fff' }}>{Cart.length}</Badge></button>
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Header extra content */}
      {insideLanding && !isSearchActive &&
        <div className="container-fluid pt-3" style={{ backgroundColor: '#cde5cd', marginTop: '-2px' }}>
          <div className='row px-md-5 px-2 pt-4 d-flex justify-content-around'>
            <div className='col-md-4 d-flex justify-content-center'>
              <img src={specs} alt="" className='homeImg' style={{ borderRadius: '50px', width: '100%' }} />
            </div>

            <div className='col-md-8 d-flex flex-column justify-content-center text-center'>
              <h1 style={{ color: '#36723fff', fontWeight: '600' }}>Everything You Love. All in One Place.</h1>
              <p className='fontresp' style={{ fontFamily: "Poppins, sans-serif" }}>Discover a seamless shopping experience across fashion, furniture, groceries, food, and more, all under one roof. From everyday essentials to stylish living, everything is thoughtfully curated to bring comfort, convenience, and inspiration to your daily life.</p>
            </div>
          </div>
        </div>
      }

      {/* Wave SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 160 1440 60"
        style={{ display: 'block', width: '100%', height: '80px', marginTop: '-2px' }}
      >
        <path
          fill="#cde5cd"
          fillOpacity="1"
          d="
      M0,160
      L24,168
      C48,176,96,188,144,184
      C192,180,240,160,288,163
      C336,166,384,188,432,198
      C480,208,528,208,576,196
      C624,184,672,168,720,162
      C768,156,816,160,864,176
      C912,192,960,208,1008,208
      C1056,208,1104,192,1152,189
      C1200,186,1248,198,1296,194
      C1344,190,1392,172,1416,164
      L1440,160
      L1440,0
      L0,0
      Z"
        />
      </svg>


    </div>
  )
}

export default Header