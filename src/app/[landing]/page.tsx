import React from 'react'
import './Landing.scss'
import Image from 'next/image'
import HeroImage from '../../../public/hero.jpg'
import WhyUsImage from '../../../public/why-us.jpg'
import Shape1 from '../../../public/shape-1.svg'
import Dots from '../../../public/dots.svg'

const Landing = () => {

  const whyUs = [
    {
      title: 'Cost-Effective Learning',
      description: `Colleges can cost tens to hundreds of thousands with no job guarantee. Our training offers a fraction of the cost with clear pathways to employment and earning potential.`
    }, {
      title: 'Efficient Time Management',
      description: `Mastering cutting-edge technologies like GenAI and low-code development can be challenging and time-consuming, especially without a clear roadmap. Unlike traditional college degrees that take 4 years, our training enables you to start earning within 6 to 9 months.`
    }, {
      title: 'Expert Mentorship',
      description: `This isn't a generic YouTube playlist. Our live webinars are tailored to your specific needs, offering direct 1-on-1 access to industry professionals and a network of peers who share your goals or are where you aspire to be.`
    }
  ]
  return (
    <>
      <section className="py-10 md:py-20">
        <div className="container">
          <div className="hero flex flex-col md:flex-row items-center justify-between gap-y-8">
            <div className="hero-left">
              <h1 className="font-black leading-tight mb-6">Transform Your Future: Master AI Bots & Models Today.</h1>
              <p className="text-lg mt-4 text-gray-500 leading-relaxed mb-10">Go from Zero to $70K in Just 9 Months—No Experience Needed. All You Need Is the Will to Learn. Anyone Can Achieve This: Will You?</p>
              <div className="flex md:flex-row flex-col items-center gap-4">
                <a href="#" className="btn primary-btn w-full">Find out how?</a>
                <a href="#" className="btn primary-btn-outline w-full">Learn more</a>
              </div>
            </div>
            <div className="hero-right">
              <Image src={Shape1} alt='shape 1' className='shape home-hero-3 hidden md:block' />
              <div className="image-wrapper h-full">
                <Image src={HeroImage} alt='Course Teacher' style={{ objectFit: 'cover' }}
                  priority={true} />
              </div>
              <Image src={Dots} alt='shape 1' className='shape home-hero-1' />
              <Image src={Dots} alt='shape 1' className='shape home-hero-2' />
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className='py-20 md:py-40'>
        <div className="text-center mb-7">
          <h2 className='text-4xl mb-6 font-black'>Why work with us?</h2>
          <p className='text-gray-500'>Save Time and Money with Expert Mentorship Every Step of the Way.</p>
        </div>
        <div className="container">
          <div className="flex flex-col md:flex-row justify-content-between gap-8 mb-14">
            <div className="grid gap-4 md:w-1/2">
              {
                whyUs.map((item, index) => (
                  <div key={index} className="card py-8 px-10 bg-neutral-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary-500 text-white text-lg font-black why-number">
                        {index + 1}
                      </div>
                      <h3 className='mb-0 text-2xl font-black'>{item.title}</h3>
                    </div>
                    <p className='text-gray-500 mt-2 leading-relaxed text-balance'>{item.description}</p>
                  </div>
                ))
              }
            </div>
            <div className="image-wrapper relative md:w-1/2 md:order-first">
              <Image src={WhyUsImage} alt='Why work with us' style={{ objectFit: 'cover', height: '100%' }} />
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <a href="#" className="btn primary-btn">Get the course</a>
            <a href="#" className="btn primary-btn-outline">Learn more</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Landing