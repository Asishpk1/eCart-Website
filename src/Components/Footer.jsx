import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const Footer = () => {
 
  return (
    <>
      <div>
        
        {/* Wave SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160" style={{ display: "block", width: "100%", marginBottom: '-2px' }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
          <path
            fill="#cde5cd"
            fillOpacity="1"
            d="
      M0,80
      L24,85.35
      C48,90.5,96,101.5,144,98.65
      C192,96,240,80,288,82.65
      C336,85.5,384,106.5,432,117.35
      C480,128,528,128,576,120
      C624,112,672,96,720,90.65
      C768,85.5,816,90.5,864,101.35
      C912,112,960,128,1008,128
      C1056,128,1104,112,1152,109.35
      C1200,106.5,1248,117.5,1296,114.65
      C1344,112,1392,96,1416,88
      L1440,80
      L1440,160
      L0,160
      Z
    "
          />
        </svg>
        </svg>

        <div style={{ backgroundColor: '#cde5cd' }}>

          {/* Social Media Icons */}
          <div className='d-flex justify-content-center mediaIcon brandsec gap-2 footerlinks'>
            <Link to={'https://www.instagram.com/human_being___/'}><i className="fa-brands fa-facebook fa-lg brandLogos" style={{ color: '#36723fff' }}></i></Link>
            <Link to={'https://www.instagram.com/human_being___/'}><i className="fa-brands fa-instagram fa-lg brandLogos" style={{ color: '#36723fff' }}></i></Link>
            <Link to={'https://www.linkedin.com/in/asish-krishna-p/'}><i className="fa-brands fa-linkedin fa-lg brandLogos" style={{ color: '#36723fff' }} ></i></Link>
            <Link to={'https://github.com/Asishpk1'}><i className="fa-brands fa-github fa-lg brandLogos" style={{ color: '#36723fff' }}></i></Link>
            <Link to={'https://www.instagram.com/human_being___/'}><i className="fa-solid fa-phone fa-lg brandLogos" style={{ color: '#36723fff' }}></i></Link>
          </div>

          {/* Pages Link */}
          <div className='d-flex justify-content-center gap-3 mt-2 footerlinks' style={{ color: '#36723fff' }}>
            <Link style={{ textDecoration: 'none', color: '#36723fff' }} to={'/'}>Home</Link>
            <span>/</span>
            <Link style={{ textDecoration: 'none', color: '#36723fff' }} to={'/Wishlist'}>Wishlist</Link>
            <span>/</span>
            <Link style={{ textDecoration: 'none', color: '#36723fff' }} to={'/Cart'}>Cart</Link>
          </div>

          {/* Contact Section */}
          <div className='d-flex justify-content-center flex-column align-items-center mt-2' style={{ color: '#36723fff' }}>
            <h5 className='fw-bold contacth1'>Contact Us</h5>
            <Form>
              <div className='container'>
                <Row className="align-items-center footerlinks">
                <Col xs="auto">
                  <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                    Name
                  </Form.Label>
                  <Form.Control
                    className="bg-transparent form-control form-control-sm"
                    id="inlineFormInput"
                    placeholder="Enter email"
                    style={{ border: 'solid 1px', borderColor: '#36723fff'}}                    
                  />
                </Col>
                <Col xs="auto">
                  <Link to={'/'}>
                    <Button type="submit" className="w-100 btn btn-sm get border-0" style={{ backgroundColor: '#36723fff' }}>
                      <i className="fa-solid fa-arrow-right contact-btn"></i>
                    </Button>
                  </Link>
                </Col>
              </Row>
              </div>
            </Form>
          </div>

          <p className='text-center w-100 py-2 mt-2 mb-0 footerlinks' style={{ color: '#36723fff', fontFamily: "Poppins, sans-serif" }}>Copyright &copy; 2025 <strong>Luminar</strong> | Designed by <strong>Asish</strong></p>
        </div>
      </div>
    </>
  )
}

export default Footer