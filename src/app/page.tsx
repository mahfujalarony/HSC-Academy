import React from 'react'
import Hero from '@/Components/Hero'
import InfoCard from '@/Components/InfoCard'
import HscFeatureTabs from '@/Components/HscFeatureTabs'
import CourseIntro from '@/Components/CourseIntro'
import PromotionalSection from '@/Components/PromotionalSection'
import Testimonial from '@/Components/Testimonial'
import HelpSection from '@/Components/HelpSection'

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
    </div>
  )
}

export default Page;




