import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
    const [showMenu, setShowMenu] = useState({
        services: false,
        resources: false,
        contact: false,
        about: false,
        langue: false
    });

    const handleMouseEnter = (menu) => {
        setShowMenu({ ...showMenu, [menu]: true });
    };

    const handleMouseLeave = (menu) => {
        setShowMenu({ ...showMenu, [menu]: false });
    };
    return (
        <div>
            <header>
                <div className="relative  ">
                    <div className="flex justify-between items-center bg-black text-white p-4 rounded-t-lg">
                        <p className="absolute left-1/2 transform -translate-x-1/2">Join today and pay no fees for 90 days. Get started</p>
                        <button className="pr-7 text-xl font-bold absolute right-[20px]">X</button>
                    </div>
                </div>

                <nav className="ml-5 my-[1px]">
                    <div className="container mx-auto flex items-center gap-14 m-[50px]">
                        <a className="text-xl font-bold mr-4 flex items-center"><img src="" />LOGO</a>

                        <ul className="flex w-full gap-[50px]">
                            <li className="mr-6 relative" onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={() => handleMouseLeave('services')}>
                                <a href="" className="hover:text-gray-300">Direction</a>
                                {showMenu.services && (
                                    <ul className="absolute top-full left-0 bg-white border border-gray-200 py-[15px] px-[25px] gap-[10px] flex flex-col">
                                        <li><a href="#" className="hover:green-gray-300 ">Discipline</a></li>
                                        <li><a href="#">Etude</a></li>
                                        <li><a href="#">Finance</a></li>
                                    </ul>
                                )}
                            </li>

                            <li className="mr-6 relative" onMouseEnter={() => handleMouseEnter('resources')} onMouseLeave={() => handleMouseLeave('resources')}>
                                <a href="" className="hover:text-gray-300">Resources</a>
                                {showMenu.resources && (
                                    <ul className="absolute top-full left-0 bg-white border border-gray-200 py-[15px] px-[25px] gap-[10px] flex flex-col">
                                        <li><a href="#">Humaine</a></li>
                                        <li><a href="#">Materiels 2</a></li>
                                        <li><a href="#">Scientifique </a></li>
                                    </ul>
                                )}
                            </li>

                            <li className="mr-6 relative" onMouseEnter={() => handleMouseEnter('contact')} onMouseLeave={() => handleMouseLeave('contact')}>
                                <a href="" className="hover:text-gray-300">Contact</a>
                                {showMenu.contact && (
                                    <ul className="absolute top-full left-0 bg-white border border-gray-200 py-[15px] px-[25px] gap-[10px] flex flex-col">
                                        <li><a href="#">Contact 1</a></li>
                                        <li><a href="#">Contact 2</a></li>
                                        <li><a href="#">Contact 3</a></li>
                                    </ul>
                                )}
                            </li>

                            <li className="mr-6 relative" onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={() => handleMouseLeave('about')}>
                                <a href="" className="hover:text-gray-300">About</a>
                                {showMenu.about && (
                                    <ul className="absolute top-full left-0 bg-white border border-gray-200 py-[15px] px-[25px] gap-[10px] flex flex-col">
                                        <li><a href="#">About 1</a></li>
                                        <li><a href="#">About 2</a></li>
                                        <li><a href="#">About 3</a></li>
                                    </ul>
                                )}
                            </li>
                        </ul>

                        <div className="flex items-center gap-[30px]">
                            <span className="mr-6 relative" onMouseEnter={() => handleMouseEnter('langue')} onMouseLeave={() => handleMouseLeave('langue')}>
                             <a href="" className="hover:text-gray-300 pl-[10px]">Langue</a>
                                {showMenu.langue && (
                                    <ul className="absolute top-full left-0 bg-white border border-gray-200 py-[15px] px-[25px] gap-[10px] flex flex-col">
                                        <li><a href="#">Français</a></li>
                                        <li><a href="#">Anglais</a></li>

                                    </ul>
                                )}
                            </span>
                            <Link to="/Register"> <button className="hover:text-yellow-300 bg-[#483F3F] rounded-md w-[100px] h-[50px] text-[#FFFFFF] text-base font-[inter] font-bold "> S'inscrire</button></Link>
                            <Link to="/Login">  <button className="hover:text-yellow-300  bg-[#EEEAEA] rounded-md  w-[100px] h-[50px] text-black text-base font-[inter] font-bold ">Login</button></Link>


                        </div>
                    </div>
                </nav>
            </header>


        </div>
    )

}
export default Header;