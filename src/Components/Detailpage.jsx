import React from 'react'
function Detailpage(){
    const [detail,setDetail] = React.useState([])

    React.useEffect(()=>{
        fetch(`http://localhost:3000/movies`)
    })
        return(
        <>

        </>
    )
}
export { Detailpage }