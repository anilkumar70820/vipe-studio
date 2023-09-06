import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import succes_img from '../assets/images/png/succes_img.png'
import category_img from '../assets/images/png/category_img.png'

const SuccesGuide = () => {
    return (
        <section className='py-5 position-relative'>
            <Container className='mb-5 pb-sm-5'>
                <Row className='align-items-center mb-sm-5 pb-sm-5'>
                    <Col lg={4} className='mb-5 mb-lg-0' data-aos="zoom-in" data-aos-duration="1500">
                        <div><img className='w-100' src={succes_img} alt="robot_boy" /></div>
                    </Col>
                    <Col lg={8}>
                        <p className='common_texts text_868687 mb-0' data-aos="fade-left" data-aos-duration="1500">HAVE YOU SEEN OUR MASCOT?</p>
                        <h2 className='headings text_000000 mb-3' data-aos="fade-left" data-aos-duration="1500">Success Guides	</h2>
                        <div className=' d-flex overflow-x-scroll' data-aos="fade-left" data-aos-duration="1500">
                            <button className='category_btn me-2'>Category-1</button>
                            <button className='category_btn me-2'>Category-2</button>
                            <button className='category_btn me-2'>Category-3</button>
                            <button className='category_btn'>Category-4</button>
                        </div>
                        <div className='mt-4 pt-2 d-flex  gap-4 justify-content-center flex-md-row flex-column'>
                            <div className='category_box mb-4 mb-md-0' data-aos="flip-left" data-aos-duration="1500" data-aos-delay="500">
                                <img className='w-100 mb-4' src={category_img} alt="img" />
                                <h2 className='ff_gilroy fs_md fw-semibold text_000000 mb-2'>Sit diam metus</h2>
                                <p className='common_texts text_000000 opacity-75 mb-2'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                <h3 className='ff_gilroy fs_xsm fw-semibold text_6022EA mb-0'>Read More....</h3>
                            </div>
                            <div className='category_box mb-4 mb-md-0' data-aos="flip-left" data-aos-duration="1500" data-aos-delay="1000">
                                <img className='w-100 mb-4' src={category_img} alt="img" />
                                <h2 className='ff_gilroy fs_md fw-semibold text_000000 mb-2'>Sit diam metus</h2>
                                <p className='common_texts text_000000 opacity-75 mb-2'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                <h3 className='ff_gilroy fs_xsm fw-semibold text_6022EA mb-0'>Read More....</h3>
                            </div>
                            <div className='category_box' data-aos="flip-left" data-aos-duration="1500" data-aos-delay="1500">
                                <img className='w-100 mb-4' src={category_img} alt="img" />
                                <h2 className='ff_gilroy fs_md fw-semibold text_000000 mb-2'>Sit diam metus</h2>
                                <p className='common_texts text_000000 opacity-75 mb-2'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                <h3 className='ff_gilroy fs_xsm fw-semibold text_6022EA mb-0'>Read More....</h3>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container className='have_you_abs'>
                <div className='have_you_bg d-flex flex-lg-row flex-column justify-content-between align-items-center'>
                    <div className='mb-4 mb-lg-0'>
                        <h2 className='headings text_ffffff' data-aos="fade-right" data-aos-duration="1500">Have you</h2>
                        <p className='ff_gilroy text_ffffff fs_md fw-semibold mb-0' data-aos="fade-right" data-aos-duration="1500">read our study about Speed and Performance in <span className='d-lg-block'> WordPress?</span></p>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1500"><button className='check_it_btn ff_inter fs_xsm fw-semibold border-0 text_6022EA'>Check It Out</button></div>
                </div>
            </Container>
        </section>
    )
}

export default SuccesGuide