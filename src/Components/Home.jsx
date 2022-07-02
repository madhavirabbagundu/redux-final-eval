import React from 'react'
import { Link } from 'react-router-dom'
function Home(){
    const [data,setdata] = React.useState([])
    console.log(data)
    React.useEffect(()=>{
        fetch(`http://localhost:3000/movies`)
        .then((res)=>res.json())
        .then((res)=>setdata(res))
    },[])
    return(
        <>
        <div>
            {data.map((item)=>(
                <div className = "data" key = {item.id}>
                  {/* <div className='data'> */}
                    {/* <div className='data1'> */}
                        <div className='data1'>
                  <img style = {{width:80}}src = {item.poster_path}/>
                  <p>Released-data:{item.release_date}</p>
                  <p style = {{color:'red'}}><h5>title:{item.title}</h5></p>
                                 <p> Popularity:{item.popularity}</p>
                                 <Link to = {"Booking"}>show Details</Link>
                  </div>
                  {/* </div> */}
                  
                </div>
            ))}
        </div>
        </>
    )
}
export { Home }