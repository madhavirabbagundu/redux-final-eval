import React from 'react'
import { Link } from 'react-router-dom'
function Login(){
    const [email,setEmail] = React.useState("")
    const [password,setPassword] = React.useState("")

    const handleAdd = (e)=>{
        setEmail(e.target.value)
    }

    const handleAdd1 = (e)=>{
        setPassword(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    return(
        <>
        <div>
            <form onSubmit = {handleSubmit}>
            <input type = "email"
            placeholder='enter your email'
            value = {email}
            onChange={handleAdd}/>
            <br/>

<input type = "password"
            placeholder='enter your password'
            value = {password}
            onChange={handleAdd1}/>
       {/* <input type= "submit" value= "submit"/> */}
       <Link to = {'/'}>submit</Link>

           </form>
        </div>
        </>
    )
}
export { Login }