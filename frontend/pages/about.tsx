import { NextPage } from 'next'
import React from 'react'

const About: NextPage = () =>{
  return(
    <div className='h-screen'>
      <div className='flex flex-col items-center justify-center p-4 text-center h-5/6'>
        <h1 className='text-4xl text-white'>
          About Tailwind button generator
        </h1>
        <div className='mt-12 text-2xl text-gray-300'>
          Application to generate and view custom buttons in tailwindCSS. <br />
          App created in Next.js, Typescript, TailwindCSS, Strapi, Graphql. <br />
          If you want to check out the code, take a look at&nbsp;
          <a className='font-medium text-purple-500 underline duration-100 bg-transparent border-white border-none rounded-md cursor-pointer hover:text-purple-700' target='_black' href="https://github.com/stanislawsztrajt/tailwind-custom-buttons-generator">my repository on github</a>
        </div>

        <div className="mt-2 text-lg text-gray-500">
          Official tailwindCSS page: <a className='font-medium text-purple-700 underline duration-100 bg-transparent border-white border-none rounded-md cursor-pointer hover:text-purple-900' href="https://tailwindcss.com" target='_black'>https://tailwindcss.com</a> 
        </div>
      </div>
    </div>
  )
}

export default About;