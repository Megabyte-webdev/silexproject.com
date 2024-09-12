import React from 'react'
import assets from '../assets/assets'
const TxtImgSection = () => {
  return (
    <div className='flex flex-wrap justify-center items-center my-5'>
        <img className='w-full max-w-[400px] p-2' src={assets.frame1} alt="avatar" />
        <div className='flex-grow w-80 p-3 md:px-10 mx-5'>
            <h2 className='max-w-[500px] capitalize text-3xl md:text-4xl text-gray-700 font-bold'>Enhance Shop management smoother and more efficient</h2>
            <p className='text-sm text-gray-400 my-5'>Set ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto baetae vitae dicta sunt explicabo.</p>
            <ul className='flex justify-between items-stretch my-4 '>
                <li className='flex-grow flex-shrink w-40 p-1'>
                    <p className='py-2 w-10 h-6 bg-red-800 rounded-md my-2'></p>
                    <h4 className='capitalize text-gray-600 font-medium text-sm md:text-xl'> Smooth payment</h4>
                    <p className='w-40 text-xs text-gray-500'>Duis aute irure dolor in velit reprehenderit in voluptate</p>
                </li>
                <li className='flex-grow flex-shrink w-40 p-1'>
                    <p className='py-2 w-10 h-6 bg-red-800 rounded-md my-2'></p>
                    <h4 className='capitalize text-gray-600 font-medium text-sm md:text-xl'> convenient</h4>
                    <p className='w-40 text-xs text-gray-500'>Duis aute irure dolor in velit reprehenderit in voluptate</p>
                </li>
            </ul>
        </div>
        
    </div>
  )
}

export default TxtImgSection