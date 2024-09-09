import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="cta-wrapper p-20 bg-neutral-900 relative overflow-hidden text-center lg:text-left flex justify-center lg:justify-between">
          <div className="max-w-lg lg:max-w-full w-full z-10">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className='max-w-lg'>
                <h2 className='text-white font-bold text-2xl md:text-4xl mb-5'>Start learning today!</h2>
                <p className='text-white mb-10'>Your AI journey starts here—begin learning today and shape your future!"</p>
              </div>
              <div className='w-full md:w-max'>
                <a href="#" className='primary-btn footer-cta mx-auto'>Get Access</a>
              </div>
            </div>
          </div>
          <div className="shape cta-1"></div>
          <div className="shape cta-2"></div>
        </div>
      </div>
    </>
  )
}

export default Footer