import React from 'react'

const Footer = () => {
  return (
    <div className='py-4 bg-black text-white min-h-96 w-[98%] md:w-full'>
        <div className='flex flex-wrap justify-between items-center'>
            <section className='h-40 rounded-md flex-grow md:w-40 max-w-96 w-[90%] p-6 m-4 transition-all ease-in-out duration-300'>
                <h2 className='text-xl md:text-2xl text-white'>Ready to Transform your Business?<br/>Take the first step Today!</h2>
                <p>Totam rem aperiam, eaque ipsa quae ab lilo inventore veritatis et quasi architecto baetae vitae dicta sunt.</p>
            </section>
            <section className='h-40 rounded-md flex-grow md:w-40 max-w-96 w-[90%] p-6 m-4 transition-all ease-in-out duration-300'>
                <p className='text-gray-500'>Call Us</p>
                <a className='text-xl text-blue-700' href="tel:+23481062344890">+234 810 6234 4890</a>
            </section>
            <section className='h-40 rounded-md flex-grow md:w-40 max-w-96 w-[90%] p-6 m-4 transition-all ease-in-out duration-300'>
                <p className='text-gray-500 text-sm'>Email Us</p>
                <a className='text-xl text-blue-700' href="mailto:cyber@silexsecure.com">cyber@silexsecure.com</a>
            </section>
        </div>
    </div>
  )
}

export default Footer