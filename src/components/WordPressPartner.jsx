import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from 'react-slick'
import partner_1 from '../assets/images/svg/partner_1.svg'
import partner_2 from '../assets/images/svg/partner_2.svg'
import partner_3 from '../assets/images/svg/partner_3.svg'
import partner_4 from '../assets/images/svg/partner_4.svg'
import partner_5 from '../assets/images/svg/partner_5.svg'

const WordPressPartner = () => {
    var partner = {
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
        <section className='team_star_bg py-5'>
            <Container className='my-lg-4'>
                <h2 className='headings text_000000 mb-3 pb-1' data-aos="fade-right" data-aos-duration="1500">Long Term <span className='d-lg-block'>WordPress Partner</span></h2>
                <p className='common_texts opacity-75 text_000000 mb-4 pb-3' data-aos="fade-right" data-aos-duration="1500">Our motto is the long-term partnership – we will not only develop your perfect website, but will <span className='d-lg-block'> be behind you through the whole process. They already trusted us:</span></p>
                <Slider {...partner}>
                    <div className='d-flex justify-content-center align-items-center' data-aos="zoom-in" data-aos-duration="1500">
                        <img src={partner_1} alt="partners" />
                    </div>
                    <div className='d-flex justify-content-center align-items-center' data-aos="zoom-in" data-aos-duration="1500">
                        <img src={partner_2} alt="partners" />
                    </div>
                    <div className='d-flex justify-content-center align-items-center' data-aos="zoom-in" data-aos-duration="1500">
                        <img src={partner_3} alt="partners" />
                    </div>
                    <div className='d-flex justify-content-center align-items-center' data-aos="zoom-in" data-aos-duration="1500">
                        <img src={partner_4} alt="partners" />
                    </div>
                    <div className='d-flex justify-content-center align-items-center' data-aos="zoom-in" data-aos-duration="1500">
                        <img src={partner_5} alt="partners" />
                    </div>
                    <div className='d-flex justify-content-center align-items-center' data-aos="zoom-in" data-aos-duration="1500">
                        <img src={partner_3} alt="partners" />
                    </div>
                </Slider>
            </Container>
        </section>
    )
}

export default WordPressPartner