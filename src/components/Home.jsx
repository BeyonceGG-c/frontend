import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div className='w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto py-24'>
      <div className='w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1'>
        <div className='w-full gap-10 inline-flex justify-start lg:items-start items-center flex-col'>
          <div className='w-full flex-col gap-4'>
            <h2 className='text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center'>Social Book</h2>
            <h2 className='text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center'>Contact Management</h2>
            <p className='text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center'>Start getting things done together with revolutionary contact management features</p>
          </div>
          <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
            <Link to="/new/contact">
              <span className="px-1.5 text-white text-sm font-medium leading-6">Add Now</span>
            </Link>
          </button>
        </div>
        <div className='w-xl'>
          <img src="con-alpha.png" alt="contacts placeholder" />
        </div>
      </div>
    </div>
  )
}

export default Home