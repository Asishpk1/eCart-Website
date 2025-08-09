import { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../Redux/Slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import Pagination from '../Components/Pagination';

const Landing = () => {

  // Accessing Product state and destrcturing keys
  const { allProducts, loading, error } = useSelector(state => state.productReducer)
  // console.log(allProducts, loading);

  // State to switch page numbers
  const [currentPage, setcurrentPage] = useState(1)

  // Pagination logic
  const productPerPage = 10
  let endingIndex = currentPage * productPerPage
  let startingIndex = endingIndex - productPerPage
  let currentProduct = allProducts.slice(startingIndex, endingIndex)


  const dispatch = useDispatch()

  // API Call
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])




  return (
    <>
      <div>
        <Header insideLanding={true} /> <br /> <br />
        <div className='p-sm-5 p-3 d-flex align-items-center justify-content-center flex-wrap gap-4 mt-5'>
          {loading ?
            <div className='mt-5'><Spinner animation="border" variant="success" /></div>
            :
            // Product cards
             allProducts?.length > 0 ?
              currentProduct.map((products) =>
                <Card key={products?.id} style={{ width: '16rem', height: '13rem', marginBottom: '150px', boxShadow: 'rgba(100, 100, 111, 0.2) 8px 7px 29px 0px', borderRadius: '1.5rem', color: '#5da55d' }} className='border-0 landingCard'>
                  <Card.Img variant="top" src={products?.images[0]} style={{ marginTop: '-135px' }} className='' />
                  <Card.Body className='text-center' style={{ marginTop: '-20px' }}>
                    <Card.Title className='text-truncate' style={{ fontWeight: '600' }}>{products?.title}</Card.Title>
                    <div className='d-flex justify-content-around mt-3 align-items-center'>
                      <div>$ {products?.price}</div>
                      <Link to={`/view/${products.id}`}><Button style={{ backgroundColor: '#36723fff', fontFamily: "Poppins, sans-serif" }} className='btn rounded-pill btn-sm py-2 px-3 border-0 get'>View details &nbsp; <i className="fa-solid fa-arrow-right bg-light rounded-circle py-1 pe-3 ps-1" style={{ color: '#36723fff' }}></i></Button></Link>
                    </div>
                  </Card.Body>
                </Card>
              )
              :
              <div>
                <h3 style={{ color: '#36723fff' }}>No Products found</h3>
              </div>
          }

        </div>

        {/* Pagination section */}
        <div className='text-center' style={{ marginTop: '-120px' }}>
          <Pagination totalProducts={allProducts.length} productPerPage={productPerPage} setcurrentPage={setcurrentPage} currentPage={currentPage} />
        </div>

      </div> <br />
    </>
  )
}

export default Landing