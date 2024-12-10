// Add the "use client" directive at the top
'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { useEffect } from 'react';

function Header() {
    const path = usePathname();

    useEffect(() => {
        console.log(path);
    }, [path]);

    return (
        <div className='flex p-4 items-center justify-between bg-slate-600 shadow-sm'>
            <Image src='/logo.svg' width={160} height={100} alt='logo'/>
            <ul className='hidden md:flex gap-6 text-white'>
                <li className={`hover:text-blue-500 hover:font-bold transition-all cursor-pointer
                    ${path === '/dashboard' ? 'text-blue-500 font-bold' : ''}
                `}>Dashboard</li>
                <li className={`hover:text-blue-500 hover:font-bold transition-all cursor-pointer
                    ${path === '/dashboard/questions' ? 'text-blue-500 font-bold' : ''}
                `}>Questions</li>
                
            </ul>
            <UserButton/>
        </div>
    );
}

export default Header;
