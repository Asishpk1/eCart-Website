import Header from '../Components/Header'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, quantitydecrease, quantityincrease, removeFromCart } from '../Redux/Slices/cartSlice';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { toast } from 'react-toastify';


const Cart = () => {

  //Accessing Cart state
  const Cart = useSelector(state => state.cartReducer)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Decrease product quantity button configuration
  const handleDecrease = (product) => {
    // console.log(product.quantity);

    if (product.quantity > 1) {
      dispatch(quantitydecrease(product.id))
    }
    else {
      dispatch(removeFromCart(product.id))
    }
  }

  //Checkout Button configuration
  const handleCheckout = () => {
    toast.success('Your Order placed successfully..Thank you for purchasing with us !!')
    dispatch(emptyCart())
    setTimeout(() => {
      navigate('/')
    }, 3000);
    // alert("Your Order placed successfully..Thank you for purchasing with us !!")
    // dispatch(emptyCart())
    // navigate('/')
  }

  return (
    <>
      <Header />
      <div className='p-sm-5 p-2'>
        {Cart.length > 0 ?
          <div>
            <h1 className='mb-sm-3 cart' style={{ color: '#36723fff' }}>Cart Summary</h1>

            <div>
              <div className='row p-4 p-md-0 w-100 ms-1'>

                {/* Cart products table */}
                <div className='col-sm-8 p-4' style={{ borderRadius: '30px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>

                  <Table responsive="md" className='align-middle '>
                    <thead>
                      <tr>
                        <th>Sl.no</th>
                        <th>Item</th>
                        <th>Preview</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {Cart.map((product, Index) =>
                        <tr key={Index} className='text-nowrap'>
                          <td>{Index + 1}</td>
                          <td>{product?.title}</td>
                          <td><img src={Array.isArray(product?.images) ? product.images[0] : product?.images} style={{ width: '45px' }} alt="" className='ms-2' /></td>
                          <td>
                            <button onClick={() => handleDecrease(product)} className='btn btn-light py-0'>-</button>
                            <span>&nbsp;&nbsp;{product?.quantity}&nbsp;&nbsp;</span>
                            <button onClick={() => dispatch(quantityincrease(product?.id))} className='btn btn-light py-0'>+</button>
                          </td>
                          <td>$ {product?.totalPrice.toFixed(2)}</td>
                          <td><button onClick={() => dispatch(removeFromCart(product?.id))} style={{ color: '#36723fff' }} className='btn'><i className="fa-solid fa-trash"></i></button></td>

                        </tr>
                      )}
                    </tbody>
                  </Table>

                  {/* Cart Buttons */}
                  <div className='text-end mt-1 mt-sm-0'>
                    <Button onClick={() => dispatch(emptyCart())} style={{ backgroundColor: '#36723fff', fontFamily: "Poppins, sans-serif" }} className='btn rounded-pill  py-2 px-3 border-0 get shadow'>EMPTY CART</Button>
                    
                    <Link to={'/'}><Button style={{ border: 'solid 2px', borderColor: '#36723fff', color: '#36723fff', fontFamily: "Poppins, sans-serif" }} className='btn rounded-pill ms-2 py-2 px-3  get shadow bg-transparent'>SHOP MORE</Button></Link>
                  </div>
                </div>

                {/* Checkout Section */}
                <div className='col-sm-4 my-3 my-sm-0'>
                  <Card className='border-0 p-2' style={{ borderRadius: '30px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                    <Card.Body>
                      <Card.Title style={{ fontWeight: '500' }}>Total Items : <span>{Cart.length}</span></Card.Title>
                      <Card.Title> Total Amount : <span>$ {Cart.reduce((a, b) => a + b.totalPrice, 0).toFixed(2)}</span></Card.Title>
                      <Button onClick={handleCheckout} className='w-100 btn rounded-pill  py-2 px-3 border-0 shadow' style={{ backgroundColor: '#36723fff', fontFamily: "Poppins, sans-serif" }}>CHECKOUT</Button>
                    </Card.Body>
                  </Card>
                </div>

              </div>
            </div>
          </div>
          :
          // Empty Cart preview
          <div className='d-flex flex-column align-items-center w-100 mb-4'>
            {/* <img className='cartimg'  src={cartempty} alt="" style={{width:'25%'}} /> */}
            <DotLottieReact
              src="https://lottie.host/66c36631-c41c-4b17-9c11-99a46bfe5ca6/EYqG0aA6w6.lottie"
              loop
              autoplay
              className='cartimg'
            />
            <h4 style={{ color: '#36723fff' }}>Your Cart is empty</h4>
            <Link to={'/'}><Button style={{ backgroundColor: '#36723fff', fontFamily: "Poppins, sans-serif" }} className='btn rounded-pill  py-2 px-4 border-0 get shadow mt-sm-2 mt-0'>Go Home</Button></Link>
          </div>

        }
      </div>
    </>
  )
}

export default Cart