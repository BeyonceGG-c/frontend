import React, { useState } from 'react'
import { Link } from 'react-router'
import LikesBar from './LikesBar'
const ViewCard = ({ jid, firstname, age, primaryphoto, options, likes, gender }) => {
    // const [formRecord, setFormRecord] = useState({})
    const [theLikes, setTheLikes] = useState(likes)
    const newPath = "/view/by_id/" + jid
    const Male = "bg-blue-100 "
    const Female = "bg-pink-100 "
  

return (
    <>
        < div className={gender.toLowerCase() =="male"? Male + "flex flex-col items-center border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 " : Female + "flex flex-col items-center border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 "}>
            <div className="flex flex-col justify-between p-4 leading-normal">

                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-36 md:rounded-none md:rounded-s-lg" src={primaryphoto} alt="" />
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900"> {firstname} </h5>
                <p className="mb-3 font-normal text-gray-700">Age:{age}</p>
                <LikesBar likes={theLikes} setLikes={setTheLikes} jid={jid} />
                <Link to={newPath}>
                    <button
                        type="button"
                        className="px-4 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative"
                    >
                        View more
                    </button>
                </Link>
            </div>

            <div className='flex flex-row gap-12'>
            </div>
        </div>

    </>
)

}



export default ViewCard