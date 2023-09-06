import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import agile_wordpress from '../assets/images/png/agile_wordpress.png'
import team_stars from '../assets/images/png/team_stars.png'

const AgileWordpress = () => {
    return (
        <section className='py-5'>
            <Container>
                <Row className='align-items-center mb-5'>
                    <Col lg={6} className='mb-5 mb-lg-0' data-aos="zoom-in" data-aos-duration="1500">
                        <div><img className='w-100' src={agile_wordpress} alt="wordpress" /></div>
                    </Col>
                    <Col lg={6}>
                        <h2 className="headings text_000000 mb-2 pb-1" data-aos="fade-left" data-aos-duration="1500"><span className=' text_6022EA d-lg-block'>Agile WordPress</span> Development Project <span className='d-lg-block'>management</span></h2>
                        <p className='common_texts text_000000 opacity-75 mb-4 pb-1' data-aos="fade-left" data-aos-duration="1500">Suspendisse consequat egestas arcu et et. Viverra quis euismod neque luctus <span className='d-lg-block'>bibendum. Fringilla in nibh fringilla vulputate in. Elit, ultricies vitae pulvinar</span>arcu dignissim ac non rutrum. Lacus tortor sollicitudin risus eget euismod in bibendum turpis. </p>
                       <div data-aos="fade-left" data-aos-duration="1500"><button className='buttons'>Explore</button></div>
                    </Col>
                </Row>
            </Container>
            <div className=' team_star_bg py-5 mb-lg-5'>
                <Container className='my-lg-5 py-lg-3'>
                    <Row className='align-items-cente'>
                        <Col lg={6} className='mb-5 mb-lg-0'>
                            <h2 className='headings text_000000' data-aos="fade-right" data-aos-duration="1500">Team Full of Stars	</h2>
                            <p className='common_texts text_000000' data-aos="fade-right" data-aos-duration="1500">Suspendisse consequat egestas arcu et et. Viverra quis euismod <span className='d-lg-block'>neque luctus bibendum. Fringilla in nibh fringilla vulputate in. Elit,</span> ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus tortor <span className='d-lg-block'>sollicitudin risus eget euismod in bibendum turpis. </span></p>
                            <div data-aos="fade-right" data-aos-duration="1500"><button className='buttons'>Explore</button></div>
                        </Col>
                        <Col lg={6} className='position-relative' data-aos="zoom-in" data-aos-duration="1500">
                        <div><img className='w-100 team_star_abs' src={team_stars} alt="team_stars" /></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default AgileWordpress