import { useState } from "react"
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import { MdOutlineDashboardCustomize, MdOutlineLogout } from 'react-icons/md'


const NavBar = () => {
    const  [isOpen , setIsOpen] = useState<boolean>(true)
    const [ navBar, setNavBar] = useState<string>('dashboard')
    return(
        <header className="w-screen md:w-52 bg-bg-gray-segundary h-14 md:h-screen flex items-center md:items-stretch">
            <nav className="pl-4 w-full relative ">
                <button className="md:hidden" onClick={()=> setIsOpen(!isOpen)}> {isOpen ? <RxHamburgerMenu className="text-white"/> : <AiOutlineClose className="text-white"/>} </button>
                <div className={isOpen ? "hidden" : "flex flex-col justify-center items-center absolute w-32  h-28 bg-bg-gray-segundary left-2 "} >
                    <ul className="flex flex-col gap-2 w-4/5">
                        <li className="w-full h-10  hover:bg-bg-secundary rounded text-text-gray hover:text-white flex justify-center items-center">
                            <button className=" text-sm flex gap-1 items-center"><MdOutlineDashboardCustomize/>Dashboard</button>
                        </li>
                        <li className="w-full h-10  hover:bg-bg-secundary rounded text-text-gray hover:text-white">
                            <button className="text-sm flex gap-1 items-center ml-2 mt-3"><MdOutlineLogout/> Sair</button>
                        </li>
                    </ul>
                </div>
                <div className=" hidden md:flex flex-col justify-center text-text-gray mt-8 gap-4">
                    <button onClick={()=> setNavBar('dashboard')} className={`text-sm flex gap-1 items-center p-4 w-28 h-10 rounded ${navBar  === 'dashboard' ? "bg-bg-secundary text-white" : "bg-none" }`} ><MdOutlineDashboardCustomize/>Dashboard</button>
                    <button  className="text-sm flex gap-1 items-center p-4 w-28 h-10 rounded" ><MdOutlineLogout/> Sair</button>
                </div>
            </nav>
        </header>
    )
}

export default NavBar