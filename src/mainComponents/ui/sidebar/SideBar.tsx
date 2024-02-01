'use client'


import Link from 'next/link'
import React from 'react'
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from 'react-icons/io5'

export const SideBar = () => {


    return (
        <div className=''>

            {/* background */}
            <div className='fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-50' ></div>

            {/* Blur */}
            <div className='fade-in fixed top-0 left-0 w-screen h-screen z-10  backdrop-filter backdrop-blur-sm' ></div>

            {/* Side Menu */}
            <nav
                className='fixed p-5 right-0 top-0 w-[400px] h-screen bg-slate-200 z-20 shadow-2xl transform transition-all duration-300'
            >
                <IoCloseOutline
                    size={50}
                    className='absolute top-5 right-5 cursor-pointer'
                    onClick={() => console.log("Hago click se debe cerrar")}
                />

                {/* Input*/}
                <div className='relative mt-16'>
                    <IoSearchOutline
                        size={20}
                        className='absolute pb-1 top-2 left-2 cursor-pointer'
                    />
                    <input type="text"
                        placeholder='Buscar'
                        className='w-full bg-gray-50 pl-10 rounded pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500'
                    />
                </div>

                {/* Menu*/}
                <Link href='/' className='flex items-center mt-10 p-2  hover:bg-gray-100 rounded transition-all'>
                    <IoPersonOutline size={30} />
                    <span className='ml-3 text-xl' >Perfil</span>
                </Link>

                <Link href='/' className='flex items-center mt-10 p-2  hover:bg-gray-100 rounded transition-all'>
                    <IoTicketOutline size={30} />
                    <span className='ml-3 text-xl' >Ordenes</span>
                </Link>

                <Link href='/' className='flex items-center mt-10 p-2  hover:bg-gray-100 rounded transition-all'>
                    <IoLogInOutline size={30} />
                    <span className='ml-3 text-xl' >Entrar</span>
                </Link>

                <Link href='/' className='flex items-center mt-10 p-2  hover:bg-gray-100 rounded transition-all'>
                    <IoLogOutOutline size={30} />
                    <span className='ml-3 text-xl' >Salir</span>
                </Link>

                {/* Line separator*/}
                <div className='w-full h-px bg-gray-500 my-10' ></div>

                <Link href='/' className='flex items-center mt-10 p-2  hover:bg-gray-100 rounded transition-all'>
                    <IoShirtOutline size={30} />
                    <span className='ml-3 text-xl' >Productos</span>
                </Link>

                <Link href='/' className='flex items-center mt-10 p-2  hover:bg-gray-100 rounded transition-all'>
                    <IoTicketOutline size={30} />
                    <span className='ml-3 text-xl' >Pedidos</span>
                </Link>



            </nav>
        </div>
    )
}
