import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import link_arrow from '../assets/images/svg/ep_d-arrow-right.svg'
import call from '../assets/images/svg/eva_phone-call-fill.svg'
import home from '../assets/images/svg/fa-solid_home.svg'
import message from '../assets/images/svg/fluent_mail-16-filled.svg'
import search_icon from '../assets/images/svg/search_icon.svg'
import git_hub from '../assets/images/svg/git_hub.svg'
import facebook from '../assets/images/svg/facebook.svg'
import twitter from '../assets/images/svg/twitter.svg'
import linkdin from '../assets/images/svg/linkdin.svg'
import wordpress from '../assets/images/svg/wordpress.svg'
import instagram from '../assets/images/svg/instagram.svg'

const Footer = () => {
    return (
        <footer className='bg-black py-5'>
            <Container>
                <div className='d-flex justify-content-end my-sm-5 pt-sm-5 pb-3' data-aos="fade-left" data-aos-duration="1500">
                    <div className="search_box d-flex justify-content-between align-items-center mt-sm-5">
                        <input type="search" placeholder='Search here....' />
                        <span className='px-4 py-3'><img src={search_icon} alt="search_icon" /></span>
                    </div>
                </div>
                <Row className='mb-5 pb-lg-4'>
                    <Col xl={3} lg={4} sm={6} className='mb-5 mb-xl-0' data-aos="fade-right" data-aos-duration="1500">
                        <h2 className='common_texts text_ffffff mb-3'>Services</h2>
                        <ul className='p-0'>
                            <li className='footer_links mb-2 pb-1'><span className='me-1'><img src={link_arrow} alt="arrow" /></span>WordPress Development</li>
                            <li className='footer_links mb-2 pb-1'><span className='me-1'><img src={link_arrow} alt="arrow" /></span>WooCommerce Development</li>
                            <li className='footer_links mb-2 pb-1'><span className='me-1'><img src={link_arrow} alt="arrow" /></span>WordPress Maintenance</li>
                            <li className='footer_links mb-2 pb-1'><span className='me-1'><img src={link_arrow} alt="arrow" /></span>Speed Optimization</li>
                            <li className='footer_links mb-2 pb-1'><span className='me-1'><img src={link_arrow} alt="arrow" /></span>Dedicated WordPress Developer</li>
                            <li className='footer_links mb-2 pb-1'><span className='me-1'><img src={link_arrow} alt="arrow" /></span>Headless WordPress Development</li>
                            <li className='footer_links'><span className='me-1'><img src={link_arrow} alt="arrow" /></span>White Label Development</li>
                        </ul>
                    </Col>
                    <Col xl={3} lg={4} sm={6} className='mb-5 mb-xl-0' data-aos="fade-down" data-aos-duration="1500">
                        <h2 className='common_texts text_ffffff mb-3'>Services</h2>
                        <ul className='p-0'>
                            <li className='footer_links mb-2 pb-1'><span className='me-1'><img src={link_arrow} alt="arrow" /></span>WordPress Hosting</li>
                            <li className='footer_links mb-2 pb-1'><span className='me-1'><img src={link_arrow} alt="arrow" /></span>PSD, XD, Figma to WordPress Conversion</li>
                            <li className='footer_links mb-2 pb-1'><span className='me-1'><img src={link_arrow} alt="arrow" /></span>Custom WordPress Theme</li>
                            <li className='footer_links mb-2 pb-1'><span className='me-1'><img src={link_arrow} alt="arrow" /></span>Custom WordPress Plugins</li>
                            <li className='footer_links mb-2 pb-1'><span className='me-1'><img src={link_arrow} alt="arrow" /></span>CMS to WordPress</li>
                            <li className='footer_links'><span className='me-1'><img src={link_arrow} alt="arrow" /></span>WordPress Malware Removal</li>
                        </ul>
                    </Col>
                    <Col xl={3} lg={4} sm={6} className='mb-5 mb-xl-0' data-aos="fade-up" data-aos-duration="1500">
                        <h2 className='common_texts text_ffffff mb-3'>Latest Articles</h2>
                        <p className='footer_links mb-3 pb-1'>7 WordPress Plugins to Create an <span className='d-lg-block'> Effective Newsletter 03.01.2022</span></p>
                        <p className='footer_links mb-3 pb-1'>What’s the Perfect Blog Post Length for<span className='d-lg-block'> Your WordPress Site’s SEO?</span>
                            02.01.2022</p>
                        <p className='footer_links mb-3 pb-1'>5 Reasons the Future of WordPress Is<span className='d-lg-block'> Headless 01.01.2022</span></p>
                        <p className='footer_links'>Viptor Says: Vipe Studio’s WordPress<span className='d-lg-block'> Developers Wrap Up the Amazingly </span>Successful 2021 30.12.2021</p>
                    </Col>
                    <Col xl={3} lg={4} sm={6} className='' data-aos="fade-left" data-aos-duration="1500">
                        <h2 className='common_texts text_ffffff mb-3'>Contact</h2>
                        <ul className='p-0'>
                            <li className='mb-3 pb-1 footer_links'><span className='me-2'><img src={call} alt="call_icon" /></span>EU: +359 988 993 128</li>
                            <li className='mb-3 pb-1 footer_links'><span className='me-2'><img src={call} alt="call_icon" /></span>US: +1 (1 888) 266-6917</li>
                            <li className='mb-3 pb-1 footer_links'><span className='me-2'><img src={message} alt="message_icon" /></span>office@vipestudio.com
                            </li>
                            <li className='footer_links'><span className='me-2'><img src={home} alt="home_icon" /></span>14 Srebarna, Sofia 1407, Bulgaria</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <hr className='text_ffffff' />
            <Container className='mt-4 pt-2'>
                <div className='d-flex flex-md-row flex-column justify-content-between align-items-center'>
                    <div className='mb-4 mb-md-0'>
                        <p className='footer_links'>© Vipe Studio 2016-2022</p>
                        <div className='d-flex align-items-center gap-2'>
                            <p className='footer_links mb-0'>Privacy</p>
                            <span className='footer_line'></span>
                            <p className='footer_links mb-0'>Careers</p>
                            <span className='footer_line'></span>
                            <p className='footer_links mb-0'>Media</p>
                            <span className='footer_line'></span>
                            <p className='footer_links mb-0'>Client Area</p>
                        </div>
                    </div>
                    <div className='d-flex gap-3 align-items-center'>
                        <a href="https://www.github.com" target='blank' className='social_icons'><img src={git_hub} alt="git_hub" /></a>
                        <a href="https://www.linkdin.com" target='blank' className='social_icons'><img src={linkdin} alt="linkdin" /></a>
                        <a href="https://www.twitter.com" target='blank' className='social_icons'><img src={twitter} alt="twitter" /></a>
                        <a href="https://www.facebook.com" target='blank' className='social_icons'><img src={facebook} alt="facebook" /></a>
                        <a href="https://www.instagram.com" target='blank' className='social_icons'><img src={instagram} alt="instagram" /></a>
                        <a href="https://www.wordpress.com" target='blank' className='social_icons'><img src={wordpress} alt="wordpress" /></a>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer