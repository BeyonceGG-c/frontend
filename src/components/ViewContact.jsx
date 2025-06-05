import React, { useState } from 'react'
import { Link } from 'react-router'

const ViewContact = ({ jid, record, firstname, lastname, primaryphoto, secondaryphoto, Jobtitle, likes, Description, age, department, options, gender }) => {
  const [theLikes, setTheLikes] = useState(likes)
  const newPath = "/view/by_id/" + jid
  const editPath = "/update/_id/" + jid
  const deletePath = "/remove/by_id/" + jid


  return (
    <>
      <div className='py-8'>
        <div className="flex flex-col items-center bg-white border border-double-200 rounded-xl shadow-sm md:flex-row md:max-w-6xl hover:bg-gray-100">
          <div className="flex flex-col items-center py-10 px-5 bg-gray-200 w-min-xl">
            <div className='relative items-s -start-1/3'>
              <a href="/list" className="text-blue-600 hover:underline">
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                  <span className="sr-only">Icon description</span>
                </button>
              </a>

            </div>
            <img className="w-96 h-auto mb-3 rounded-full shadow-lg" src={secondaryphoto} alt="" />
            <h5 className="mb-1 text-xl font-medium text-gray-900">{firstname}</h5>
            {<span className="text-sm text-gray-500">{lastname}</span>}
            <div className="flex mt-4 md:mt-6">
    
            </div>
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <div className="flex-row">
              <div className="grid grid-cols-4">
                <h5 className="col-span-2 mb-2 text-2xl font-bold tracking-tight text-gray-900">Contact</h5>
                <Link to={deletePath}>
                  <i className="fa-solid fa-trash text-red-600 delay-150 duration-300 ease-in-out transistion-transform hover:scale-150"></i>
                </Link>
                <Link to={editPath}>
                <i className="fa-solid fa-user-pen text-green-600 delay-150 duration-300 ease-in-out transistion-transform hover:scale-150"></i>
                </Link>

                <div>

                </div>
              </div>
            </div>
            <div className="flex-row">
              <div className='grid grid-cols-3'>
                {<p className="col-span-4 mb-3 font-normal text-gray-700">{Description}</p>}
                <p className="mb-3 font-normal text-gray-700">Age:{age}</p>
              </div>
            </div>
            <div className="flex-row">
              <div className='grid grid-cols-3'>
                {<p className="col-span-4 mb-3 font-normal text-gray-700">Gender:{gender}</p>}
                {<p className="mb-3 font-normal text-gray-700">JobTitle:{Jobtitle}</p>}
              </div>
            </div>
            <div className="flex-row">
              <div className='grid grid-cols-3'>
                {<p className="col-span-4 mb-3 font-normal text-gray-700">Department:{department}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewContact