import React from 'react'

const LoginPage = () => {
  return (
    <div className='pt-20 pl-10'>
        {/* <div className="bg-blue-600 h-90 w-70 rounded-4xl  ">
           <div className='font-bold pt-20 pl-6 '>Username:</div>
           <div className=''>
            <div className='font-bold pt-10 pl-6'>Password:</div>
            <input className='bg-amber-50 h-6 w-30'  type="password" name="pass" id="pass" />
           </div>
           <div className='pt-20 pl-20'>
            <div className='bg-red-700 h-8 w-30 rounded-4xl pl-6 font-bold '>Submit</div>
           </div>
           <div className='font-bold'>Forgety Password ?</div>
        </div> */}
        <div className='border border-amber-500 h-90 w-70 rounded-2xl'>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" />
            </div>
        </div>
    </div>
  )
}

export default LoginPage    