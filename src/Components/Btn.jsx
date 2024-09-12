import React from 'react'

const Btn = ({ title="Login", styl }) => {
  return (
    <button className={`cursor-pointer font-medium py-2 px-6 md:px-10 md:py-3 rounded-xl capitalize ${styl} transition-all ease-in-out duration-300`}> {title} </button>
  )
}

export default Btn