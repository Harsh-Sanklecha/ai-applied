"use client"
import React, { useEffect } from 'react'
import './Landing.scss'
import Image from 'next/image'
import HeroImage from '../../../public/hero.jpg'
import WhyUsImage from '../../../public/why-us.jpg'
import Shape1 from '../../../public/shape-1.svg'
import Dots from '../../../public/dots.svg'
import AboutImage from '../../../public/about.png'
import useScrollToSection from '@/generics/hooks/useScrollToSection'
import Link from 'next/link'

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

  const stats = [
    {
      title: '12M',
      description: 'New Jobs by 2030'
    }, {
      title: '30%',
      description: 'All Hours Worked Will Be Automated'
    }, {
      title: '6-12',
      description: 'Months to Be Employable'
    }, {
      title: '0',
      description: 'Formal Education Required'
    }
  ]

  const scrollToSection = useScrollToSection()

  useEffect(() => {
    if (window?.location?.hash) {
      switch (window.location.hash) {
        case '#why-us':
          scrollToSection('why-us')
          break
        case '#about':
          scrollToSection('about')
          break
      }
    }
  }, [])

  return (
    <>
      <section className="py-10 md:py-20 max-w-full overflow-hidden">
        <div className="container">
          <div className="hero flex flex-col md:flex-row items-center justify-between gap-y-8">
            <div className="hero-left">
              <h1 className="font-black leading-tight mb-6">Transform Your Future: Master AI Bots & Models Today.</h1>
              <p className="text-lg mt-4 text-gray-500 leading-relaxed mb-10">Go from Zero to $70K in Just 9 Months—No Experience Needed. All You Need Is the Will to Learn. Anyone Can Achieve This: Will You?</p>
              <div className="flex md:flex-row flex-col items-center gap-4">
                <a href='https://www.linkedin.com/in/chai-lakki-049758211' target='_blank' className="btn primary-btn w-full">Find out how?</a>
                {/* <button className="btn primary-btn-outline w-full" onClick={() => scrollToSection('why-us')}>Learn more</button> */}
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
        <div className="text-center mb-7" id="why-us">
          <h2 className='text-2xl md:text-4xl mb-6 font-black'>Why work with us?</h2>
          <p className='text-gray-500'>Save Time and Money with Expert Mentorship Every Step of the Way.</p>
        </div>
        <div className="container">
          <div className="flex flex-col md:flex-row justify-content-between gap-8 mb-14">
            <div className="grid gap-4 md:w-1/2">
              {
                whyUs.map((item, index) => (
                  <div key={index} className="card px-6 py-8 md:py-8 md:px-10 bg-neutral-100">
                    <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-primary-500 text-white text-lg font-black why-number">
                        {index + 1}
                      </div>
                      <h3 className='mb-0 text-xl md:text-2xl font-black'>{item.title}</h3>
                    </div>
                    <p className='text-gray-500 mt-2 leading-relaxed text-pretty'>{item.description}</p>
                  </div>
                ))
              }
            </div>
            <div className="image-wrapper relative md:w-1/2 md:order-first">
              <Image src={WhyUsImage} alt='Why work with us' style={{ objectFit: 'cover', height: '100%' }} />
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <a href='https://www.linkedin.com/in/chai-lakki-049758211' target='_blank' className="btn primary-btn">Get Access</a>
            <Link href="about" className="btn primary-btn-outline">Learn more</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section>
        <div className="md:p-20 px-4 py-12 bg-neutral-900 text-white relative overflow-hidden">
          <div className="container z-10">
            <h2 className='text-2xl md:text-4xl mb-12 leading-normal font-black text-center'>12 Million Jobs by 2030: Your Path to AI Starts Today!</h2>
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
              <div className='flex-1 grid grid-cols-2 items-start'>
                {
                  stats.map((each, index) => (
                    <div className="stats" key={index}>
                      <h3 className='text-4xl md:text-5xl font-black mb-4'>{each.title}</h3>
                      <p className='text-lg md:text-xl'>{each.description}</p>
                    </div>
                  ))
                }
              </div>
              <div className='flex-1 text-pretty'>
                <p>
                  The IT industry has a major problem right now. There are a lot of companies shifting into AI right now and there are not enough qualified
                  people for this giant technological shift.
                </p><br />
                  <p>
                  According to recent studies by McKinsey & Company, there will be around
                  12 million new jobs or requirements in this space by 2030. Around 30 percent of all hours worked WILL be automated with the help of
                  Generative AI and Low Code Tooling.
                </p><br />
                <p>
                  We are in the middle of a technological shift that we have not seen the likes of since the advent of the internet. The quicker you can take advantage of this, the better. In fact most of the top
                  people in this field have no formal eduvation in AI.
                </p>
              </div>
            </div>
          </div>
          <div className="shape cta-3"></div>
          <div className="shape cta-4"></div>
        </div>
      </section>

      {/* About Us */}
      <section className='relative py-20 md:py-40 max-w-full overflow-hidden' id="about">
        <Image src={Shape1} alt='shape 1' className='shape about-hero-1 hidden md:block' />
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 about">
            <div>
              <h2 className='text-2xl md:text-4xl md:leading-tight mb-6 font-black'>About Us: Personalized Coaching to Help You Find Work Fast</h2>
              <p className='text-gray-500 mb-12'>
                Our mission at Applied AI is to provide personalized coaching that helps you upskill quickly, whether you're aiming to break into the industry or transition from another technology.
                <br /><br />
                We're here to ensure you avoid the pitfalls we encountered, making your learning journey smoother and more efficient.
                <br /><br />
                Chai, with around 7 years of experience as a developer, began his career in 2017, working with Fortune 500 companies across Canada and the USA. He later transitioned into AI, where he now serves as a subject matter expert and advisor, helping companies automate processes and optimize resources.
              </p>
              <Link href="about" className="btn primary-btn">Find out more</Link>
            </div>
            <div className='flex justify-end relative md:order-first'>
              <div className="image-wrapper">
                <Image src={AboutImage} alt='About Us' style={{ objectFit: 'cover', height: '100%' }} />
              </div>
              <Image src={Dots} alt='shape 1' className='shape about-hero-2' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Landing