import { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import { addToWishlist } from '../Redux/Slices/wishlistSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Redux/Slices/cartSlice'
import { toast } from "react-toastify";

const ViewProduct = () => {

  const [Product, setProduct] = useState({})
  // console.log(Product);

  const { id } = useParams()
  // console.log(id);

  // Accessing Wishlist state
  const wishlist = useSelector(state => state.wishlistReducer)

  const dispatch = useDispatch()

  // Accessing products from Local Storage
  useEffect(() => {
    if (localStorage.getItem("allProducts")) {
      const allProducts = JSON.parse(localStorage.getItem("allProducts"))
      // console.log(allProducts);
      const data = allProducts.find((item) => item?.id == id)
      // console.log(data);
      setProduct(data)

    }
  }, [])

  // Add to Wishlist button configuration
  const handleWishlist = (product) => {
    const existingProduct = wishlist.find(p => p.id == product.id)
    if (existingProduct) {
      toast.error(`${product.title} already in your Wishlist`)
    }
    else {
      dispatch(addToWishlist(product))  //{type:'addToWishlist',payload:{}}
    }
  }


  return (
    <>
      <Header />
      <div className='row d-flex justify-content-around px-5 w-100 mt-md-3'>

        {/* Product Image Section*/}
        <div className='col-sm-5 d-flex align-items-center justify-content-center' >
          <img src={Array.isArray(Product?.images) ? Product.images[0] : Product?.images} className='w-75' alt="" />
        </div>

        {/* Product details Section*/}
        <div className='col-sm-6 d-flex flex-column  justify-content-center ms-2 ms-md-0' style={{ color: '#36723fff' }}>
          <div className=' p-4' style={{ borderRadius: '30px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
            <h2 className='text-dark' style={{ fontWeight: '600' }}>{Product?.title}</h2>
            <h4 style={{ fontWeight: '600' }}>$ {Product?.price} <span style={{ fontSize: '15px', opacity: '0.5' }}>{Math.ceil(Product?.discountPercentage)}% off</span> </h4>
            <span style={{ textAlign: 'justify', fontSize: '16px' }}>{Product?.description}</span>
          </div>

          <div className='mt-3'>
            {Product.tags?.map((tag, index) => (
              <span className='p-1 px-2 text-light me-3' style={{ backgroundColor: '#36723fff', borderRadius: '20px', fontSize: '12px' }} key={index}>{tag}</span>
            ))}
          </div>

          <div className=' p-4 mt-3' style={{ borderRadius: '30px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
            <span style={{ fontSize: '16px', fontWeight: '600' }}>⭐ Rated {Product?.rating} out of 5 by users  </span> <br />
            <span style={{ fontSize: '15px', fontWeight: '500' }}>Reviews :</span> <br />

            {Product.reviews?.map((review, index) => (
              <span style={{ fontSize: '15px', color: '#5da55d', fontStyle: 'italic' }} className='d-flex flex-column mt-2 ps-4' key={index}>"{review?.comment}"</span>
            ))}
          </div>

          {/* Cart and Wishlist Buttons*/}
          <div className='d-flex  gap-2 justify-content-around mt-4'>
            <button style={{ backgroundColor: '#36723fff', borderRadius: '20px', fontFamily: "Poppins, sans-serif", fontSize: '16px' }} onClick={() => handleWishlist(Product)} className='btn shadow text-light w-50'>Wishlist <i className="fa-solid fa-heart-circle-plus"></i></button>
            <button onClick={() => dispatch(addToCart(Product))} style={{ backgroundColor: '#36723fff', borderRadius: '20px', fontFamily: "Poppins, sans-serif", fontSize: '16px' }} className='btn shadow text-light border-0 w-50'>Add to Cart <i className="fa-solid fa-cart-plus"></i></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewProduct