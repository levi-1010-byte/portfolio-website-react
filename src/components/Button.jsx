import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-[#335569] text-white font-[Poppins] border-[#ffffff33] py-2 px-6 border md:rounded-3xl md:ml-8 hover:bg-[#002b44] 
    duration-500 '>
      {props.children}
    </button>
  )
}

export default Button