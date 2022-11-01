import React from 'react'
import {useState} from 'react'
import axios from 'axios'




const App = () => {
  const [country, setcountry] = useState('')
  const [zipcode, setzipcode] = useState('')
  const [data, setdata] = useState()


  const submithandler=async()=>{
    const res=await axios.get(`http://zipcode.apibag.in/api/pincodes/${zipcode}/${country}`)
    setdata(res.data.data)
    console.log(data)
    console.log(res)



  }

  return (
    <div>
      <div className='shadow-2xl h-64 w-screen bg-red'>
        <div className='flex  justify-center'>
        <h1 className='text-2xl '>Fetch Api</h1>
        </div>
        <div className='flex flex-col justify-center items-center my-4'>

      <input type='text' className='h-10 w-1/4 text-2xl' placeholder='Enter Country Name'  value={country} onChange={(e)=>{setcountry(e.target.value)}}/>
      <input type='text' className='h-10 w-1/4 text-2xl' placeholder='Enter Zipcode'  value={zipcode} onChange={(e)=>{setzipcode(e.target.value)}}/>
        <button className='bg-teal-300 w-1/4' onClick={submithandler}>Submit</button>
        </div>
     
      </div>

      <div>
        <ul className='flex flex-col items-center'>
          <li></li>
          <li>{data&& data[0].cityName}</li>
          <li>{data&& data[0].countryName}</li>
          <li>{data&& data[0].latitude}</li>
          <li>{data&& data[0].longitude}</li>
          <li>{data&& data[0].stateName}</li>
          <li>{data&& data[0].zipCode}</li>

          



        </ul>

      </div>
    </div>
  )
}

export default App