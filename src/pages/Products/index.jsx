import React from 'react'
import Navbar from '../../components/Navbar'

const Products = () => {
  return (
    <div className="pt-[100px]">
      <Navbar page={"/products"}/>
      <div className="h-screen w-full">products</div>
    </div>
  )
}

export default Products