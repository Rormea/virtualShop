import { titleFont } from '@/config/fonts'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
        <div className='flex w-full justify-center items-center text-xs mb-10'>
            <Link href={'/'} className='' >
                <span className={`${titleFont.className} antialiased font-bold`}>Teslo</span>
                <span>|Shop</span>
                <span> © {new Date().getFullYear()}</span>
            </Link>
        </div>
    )
}
