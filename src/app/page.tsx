import React from 'react'
import Hero from '@/Components/Page/Hero'
import InfoCard from '@/Components/Page/InfoCard'
import HscFeatureTabs from '@/Components/Page/HscFeatureTabs'
import CourseIntro from '@/Components/Page/CourseIntro'
import PromotionalSection from '@/Components/Page/PromotionalSection'
import Testimonial from '@/Components/Page/Testimonial'
import HelpSection from '@/Components/Page/HelpSection'
import Investor from '@/Components/Page/Investor'
import Footer from '@/Components/Page/Footer'

const Page = () => {
  return (
    <div>
      <Hero />
      <InfoCard />
      <HscFeatureTabs />
      <CourseIntro />
      <PromotionalSection />
      <Testimonial />
      <HelpSection />
      <Investor />
      <Footer />
    </div>
  )
}

export default Page;




