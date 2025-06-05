import React, { useEffect, useState } from 'react'
import ViewContact from './ViewContact'
import { useNavigate, useParams } from 'react-router';

const GetContact=()=> {
  let myJID=useParams();

    const [ShowRest, setShowRest]=useState({})
    useEffect(()=>{
    const dataReq = new Request('http://localhost:10123/view/by_id/' + myJID.jid,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        }
      })

    fetch(dataReq)
      .then(resp => resp.json())
      .then(data => {
        setShowRest(data)
      })
      .catch(err => console.log(err))
  }, [])


    return (
        <>
            {ShowRest._id ?
                <>
                    {/* The button has a click event that runs an anonymous function executing a navigation to the previous page */}
                    <div className='flex flex-row justify-center'>
                    <div className='basis-xl'>
                            <ViewContact key={ShowRest._id} jid={ShowRest._id} firstname={ShowRest.firstname} lastname={ShowRest.lastname} age={ShowRest.Age} gender={ShowRest.gender} Description={ShowRest.Description} Jobtitle={ShowRest.jobTitle} department={ShowRest.Department} secondaryphoto={ShowRest.SecondaryPhoto && ShowRest.SecondaryPhoto}/>
                    </div>
                    </div>
                </>
                :
                <div className='text-xl'>Loading Contact</div>
            }
        </>
    )
}

export default GetContact