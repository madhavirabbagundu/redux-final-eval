import React from 'react'
function Booking(){
 const [detail,setDetail] = React.useState([])

    React.useEffect(()=>{
        fetch(`http://localhost:3000/moviesBooked`)
        .then((res)=>res.json())
        .then((res)=>setDetail(res))
    },[])
    return(
        <>
        
        {detail.map((item)=>(
           <div  className = "booking" key = {item.id}>
            <p>Movie_id: {item.movie_id}</p>
            <p>Name:{item.name}</p>
            <p>Seat: {item.seat}</p>
           </div>
        ))}
        </>
    )
}
export { Booking }