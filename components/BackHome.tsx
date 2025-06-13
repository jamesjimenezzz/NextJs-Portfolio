"use client"
import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { usePathname } from 'next/navigation'

const BackHome = () => {
const pathname = usePathname()

if (pathname === '/') {
    return null
}


  return (
    <div className='max-w-[1200px] mx-auto pt-10'>
        <Link href='/' className='text-sm  flex items-center gap-2'>
            <ArrowLeft className='w-4 h-4' />
            Back to Home
        </Link>
    </div>
  )
}

export default BackHome