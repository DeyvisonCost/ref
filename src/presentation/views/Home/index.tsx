import React from 'react'

import { ToastContainer } from 'react-toastify'

import Footer from '@/components/Footer'
import { Header } from '@/components/Header'
import ScrollToTop from '@/components/ScrollToTop'
import { SectionPlan } from '@/presentation/views/HeroSectionPlan'
import { HeroSectionRh } from '@/presentation/views/HeroSectionRh'
import { Banner } from '@/presentation/views/SectionBanner'
import { SectionFaq } from '@/presentation/views/SectionFaq'
import { SectionForm } from '@/presentation/views/SectionForm/index'
import { SectionPartners } from '@/presentation/views/SectionPartners'
import { SectionTestimonial } from '@/presentation/views/SectionTestimonial'
import 'react-toastify/dist/ReactToastify.css'

const Home = () => {
  return (
    <>
      <Header />
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover />

      <Banner />
      <HeroSectionRh />
      <SectionForm />
      <SectionPlan />
      <SectionTestimonial />
      <SectionPartners />
      <SectionFaq />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default Home
