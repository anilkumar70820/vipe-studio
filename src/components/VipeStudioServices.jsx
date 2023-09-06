import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import tick_mark from '../assets/images/svg/ol_img.svg'
import check_icon from '../assets/images/svg/akar-icons_check.svg'
import not_sure_girl from '../assets/images/png/not_sure_img.png'
import ellipse from '../assets/images/png/Ellipse 44.png'
import ellipse_blue from '../assets/images/png/Ellipse_blue.png'
const VipeStudioServices = () => {
  return (
    <section className='bg-black py-5 position-relative overflow-hidden'>
      <Container className='my-lg-4 py-lg-2'>
        <Row className='mb-5'>
          <Col lg={4} md={6} sm={12} className='mb-5 mb-lg-0' data-aos="fade-right" data-aos-duration="1500">
            <h2 className='text_ffffff fs_xl fw-normal ff_konexy'>All Vipe Studio <span className='d-lg-block'> WordPress</span> services	include:		</h2>
          </Col>
          <Col lg={4} md={6} sm={12} className='d-flex justify-content-center mb-5 mb-lg-0' data-aos="fade-down" data-aos-duration="1500">
            <div>
              <h3 className='ff_gilroy fs_md fw-semibold text_ffffff mb-4'>By Industry</h3>
              <div className='d-flex'>
                <span className='me-2'><img src={tick_mark} alt="tick_mark" /></span>
                <p className='common_texts text_ffffff mb-3'>Lorem in elementum pellentesque</p>
              </div>
              <div className='d-flex'>
                <span className='me-2'><img src={tick_mark} alt="tick_mark" /></span>
                <p className='common_texts text_ffffff mb-3'>Molestie cursus praesent mi</p>
              </div>
              <div className='d-flex'>
                <span className='me-2'><img src={tick_mark} alt="tick_mark" /></span>
                <p className='common_texts text_ffffff mb-3'>Leo sed viverra cras</p>
              </div>
              <div className='d-flex'>
                <span className='me-2'><img src={tick_mark} alt="tick_mark" /></span>
                <p className='common_texts text_ffffff mb-3'>Laoreet feugiat ut at</p>
              </div>
              <div className='d-flex'>
                <span className='me-2'><img src={tick_mark} alt="tick_mark" /></span>
                <p className='common_texts text_ffffff mb-3'>Risus apquam molestie viverra</p>
              </div>
              <div className='d-flex'>
                <span className='me-2'><img src={tick_mark} alt="tick_mark" /></span>
                <p className='common_texts text_ffffff mb-3'>Diam enim pulvinar vept</p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12} className='d-flex justify-content-lg-end justify-content-center' data-aos="fade-left" data-aos-duration="1500">
            <div>
              <h3 className='ff_gilroy fs_md fw-semibold text_ffffff mb-4'>By Services</h3>
              <div className='d-flex'>
                <span className='me-2'><img src={tick_mark} alt="tick_mark" /></span>
                <p className='common_texts text_ffffff mb-3'>Accumsan, dui a semper</p>
              </div>
              <div className='d-flex'>
                <span className='me-2'><img src={tick_mark} alt="tick_mark" /></span>
                <p className='common_texts text_ffffff mb-3'>Interdum malesuada vulputate neque</p>
              </div>
              <div className='d-flex'>
                <span className='me-2'><img src={tick_mark} alt="tick_mark" /></span>
                <p className='common_texts text_ffffff mb-3'>Nullam non a, morbi</p>
              </div>
              <div className='d-flex'>
                <span className='me-2'><img src={tick_mark} alt="tick_mark" /></span>
                <p className='common_texts text_ffffff mb-3'>Arcu morbi leo eu</p>
              </div>
              <div className='d-flex'>
                <span className='me-2'><img src={tick_mark} alt="tick_mark" /></span>
                <p className='common_texts text_ffffff mb-3'>Viverra venenatis, in ornare</p>
              </div>
              <div className='d-flex'>
                <span className='me-2'><img src={tick_mark} alt="tick_mark" /></span>
                <p className='common_texts text_ffffff mb-3'>Erat id aliquam habitant</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className='not_sure_bg my-5 position-relative z-2'>
        <Row className='align-items-center'>
          <Col lg={4} md={6} sm={12} className='mb-5 mb-lg-0' data-aos="fade-right" data-aos-duration="1500">
            <h2 className='ff_konexy fs_lg fw-normal text_ffffff mb-4 pb-3'>Not Sure <span className='d-lg-block'> which service</span> you need <span className='d-lg-block'>yet?</span>	</h2>
            <button className='buttons'>Schedule An Appointment</button>
          </Col>
          <Col lg={4} md={6} sm={12} className='d-flex justify-content-center mb-5 mb-lg-0' data-aos="fade-down" data-aos-duration="1500">
            <div>
              <p className='ff_gilroy fs_md fw-bold text_ffffff mb-4'>20-m free consultation that will <span className=' d-lg-block'>help us identifyif  you need	</span>	</p>
              <div className='d-flex mb-1'>
                <span className='me-2'><img src={check_icon} alt="check_icon" /></span>
                <p className='common_texts text_ffffff'>Technical Description & Discovery</p>
              </div>
              <div className='d-flex mb-1'>
                <span className='me-2'><img src={check_icon} alt="check_icon" /></span>
                <p className='common_texts text_ffffff'>Custom WordPress Development</p>
              </div>
              <div className='d-flex mb-1'>
                <span className='me-2'><img src={check_icon} alt="check_icon" /></span>
                <p className='common_texts text_ffffff'>Support & Maintenance</p>
              </div>
              <div className='d-flex'>
                <span className='me-2'><img src={check_icon} alt="check_icon" /></span>
                <p className='common_texts text_ffffff'>Other WordPress Service	</p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12} data-aos="fade-left" data-aos-duration="1500">
            <div><img className='w-100' src={not_sure_girl} alt="not_sure_girl" /></div>
          </Col>
        </Row>
      </Container>
  <img className='ellipse ellipse2_abs d-lg-block d-none' src={ellipse} alt="ellipse" />
<img className='ellipse1_abs ellipse d-lg-block d-none' src={ellipse_blue} alt="ellipse" />
    </section>
  )
}

export default VipeStudioServices