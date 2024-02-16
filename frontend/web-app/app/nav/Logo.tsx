'use client'

import { useParamsStore } from '@/hooks/useParamsStore'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { FaCarAlt } from 'react-icons/fa'

export const Logo = () => {
    const router = useRouter();
    const pathname = usePathname();
    const reset = useParamsStore(state => state.reset);

    const doReset = () => {
        if(pathname !== '/') router.push('/');
        reset();
    }

    return (
        <div onClick={doReset} 
            className='cursor-pointer flex items-center gap-2 text-3xl font-semibold text-red-500'>
            <FaCarAlt size={34}/>
            <div>Carsties Auctions</div>
        </div>
    )
}
