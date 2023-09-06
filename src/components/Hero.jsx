import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import play_btn from '../assets/images/svg/play_btn.svg'
import hero_img from '../assets/images/png/hero_img.png'
import earth from '../assets/images/svg/earth.svg'
import search_icon from '../assets/images/svg/hero_search.svg'
import spiner from '../assets/images/svg/spiner.svg'
import { Dropdown } from 'react-bootstrap';
import ellipse from '../assets/images/png/Ellipse 44.png'
import ellipse_blue from '../assets/images/png/Ellipse_blue.png'

const Hero = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    if (showNavbar) {
        document.body.classList.remove('overflow_hidden');
    } else {
        document.body.classList.add('overflow_hidden')
    }
    return (
        <section className='bg-black overflow-hidden'>
            <header className='pt-3 mb-5 pb-5'>
                <Container className='mb-2'>
                    <nav className='d-flex justify-content-between align-items-center'>
                        <div></div>
                        <ul className={`${showNavbar ? 'd-flex align-items-center gap-3 mb-0 nav_sm' : 'd-flex align-items-center gap-3 mb-0 nav_sm nav_show p-0'} `}>
                            <li> <Dropdown>
                                <Dropdown.Toggle
                                    variant="success"
                                    id="dropdown-basic"
                                    className="nav_links drop_down d-flex align-items-center gap-1 "
                                >
                                    WordPress Solution
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        href="#/action-1"
                                        className="ff_gilroy"
                                    >
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        href="#/action-2"
                                        className="ff_gilroy"
                                    >
                                        Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        href="#/action-3"
                                        className="ff_gilroy"
                                    >
                                        Something else
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown></li>
                            <li> <Dropdown>
                                <Dropdown.Toggle
                                    variant="success"
                                    id="dropdown-basic"
                                    className="nav_links drop_down d-flex align-items-center gap-1 "
                                >
                                    Services
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        href="#/action-1"
                                        className="ff_gilroy"
                                    >
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        href="#/action-2"
                                        className="ff_gilroy"
                                    >
                                        Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        href="#/action-3"
                                        className="ff_gilroy"
                                    >
                                        Something else
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown></li>
                            <li><a href='#about' className='nav_links'>Portfolio</a></li>
                            <li> <Dropdown>
                                <Dropdown.Toggle
                                    variant="success"
                                    id="dropdown-basic"
                                    className="nav_links drop_down d-flex align-items-center gap-1 "
                                >
                                    About
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        href="#/action-1"
                                        className="ff_gilroy"
                                    >
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        href="#/action-2"
                                        className="ff_gilroy"
                                    >
                                        Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        href="#/action-3"
                                        className="ff_gilroy"
                                    >
                                        Something else
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown></li>
                            <li><a href='#tokens' className='nav_links'>Blog</a></li>
                            <li><button className='buttons d-lg-none'>Sign Up</button></li>
                            <li className='d-xl-none d-block'><a href="#n0." className='nav_links'>1 888 266-6917 (eu?)</a></li>
                            <li className='d-xl-none d-block'><button className='buttons'>Contact Us</button></li>
                            <li className='d-xl-none block'> <Dropdown>
                                <Dropdown.Toggle
                                    variant="success"
                                    id="dropdown-basic"
                                    className="nav_links drop_down d-flex align-items-center gap-1 "
                                >
                                    <span className='me-1'><img src={earth} alt="earth" /></span>Eng
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        href="#/action-1"
                                        className="ff_gilroy"
                                    >
                                        Hindi
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        href="#/action-2"
                                        className="ff_gilroy"
                                    >
                                        Sanskrit
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        href="#/action-3"
                                        className="ff_gilroy"
                                    >
                                        Haryanvi
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown></li>
                            <span title="close" className="ms-4 close_nav text-white fw-bold fs-1 d-xl-none" onClick={() => setShowNavbar(true)}>&times;</span>
                        </ul>

                        <ul className='d-flex align-items-center gap-4 mb-0 p-0'>
                            <li className='d-xl-block d-none'><a href="#n0." className='nav_links'>1 888 266-6917 <span className='ff_inter fs_italic'>(eu?)</span></a></li>
                            <li className='d-xl-block d-none'><button className='buttons'>Contact Us</button></li>
                            <li className='d-xl-block d-none'> <Dropdown>
                                <Dropdown.Toggle
                                    variant="success"
                                    id="dropdown-basic"
                                    className="nav_links drop_down d-flex align-items-center gap-1 "
                                >
                                    <span className='me-1'><img src={earth} alt="earth" /></span>Eng
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        href="#/action-1"
                                        className="ff_gilroy"
                                    >
                                        Hindi
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        href="#/action-2"
                                        className="ff_gilroy"
                                    >
                                        Sanskrit
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        href="#/action-3"
                                        className="ff_gilroy"
                                    >
                                        Haryanvi
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown></li>
                        </ul>
                        <span title="open"
                            className="d-inline d-xl-none fw-bold fs-1 text-white"
                            onClick={() => setShowNavbar(false)}>
                            &#9776; </span>
                    </nav>
                </Container>
            </header>
            <div className='mb-5 pb-lg-5'>
                <Container className='mb-5 position-relative'>
                    <Row className='align-items-end'>
                        <Col lg={6} className='mb-5 mb-lg-0'>
                            <h1 className='ff_konexy fs_3xl text_ffffff fw-normal mb-4 pb-1 h1_line ms-3'>WordPress <span className='d-lg-block'>Development</span> Agency</h1>
                            <h3 className='text_ffffff fs_md fw-bold ff_gilroy mb-4'>for Enterprise + Friendly Team	</h3>
                            <p className='common_texts text_ffffff'>Vipe Studio is a WordPress Agency for development - a long-term partner for any WordPress service. Websites and,online shops development, maintenance and customization is what we do best.</p>
                            <div className='d-flex mb-4'>
                                <button className='buttons'>Get Started</button>
                                <div className='d-flex ms-4 ps-2 align-items-center'>
                                    <div>
                                        <img src={play_btn} alt="play_btn" />
                                    </div>
                                    <p className='common_texts text_ffffff mb-0 ms-2 ps-1'>What is Vipe? (1min)</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className='z-2'>
                                <img className='w-100' src={hero_img} alt="wordpress_team" />
                        </Col>
                    </Row>
                                <img className='ellipse ellipse3_abs d-lg-block d-none' src={ellipse_blue} alt="ellipse" />
                                <img className='ellipse ellipse4_abs d-lg-block d-none' src={ellipse} alt="ellipse" />
                </Container>
            </div>
            <div className="Box_gray py-5">
                <Container>
                    <Row>
                        <Col xl={6} className='mb-4 mb-xl-0' data-aos="fade-right" data-aos-duration="1500">
                            <h2 className="ff_konexy fs_lg fw-normal text_ffffff">
                                Tell us more....
                            </h2>
                            <p className="common_texts text_ffffff">
                                Lectus vitae est ultrices sed. Sit aliquam commodo hac donec
                                augue in  <span className="d-lg-block"></span>quis. Magna vel orci sem neque fringilla et lectus
                                laoreet.
                            </p>
                        </Col>
                        <Col xl={6} className='d-flex justify-content-xl-end 'data-aos="fade-left" data-aos-duration="1500">
                            <div>
                                <div className="d-flex justify-content-between align-items-center gray_box w-sm-100">
                                    <input
                                        type="search"
                                        placeholder="What do you need assistance with?" />
                                    <span className='px-4 py-3'>
                                        <img src={search_icon} alt="#" />
                                    </span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between flex-sm-row flex-column mt-3">
                                    <p className="common_texts text_ffffff"> <span className="pe-2"><img src={spiner} alt="#" /></span>or send us an inquire?</p>
                                    <p className="common_texts text_ffffff">Learn more about...</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Hero