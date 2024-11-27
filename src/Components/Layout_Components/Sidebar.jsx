import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
    

    return (
        <div className='h-screen flex flex-col'>  
            <div className="flex items-center justify-center h-1/6">
                <img src='img/SCC.png' alt='image' width={100}/>
            </div>



            <div className="flex flex-col h-5/6 w-full flex-grow gap-4 mt-4">

                    <NavLink to="/profile" className={({isActive})  => 
                    `text-lg text-center py-2 transition duration-600 hover:bg-orange-400 hover:cursor-pointer ${isActive ? "bg-orange-400 w-full" : ""}`
                    }>Profile</NavLink>



                    <NavLink to='/delivery' className={({isActive})  => 
                    `text-lg text-center py-2 transition duration-600 hover:bg-orange-400 hover:cursor-pointer ${isActive ? "bg-orange-400 w-full" : ""}`
                    }
                    >
                    derivery</NavLink>
    

            </div>
        </div>
    )
}
