import React from 'react';
import { useToast } from './ToastContext';
import '../Style/loader.css'

function WaitingLoader() {
  const { waitingLoader } = useToast()
  if (!waitingLoader) return null;  
  return (
    <div className='flex fixed top-0 left-0 items-center justify-center w-full h-[100vh] bg-[#ffffffb3]'>
      <div>
        <div className=' flex flex-col'>
          <div className="loader"></div>
        </div>
        <p className='text-[10px] text-center italic'>...loading</p> 
      </div>
    </div>
  )
}

export default WaitingLoader