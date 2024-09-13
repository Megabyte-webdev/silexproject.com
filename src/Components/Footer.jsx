import React from 'react'

const Footer = () => {
  return (
    <div className='py-4 bg-black text-white min-h-96 w-[98%] mx-auto md:w-full'>
        <div className='w-[90%] mx-auto border-b-2 border-gray-400 py-4 my-6 flex flex-wrap justify-between items-center'>
            <section className='h-40 rounded-md flex-grow md:w-48 max-w-96 w-[90%] p-6 m-4 transition-all ease-in-out duration-300'>
                <h2 className='text-xl md:text-2xl text-white'>Ready to Transform your Business?<br/>Take the first step Today!</h2>
                <p>Totam rem aperiam, eaque ipsa quae ab lilo inventore veritatis et quasi architecto baetae vitae dicta sunt.</p>
            </section>
            <section className='flex-grow flex flex-col justify-end h-24 rounded-md md:w-max max-w-48 w-[90%] p-6 m-4 transition-all ease-in-out duration-300'>
                <p className='text-gray-500'>Call Us</p>
                <a className='text-xl text-blue-600' href="tel:+23481062344890">+234 810 6234 4890</a>
            </section>
            <section className='flex-grow flex flex-col justify-end h-24 rounded-md md:w-max max-w-48 w-[90%] p-6 m-4 transition-all ease-in-out duration-300'>
                <p className='text-gray-500 text-sm'>Email Us</p>
                <a className='text-xl text-blue-600' href="mailto:cyber@silexsecure.com">cyber@silexsecure.com</a>
            </section>
        </div>
        <div className='w-[90%] mx-auto border-b-2 border-gray-400 py-4 my-6 flex flex-wrap justify-between items-center'>
            <section className='md:w-max p-4 min-w-[100px]'>
                <h3 className='text-xl text-gray-200 my-2'>Quick Link</h3>
                <p className='text-gray-400 text-sm my-2'>Home</p>
                <p className='text-gray-400 text-sm my-2'>Home</p>
                <p className='text-gray-400 text-sm my-2'>Home</p>
                <p className='text-gray-400 text-sm my-2'>Home</p>
                <p className='text-gray-400 text-sm my-2'>Home</p>
            </section>
            <section className='md:w-max p-4 min-w-[100px]'>
                <h3 className='text-xl text-gray-200 my-2'>Services</h3>
                <p className='text-gray-400 text-sm'>Home</p>
                <p className='text-gray-400 text-sm my-2'>Home</p>
                <p className='text-gray-400 text-sm my-2'>Home</p>
                <p className='text-gray-400 text-sm my-2'>Home</p>
                <p className='text-gray-400 text-sm my-2'>Home</p>
            </section>
            <section className='md:w-max p-4 min-w-[100px]'>
                <h3 className='text-xl text-gray-200 my-2'>Resources</h3>
                <p className='text-gray-400 text-sm my-2'>Home</p>
                <p className='text-gray-400 text-sm my-2'>Home</p>
                <p className='text-gray-400 text-sm my-2'>Home</p>
                <p className='text-gray-400 text-sm my-2'>Home</p>
                <p className='text-gray-400 text-sm my-2'>Home</p>
            </section>
            <section className='md:w-max p-4 min-w-[100px]'>
                <h3 className='text-xl text-gray-200 my-2'>Social</h3>
                <p className='text-gray-400 text-sm my-2'>Home</p>
                <p className='text-gray-400 text-sm my-2'>Home</p>
                <p className='text-gray-400 text-sm my-2'>Home</p>
                <p className='text-gray-400 text-sm my-2'>Home</p>
                <p className='text-gray-400 text-sm my-2'>Home</p>
            </section>
            <section className='md:w-max p-4 min-w-[100px]'>
                <h3 className='text-xl text-gray-200 my-2'>Legal</h3>
                <p className='text-gray-400 text-sm my-2'>Home</p>
                <p className='text-gray-400 text-sm my-2'>Home</p>
                <p className='text-gray-400 text-sm my-2'>Home</p>
                <p className='text-gray-400 text-sm my-2'>Home</p>
                <p className='text-gray-400 text-sm my-2'>Home</p>
            </section>
        </div>
        <p className='w-[90%] mx-auto my-2 text-gray-400 text-xs font-medium text-center'>Copyright &copy; 2023 Axpos By Jegtheme. All rights reserved</p>
    </div>
  )
}

export default Footer
