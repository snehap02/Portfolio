import React from 'react'
import Modal from './Modal'
import { useState } from 'react'

const Blog = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
    {openModal && <Modal closeModal = {setOpenModal}/>}
        <div className='mt-[580px] mr-2 sm:mr-9 w-10 lg:w-12 bg-black rounded-full sm:p-3 p-2 cursor-pointer hover:scale-105 transition duration-500 shadow-lg shadow-neutral-400 right-0 flex fixed'>
        <div onClick={() => {setOpenModal(true)}}>
        <img src='../images/blog.png'/>
        </div>
        </div>
    </>
  )
}

export default Blog