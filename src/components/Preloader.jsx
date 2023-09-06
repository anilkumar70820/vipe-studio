import React from 'react'
import wordpress_boy from '../assets/images/png/succes_img.png'
const Preloader = () => {
  return (
    <div className='d-flex justify-content-center align-items-center position-fixed top-0 start-0 bg-black min-vh-100 w-100 z-3'>
<div className='d-flex flex-column justify-content-center align-items-center'><img className='w-25 mb-5 preloading_animation1' src={wordpress_boy} alt="boy" /><h1 className='fs_2xl text_ffffff ff_konexy preloading_animation mb-0 text-center'>WELOME To <span className=' text_6022EA'>WORDPRESS AGENCY</span></h1></div>
    </div>
  )
}

export default Preloader