import React from 'react'
import BannerSection from '../Components/Home/BannerSection'
import AboutSection from '../Components/Home/AboutSection'
import AboutBox from '../Components/Home/AboutBox'
import Services from '../Components/Home/Services'
import Skills from '../Components/Home/Skills'
import Footer from '../Components/Home/Footer'

import { DiNpm, DiReact, DiNodejs } from "react-icons/di"; 
import ContactForm from '../Components/Home/ContactForm'




const Home = () => {
  return (
    <div>
        <div className="homepage container mx-auto">
            <BannerSection />
            <AboutSection />
            <div className='flex justify-center items-center mt-14'>
            <AboutBox className="px-14" caption="Full Name" description="Your name goes here" />
            <AboutBox className="px-14" caption="Email Address" description="Your name goes here"/>
            <AboutBox className="px-14" caption="Twitter" description="Your name goes here"/>
            <AboutBox className="px-14" caption="Phone" description="Your name goes here"/>
            </div>
            <h1 className='text-center headText py-36'>What i do</h1>
            <div className='flex justify-center items-center py-4'>
            <Services borderColor="hover:border-b-sky-500" colorText="#0ea5e9" fontSize="75px" servicesIcon={<DiReact />} servicesName="Software Dev." />
            <Services borderColor="hover:border-b-red-500" colorText="#ef4444" fontSize="75px"  servicesIcon={<DiNpm />} servicesName="Web Dev." />
            <Services borderColor="hover:border-b-yellow-500" colorText="#facc15" fontSize="75px"  servicesIcon={<DiNodejs />} servicesName="Web Design" />
            </div>
            <h1 className='text-center headText py-36'>My Skills</h1>
            <div className='flex justify-center items-center py-4'>
              <Skills color="text-green-500" skillsCount="50%" skillsName="HTML" />
              <Skills color="text-green-500" skillsCount="20%" skillsName="CSS" />
              <Skills color="text-green-500" skillsCount="10%" skillsName="JAVASCRIPT" />
              <Skills color="text-green-500" skillsCount="2%" skillsName="PHP" />
            </div>
            <h1 className='text-center headText py-36'>Get in touch</h1>
            <div>
              <ContactForm /> 
            </div>
            <Footer />
        </div>
    </div>
  )
}

export default Home