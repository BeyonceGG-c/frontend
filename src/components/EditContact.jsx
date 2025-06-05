import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

const EditContact = () => {
    let myJID = useParams();
    const goBack = useNavigate()
    const [formRecord, setFormRecord] = useState({})
    const [formErrorRecord, setFormErrorRecord] = useState({})
    const ERRORSTYLE = "border-red-700  border-2 "

    useEffect(() => {
        const dataReq = new Request(
            'http://localhost:10123/view/by_id/' + myJID.jid, {

            //method:"GET",
            headers: {
                "content-type": "application/json",
            }


        })

        fetch(dataReq)
            .then(resp => resp.json())
            .then(data => {
                setFormRecord(data)
            })
    }, [])

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
            'http://localhost:10123/update/_id/' + myJID.jid,
            {
                method: "PUT",
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
    const handleGoBack = () => {
        goBack(-1)
    }
    return (
        <>
            <div className='w-md mt-5 p-8 border-2 border-indigo-600 rounded-lg'>
                <form method='POST'>
                    <div className='my-4'>

                        <label htmlFor="records" className="relative">
                            <input
                                type="text"
                                id="records"
                                value={formRecord.records}
                                className={formErrorRecord.records ? formErrorRecord.records + "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" : "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"}
                                onChange={handleChange}
                            />

                            <span
                                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-900 dark:text-white"
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
                                value={formRecord.firstname}
                                className={formErrorRecord.firstname ? formErrorRecord.firstname + "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" : "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"}
                                onChange={handleChange}
                            />

                            <span
                                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-900 dark:text-white"
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
                                value={formRecord.lastname}
                                className={formErrorRecord.lastname ? formErrorRecord.lastname + "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" : "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"}
                                onChange={handleChange}
                            />

                            <span
                                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-900 dark:text-white"
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
                                value={formRecord.gender}
                                className={formErrorRecord.gender ? formErrorRecord.gender + "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" : "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"}
                                onChange={handleChange}
                            />

                            <span
                                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-900 dark:text-white"
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
                                value={formRecord.jobTitle}
                                className={formErrorRecord.jobTitle ? formErrorRecord.jobTitle + "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" : "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"}
                                onChange={handleChange}
                            />

                            <span
                                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-900 dark:text-white"
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
                                value={formRecord.Description}
                                className={formErrorRecord.Description ? formErrorRecord.Description + "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" : "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"}
                                onChange={handleChange}
                            />

                            <span
                                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-900 dark:text-white"
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
                                value={formRecord.Age}
                                className={formErrorRecord.Age ? formErrorRecord.Age + "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" : "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"}
                                onChange={handleChange}
                            />

                            <span
                                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-900 dark:text-white"
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
                                value={formRecord.Department}
                                className={formErrorRecord.Department ? formErrorRecord.Department + "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" : "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"}
                                onChange={handleChange}
                            />

                            <span
                                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-900 dark:text-white"
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
                                value={formRecord.Primaryphoto}
                                className={formErrorRecord.Primaryphoto ? formErrorRecord.Primaryphoto + "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm" : "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"}
                                onChange={handleChange}
                            />

                            <span
                                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-900 dark:text-white"
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
                                value={formRecord.SecondaryPhoto}
                                className={formErrorRecord.SecondaryPhoto ? formErrorRecord.SecondaryPhoto + "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm" : "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"}
                                onChange={handleChange}
                            />

                            <span
                                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-900 dark:text-white"
                            >
                                Secondary Photo
                            </span>
                        </label>
                    </div>

                    <div className='grid grid-cols-2'>
                        <button className="group inline-block rounded-sm bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:ring-3 focus:outline-hidden"
                            type='reset' onClick={handleGoBack}
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
                                Update Contact
                            </span>
                        </button>

                    </div>
                </form>
            </div>


        </>
    )
}

export default EditContact