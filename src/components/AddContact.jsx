import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'

const AddContact = () => {
  const goBack = useNavigate()
  const [formRecord, setFormRecord] = useState({})
  const [formErrorRecord, setFormErrorRecord] = useState({})
  const ERRORSTYLE = "border-red-700 border-2 "

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formRecord.records) {
      setFormErrorRecord({
        ...formErrorRecord,
        record: ERRORSTYLE
      })
      return
    }

    if (!formRecord.firstname) {
      setFormErrorRecord({
        ...formErrorRecord,
        firstname: ERRORSTYLE
      })
      return
    }
    if (!formRecord.lastname) {
      setFormErrorRecord({
        ...formErrorRecord,
        lastname: ERRORSTYLE
      })
      return
    }
    if (!formRecord.Primaryphoto) {
      setFormErrorRecord({
        ...formErrorRecord,
        Primaryphoto: ERRORSTYLE

      })

      return
    }
    if (!formRecord.SecondaryPhoto) {
      setFormErrorRecord({
        ...formErrorRecord,
        SecondaryPhoto: ERRORSTYLE
      })
      return
    }
    if (!formRecord.jobTitle) {
      setFormErrorRecord({
        ...formErrorRecord,
        jobTitle: ERRORSTYLE
      })
      return
    }
    if (!formRecord.Age) {
      setFormErrorRecord({
        ...formErrorRecord,
        Age: ERRORSTYLE
      })
      return
    }
    if (!formRecord.Description) {
      setFormErrorRecord({
        ...formErrorRecord,
        record: ERRORSTYLE
      })
      return
    }

    if (!formRecord.Department) {
      setFormErrorRecord({
        ...formErrorRecord,
        record: ERRORSTYLE
      })
      return
    }
    if (!formRecord.gender) {
      setFormErrorRecord({
        ...formErrorRecord,
        record: ERRORSTYLE
      })
      return
    }
    const dataReq = new Request(
      'http://localhost:10123/new/contact',
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formRecord)
      })

    fetch(dataReq)
      .then(resp => resp.json())
      .then(data => {
        data.error && alert(data.error)
        goBack(-1)
      })
  }


  const handleChange = (e) => {
    setFormRecord({
      ...formRecord,
      [e.target.id]: e.target.value
    })
    setFormErrorRecord({
      ...formErrorRecord,
      [e.target.id]: ""
    })
  }


  const handleReset = () => {
    setFormRecord("")
  }


  return (
    <>
      <div className='w-md mt-5 p-8 border-2 border-indigo-600 rounded-lg'>
        <form method='POST'>
          <Link to={"/"}>Home</Link>
          <div className='my-4'>

            <label htmlFor="Record" className="relative">
              <input
                type="text"
                id="records"
                placeholder=""
                className={formErrorRecord.records ? formErrorRecord.records + "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" : "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"}
                onChange={handleChange}
              />

              <span
                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-100 dark:text-black"
              >
                Record
              </span>
            </label>
          </div>
          <div className='my-4'>
            <label htmlFor="firstname" className="relative">
              <input
                type="text"
                id="firstname"
                placeholder=""
                className={formErrorRecord.firstname ? formErrorRecord.firstname + "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" : "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"}
                onChange={handleChange}
              />

              <span
                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-100 dark:text-black"
              >
                FirstName
              </span>
            </label>
          </div>

          <div className='my-4'>
            <label htmlFor="lastname" className="relative">
              <input
                type="text"
                id="lastname"
                placeholder=""
                className={formErrorRecord.lastname ? formErrorRecord.lastname + "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" : "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"}
                onChange={handleChange}
              />

              <span
                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-100 dark:text-black"
              >
                Lastname
              </span>
            </label>
          </div>

          <div className='my-4'>
            <label htmlFor="gender" className="relative">
              <input
                type="text"
                id="gender"
                placeholder=""
                className={formErrorRecord.gender ? formErrorRecord.gender + "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" : "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"}
                onChange={handleChange}
              />

              <span
                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-100 dark:text-black"
              >
                Gender
              </span>
            </label>
          </div>


          <div className='my-4'>

            <label htmlFor="jobTitle" className="relative">
              <input
                type="text"
                id="jobTitle"
                placeholder=""
                className={formErrorRecord.jobTitle ? formErrorRecord.jobTitle + "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" : "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"}
                onChange={handleChange}
              />

              <span
                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-100 dark:text-black"
              >
                jobTitle
              </span>
            </label>
          </div>
          <div className='my-4'>
            <label htmlFor="Record" className="relative">
              <input
                type="text"
                id="Description"
                placeholder=""
                className={formErrorRecord.Description ? formErrorRecord.Description + "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" : "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"}
                onChange={handleChange}
              />

              <span
                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-100 dark:text-black"
              >
                Description
              </span>
            </label>
          </div>
          <div className='my-4'>
            <label htmlFor="Record" className="relative">
              <input
                type="text"
                id="Age"
                placeholder=""
                className={formErrorRecord.Age ? formErrorRecord.Age + "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" : "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"}
                onChange={handleChange}
              />

              <span
                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-100 dark:text-black"
              >
                Age
              </span>
            </label>
          </div>

          <div className='my-4'>
            <label htmlFor="Record" className="relative">
              <input
                type="text"
                id="Department"
                placeholder=""
                className={formErrorRecord.Department ? formErrorRecord.Department + "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" : "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"}
                onChange={handleChange}
              />

              <span
                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-100 dark:text-black"
              >
                Department
              </span>
            </label>
          </div>

          <div className='my-4'>
            <label htmlFor="Record" className="relative">
              <input
                type="text"
                id="Primaryphoto"
                placeholder=""
                className={formErrorRecord.Primaryphoto ? formErrorRecord.Primaryphoto + "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm" : "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"}
                onChange={handleChange}
              />

              <span
                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-100 dark:text-black"
              >
                PrimaryPhoto
              </span>
            </label>
          </div>

          <div className='my-4'>
            <label htmlFor="Record" className="relative">
              <input
                type="text"
                id="SecondaryPhoto"
                placeholder=""
                className={formErrorRecord.SecondaryPhoto ? formErrorRecord.SecondaryPhoto + "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm" : "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"}
                onChange={handleChange}
              />

              <span
                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-100 dark:text-black"
              >
                Secondary Photo
              </span>
            </label>
          </div>

          <div className='grid grid-cols-2'>
            <button className="group inline-block rounded-sm bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:ring-3 focus:outline-hidden"
              type='reset' onClick={handleReset}
            >
              <span className="block rounded-xs bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                Cancel
              </span>
            </button>

            <button className="group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:ring-3 focus:outline-hidden"
              type='submit' onClick={handleSubmit}
            >
              <span
                className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent"
              >
                Add New Contact
              </span>
            </button>

          </div>
        </form>
      </div>


    </>

  )
}

export default AddContact