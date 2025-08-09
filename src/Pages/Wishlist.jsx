import Header from '../Components/Header'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../Redux/Slices/wishlistSlice';
import { addToCart } from '../Redux/Slices/cartSlice';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const Wishlist = () => {

  // Accessing Wishlist state
  const Wishlist = useSelector(state => state.wishlistReducer)

  const dispatch = useDispatch()

  // Add to Cart button configuration
  const handleCart = (product) => {
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))
  }

  return (
    <>
      <Header />
      {
        Wishlist.length > 0 ? (
          <div>
            <h2
              style={{ color: '#36723fff', marginBottom: '120px' }}
              className='px-sm-5 px-3 py-2 text-center'
            >
              Wishlist
            </h2>

            {/* Wishlist Product cards */}
            <div className='px-sm-5 px-3 py-2 d-flex align-items-center justify-content-center flex-wrap gap-4'>
              {Wishlist.map((product) => (
                <Card
                  key={product.id}
                  style={{
                    width: '16rem',
                    height: '17rem',
                    marginBottom: '150px',
                    boxShadow: 'rgba(100, 100, 111, 0.2) 8px 7px 29px 0px',
                    borderRadius: '1.5rem',
                    color: '#5da55d',
                  }}
                  className='border-0 landingCard'
                >
                  <Card.Img
                    variant="top"
                    src={Array.isArray(product?.images) ? product.images[0] : product?.images}
                    style={{ marginTop: '-135px' }}
                  />
                  <Card.Body className='text-center' style={{ marginTop: '-20px' }}>
                    <Card.Title className='text-truncate' style={{ fontWeight: '600' }}>
                      {product.title}
                    </Card.Title>
                    <div className='text-center'>
                      <div>$ {product.price}</div>
                      <Button
                        onClick={() => dispatch(removeFromWishlist(product?.id))}
                        style={{ backgroundColor: '#36723fff', fontFamily: 'Poppins, sans-serif' }}
                        className='btn rounded-pill py-2 px-3 border-0 get w-100 shadow'
                      >
                        Remove &nbsp; <i className="fa-solid fa-heart-circle-xmark"></i>
                      </Button>
                      <Button
                        onClick={() => handleCart(product)}
                        style={{ backgroundColor: '#36723fff', fontFamily: 'Poppins, sans-serif' }}
                        className='btn rounded-pill py-2 px-3 border-0 get mt-2 w-100 shadow'
                      >
                        Add to Cart &nbsp; <i className="fa-solid fa-cart-plus"></i>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        ) : (

          // Empty Wishlist preview
          <div className='w-100 d-flex flex-column align-items-center wishfooter'>
            <DotLottieReact
              src="https://lottie.host/bc6d1301-1403-45b2-9705-4b6c100743bb/41p2tG6tSL.lottie"
              loop
              autoplay
              className='cartimg'
            />
            <h2 className='text-center' style={{ color: '#36723fff' }}>Your Wishlist is empty</h2>
          </div>
        )
      }

    </>
  )
}

export default Wishlist