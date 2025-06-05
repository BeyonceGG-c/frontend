import React from 'react'

const LikesBar = ({ likes, setLikes, jid }) => {
  const handleThumbs = (e) => {
    if (e.target.id == "up" && likes >= 5)
      return
    else if (e.target.id == "down" && likes <= 0)
      return

    const dataReq = new Request('http://localhost:10123/rate/' + jid + '/' + e.target.id,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        }
      }
    )

    fetch(dataReq)
      .then(resp => resp.json())
      .then(data => {
        data.error && alert(data.error)


        if (data.message.modifiedCount) {


          if (e.target.id == "up")
            setLikes(likes + 1)
          else if (e.target.id == "down")
            setLikes(likes - 1)

        }
      })
      .catch(err => alert("error"))

  }


  return (
    <div className='flex flex-row gap-6'>
      <div>{likes} <i className="fa-solid fa-star text-yellow-600 delay-150 duration-300 ease-in-out transistion-transform hover:scale-150"></i></div>
      <div>
        <i id='up' onClick={handleThumbs} className="fa-solid fa-thumbs-up cursor-pointer delay-150 duration-300 ease-in-out transistion-transform hover:scale-150"></i>
      </div>
      <div>
        <i id='down' onClick={handleThumbs} className="fa-solid fa-thumbs-down cursor-pointer delay-150 duration-300 ease-in-out transistion-transform hover:scale-150"></i>
      </div>
    </div>
  )
}


export default LikesBar