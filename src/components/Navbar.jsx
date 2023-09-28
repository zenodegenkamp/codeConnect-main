import { useState } from "react";
import { close, logo, menulogo, CodeConnect} from "../assets";
import { navLinks} from "../constants";
import { NavLink, Link} from 'react-router-dom';

export default function Navbar() {

    const [menu, setMenu] = useState(false)
    const [active, setActive] = useState("Home")

    function toggleMenu() {
        setMenu((oldValue) => !oldValue)
    }



    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <img src={CodeConnect} alt="logo" className="w-[200px]" />

            <ul className="list-none md:flex hidden justify-end items-center flex-1 space-x-8">

                {navLinks.map((nav, index) => {
                    return (
                        <li key={index}
                            className={`font-poppins font-normal cursor-pointer text-[16px] text-white`}>
                            <a href={`${nav.id}`}>{nav.title}</a>

                        </li>
                    )
                })}
                <li>
                        <NavLink
                            to="/projects"
                            className={`font-poppins font-normal cursor-pointer text-[16px] text-white`}
                            
                        >
                            Projects
                        </NavLink>
                        </li>
                        <li>
                        <NavLink
                            to="/host"
                            className={`font-poppins font-normal cursor-pointer text-[16px] text-white`}
                         
                        >
                            Manage
                        </NavLink>
                        </li>
            </ul>
            <div className="md:hidden flex">
                <img
                    src={menu ? close : menulogo}
                    alt="menu or close"
                    onClick={toggleMenu}
                />
                <div className={`${menu ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-100`}>
                    <ul className="list-none md:flex justify-end items-start flex-1 flex-col">
                        <li className="mt-4">
                            <NavLink
                                to="/"
                                className={`mt-4 font-poppins font-medium cursor-pointer text-[16px] text-dimWhite`}

                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="mt-4">
                        <NavLink
                            to="/projects"
                            className={`mt-4 font-poppins font-medium cursor-pointer text-[16px] text-dimWhite`}
                            
                        >
                            Projects
                        </NavLink>
                        </li>
                        <li className="mt-4 ">
                        <NavLink
                            to="/host"
                            className={`mt-4 font-poppins font-medium cursor-pointer text-[16px] text-dimWhite`}
                         
                        >
                            Manage
                        </NavLink>
                        </li>
                    </ul>
                </div>


            </div>

        </nav>
    )
}