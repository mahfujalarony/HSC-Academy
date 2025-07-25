import Image from 'next/image'
import React from 'react'

// Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'
  className?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', className = '', children, ...props }, ref) => {
    const baseClasses = 'px-6 py-3 rounded-lg font-medium text-lg transition-all duration-200 flex items-center justify-center'
    
    const variantClasses = {
      default: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md',
      outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
    }

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

// Hero Component
const Hero = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20'>
      <div className='flex  flex-col lg:flex-row items-center gap-8 md:gap-12'>
        {/* Left Content */}
        <div className='flex-1 space-y-6'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d4797] leading-tight'>
            SSC , 2025-এর অনরুপ মডেল টেস্টে A+ প্রস্তুতি জালাই করে নাও
          </h1>

          <p className='text-lg md:text-xl text-[#2d4797]'>
            দেশের একমাত্র পূর্ণাঙ্গ অনলাইন মডেল টেস্ট প্রোগ্রাম। ঘরে বসেই SSC পরীক্ষার A+ প্রস্তুতি নিশ্চিতে এই একটি কোর্সই যথেষ্ট!
          </p>

          <div className='space-y-4 text-[#2d4797]'>
            <h3 className='text-xl font-semibold '>
              এই কোর্সে আপনি পাবেন:
            </h3>
            <ul className='grid md:grid-cols-2 space-y-6'>
              <li className='flex items-start gap-2'>
                <span className='text-green-500 mt-1'>✔️</span>
                <span>নিজের পছন্দমত স্লটে পরীক্ষা দেয়ার সুবিধা</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-green-500 mt-1'>✔️</span>
                <span>১২টি সাবজেক্টের প্রত্যেকটির ৪ সেট করে সল্যুশন PDF</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-green-500 mt-1'>✔️</span>
                <span>বিষয়ভিত্তিক গাইডলাইন/শেষ মুহূর্তের দিকনির্দেশনা ভিডিও</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-green-500 mt-1'>✔️</span>
                <span >১২টি বোর্ড অনুরূপ পূর্ণাঙ্গ (CQ + MCQ) মডেল টেস্ট</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-green-500 mt-1'>✔️</span>
                <span >১০টি জ্ঞানমূলক, অনুধাবনমূলক প্রশ্নব্যাংক PDF</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-green-500 mt-1'>✔️</span>
                <span >পরীক্ষার চলাকালীন সময়ে ওয়ান শট লাইভ ক্লাস</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Content */}
        <div className=' border-4 rounded-lg border-[#2d4797] h-full px-6 py-10 flex-1 w-full max-w-md lg:max-w-none'>
          <div className=' p-6 shadow-lg bg-white'>
            <div className='overflow-hidden rounded-lg mb-6'>
              <Image
                src="/pic5/a.jpg"
                alt="GPA 5 Hero Image"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            <div className='flex flex-col sm:flex-row gap-4'>
              <Button variant="outline" className='flex-1 py-3'>
                ডিসকাউন্ট রিকোয়েস্ট কর
              </Button>
              <Button className='flex-1 py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white'>
                কোর্সটি কিনুন
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero