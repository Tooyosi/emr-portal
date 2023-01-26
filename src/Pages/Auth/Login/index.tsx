import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input } from 'reactstrap'

const Login = () => {
    const navigate = useNavigate();

    const submitHandler = (e:any)=>{
        e.preventDefault()
        navigate('/doctor');
    }
  return (
    <div className='mt-5'>
        <h4>Welcome, Sign in</h4>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="" className="small">Email</label>
                <Input type='email' required placeholder='Email address'/>
            </div>
            <div>
                <label htmlFor="" className="small">Password</label>
                <Input type='password' required  placeholder='******'/>
            </div>
            <div className="mt-5 mb-3">
                <Button color='amber' className='py-3 text-white' block>Sign In</Button>
            </div>
        </form>
    </div>
  )
}

export default Login