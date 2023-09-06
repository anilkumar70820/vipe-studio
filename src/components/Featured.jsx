import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
import yahoo from '../assets/images/svg/yahoo.svg'
import finance from '../assets/images/svg/finance.svg'
import life from '../assets/images/svg/life.svg'
import news from '../assets/images/svg/news.svg'
import trending from '../assets/images/svg/trending.svg'
import profile from '../assets/images/svg/profile.svg'
import business from '../assets/images/svg/business.svg'
import support_team from '../assets/images/svg/support_team.svg'

const Featured = () => {
    var feature = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        cssEase: "linear",
        pauseOnHover: false,
        speed: 2500,
        autoplaySpeed: 0,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },
        ]
    }
    return (
        <section>
            <div className='team_star_bg py-5'>
                <Container className='my-lg-5 pt-2'>
                    <h2 className='headings text_000000 mb-5 pb-lg-4' data-aos="fade-right" data-aos-duration="1500">Featured on</h2>
                    <Slider {...feature}>
                        <div className='d-flex align-items-center' data-aos="zoom-in" data-aos-duration="1500">
                            <img src={yahoo} alt="feature" />
                        </div>
                        <div className='d-flex align-items-center' data-aos="zoom-in" data-aos-duration="1500">
                            <img src={finance} alt="feature" />
                        </div>
                        <div className='d-flex align-items-center' data-aos="zoom-in" data-aos-duration="1500">
                            <img src={news} alt="feature" />
                        </div>
                        <div className='d-flex align-items-center' data-aos="zoom-in" data-aos-duration="1500">
                            <img src={trending} alt="feature" />
                        </div>
                        <div className='d-flex align-items-center' data-aos="zoom-in" data-aos-duration="1500">
                            <img src={life} alt="feature" />
                        </div>
                        <div className='d-flex align-items-center' data-aos="zoom-in" data-aos-duration="1500">
                            <img src={trending} alt="feature" />
                        </div>
                    </Slider>
                </Container>
            </div>
            <div className='py-5'>
                <Container className='my-lg-5 pb-4'>
                    <h2 className='headings text_000000 mb-5 pb-2' data-aos="fade-right" data-aos-duration="1500">Integer et nisl non</h2>
                    <Row>
                        <Col lg={4} md={6} className='mb-5 mb-lg-0' data-aos="flip-left" data-aos-duration="1500">
                            <div className='integer_cards w-100'>
                                <div className='d-flex justify-content-center mb-4 pb-3'>
                                    <img src={profile} alt="profile" />
                                </div>
                                <h3 className='ff_inter fs_md fw-semibold text_000000 text-center mb-3'>Enterprise WordPress Solutions	</h3>
                                <p className='common_texts text_000000 opacity-75 text-center mb-3 pb-1'>Pretium, a et sapien non nunc libero. Id dolor sed quis convallis turpis purus feugiat nibh eu. Auctor cras hac ac, sociis diam montes, turpis commodo elit.</p>
                                <p className='text_6022EA ff_gilroy fw-semibold fs_xsm text-center mb-0'>Learn More</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className='mb-5 mb-lg-0' data-aos="flip-left" data-aos-duration="1500" data-aos-delay="300">
                            <div className='integer_cards w-100'>
                                <div className='d-flex justify-content-center mb-4 pb-3'>
                                    <img src={business} alt="business" />
                                </div>
                                <h3 className='ff_inter fs_md fw-semibold text_000000 text-center mb-3'>Small to Mid Size Business Development			</h3>
                                <p className='common_texts text_000000 opacity-75 text-center mb-3 pb-1'>Et nunc fermentum id amet tempus, elementum. Eget ac ultrices tortor, mattis amet blandit aenean amet. Massa diam lacus, aliquam neque, cursus.</p>
                                <p className='text_6022EA ff_gilroy fw-semibold fs_xsm text-center mb-0'>Learn More</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} data-aos="flip-left" data-aos-duration="1500" data-aos-delay="600">
                            <div className='integer_cards w-100'>
                                <div className='d-flex justify-content-center mb-4 pb-3'>
                                    <img src={support_team} alt="support_team" />
                                </div>
                                <h3 className='ff_inter fs_md fw-semibold text_000000 text-center mb-3'>Support & Maintenance	</h3>
                                <p className='common_texts text_000000 opacity-75 text-center mb-3 pb-1'>Ac donec ipsum fringilla tortor, consectetur etiam sociis amet quis. Viverra volutpat pretium non in fusce tellus sed urna. Pharetra ullamcorper et donec aliquam.</p>
                                <p className='text_6022EA ff_gilroy fw-semibold fs_xsm text-center'>Learn More</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Featured