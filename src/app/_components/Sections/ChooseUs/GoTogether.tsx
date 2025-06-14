import React from 'react'
import Button from '../../Button'

export default function GoTogether() {
  return (
    <section className="container bg-[#E0E3CC] w-full py-10">
          <div className="text-center">
            <div className="w-full mt-20">
                <h4 className='text-4xl text-gray-700 mb-10'>Have you project in mind?</h4>
              <h2 className="text-7xl lg:text-7xl ">
              Let’s make something <br /> great together!
              </h2>
            </div>
            <div className='w-full flex justify-center mt-20'>

            <Button title='Contact Us' hoverBackgroundColor='black' hoverTextColor='white'/>
            </div>
          </div>
        </section>
  )
}
