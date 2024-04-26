import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'


const NavLink = ({icon,children,current, ...others}) => {
    const active = useMemo(() => {
        console.log(current)
        if(others.to === current){
            return true;
        }
        else {
            return false;
        }
    }, [current])
  return (
    <Link {...others} className={`w-full h-12 transition-all active:bg-primary-100  items-center p-4 text-xl font-medium  rounded-xl flex gap-2 ${active ? "bg-primary-400 text-accent-900" : "text-text-300 hover:bg-primary-400"}`}>
        <span className='text-sm translate-y-[2px]'>{icon}</span>
        <span className='hidden lg:block'>{children}</span>
    </Link>
  )
}

export default NavLink