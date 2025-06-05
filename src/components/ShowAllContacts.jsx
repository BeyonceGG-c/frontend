import React, { useEffect, useState } from 'react'
import ViewContact from './ViewContact'
import { Link } from 'react-router'
import ViewCard from './ViewCard'



const ShowAllContacts = () => {

  const [AllContacts, SetAllContacts] = useState([])

  useEffect(() => {
    const dataReq = new Request('http://localhost:10123/list',
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        }
      })

    fetch(dataReq)
      .then(resp => resp.json())
      .then(data => {
        SetAllContacts(data)
      })
      .catch(err => console(err))
  }, [])


  return (
    <>
       <div className='py-12'>
        <div className='w-full max-w-7xl mx-auto'>
          <div className='grid grid-cols-3 gap-8'>
            
            {!AllContacts[0] ?
              <p className='text-9xl'>Loading...</p>
              :
              <>
                {AllContacts.map(elem => {

                  return (

                    <ViewCard key={elem._id} jid={elem._id} firstname={elem.firstname} gender={elem.gender} age={elem.Age} primaryphoto={elem.Primaryphoto && elem.Primaryphoto} likes={elem.likes ? elem.likes : 0} options={false} />
                    
                  )

                  

                })}
              </>
              // </div>
            }

           <a href='/view' className="text-blue-600 hover:underline">

           </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShowAllContacts