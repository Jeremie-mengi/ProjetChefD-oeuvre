import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
    const [showMenu, setShowMenu] = useState({
        services: false,
        ressources: false,
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
            <div class="relative">
                <div class="flex justify-between items-center bg-black text-white p-4 rounded-t-lg">
                    <p class="absolute left-1/2 transform -translate-x-1/2 text-center">Inscrivez-vous aujourd'hui et ne payez aucun frais pendant 90 jours. Commencez maintenant</p>
                    <button class="pr-7 text-xl font-bold absolute right-[20px]">X</button>
                </div>
            </div>
    
            <nav class="ml-5 my-[1px]">
                <div class="container mx-auto flex flex-wrap items-center justify-between gap-4 p-4">
                    <a class="text-xl font-bold flex items-center">
                        {/* <img src="" alt="" class="mr-2" /> */}
                        LOGO
                    </a>
    
                    <button id="menu-toggle" class="block md:hidden">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
    
                    <ul id="menu" class="hidden md:flex w-full md:w-auto gap-[80px]">
                        <li class="relative group" onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={() => handleMouseLeave('services')}>
                            <a href="#" class="hover:text-gray-300">Direction</a>
                            <ul class="absolute top-full left-0 bg-white border border-gray-200 py-2 px-4 gap-2 flex flex-col hidden group-hover:flex">
                                <li><a href="#" class="hover:text-gray-300">Discipline</a></li>
                                <li><a href="#" class="hover:text-gray-300">Étude</a></li>
                                <li><a href="#" class="hover:text-gray-300">Finance</a></li>
                            </ul>
                        </li>
                        <li class="relative group" onMouseEnter={() => handleMouseEnter('ressources')} onMouseLeave={() => handleMouseLeave('ressources')}>
                            <a href="#" class="hover:text-gray-300">Ressources</a>
                            <ul class="absolute top-full left-0 bg-white border border-gray-200 py-2 px-4 gap-2 flex flex-col hidden group-hover:flex">
                                <li><a href="#" class="hover:text-gray-300">Humaines</a></li>
                                <li><a href="#" class="hover:text-gray-300">Matérielles</a></li>
                                <li><a href="#" class="hover:text-gray-300">Scientifiques</a></li>
                            </ul>
                        </li>
                        <li class="relative group" onMouseEnter={() => handleMouseEnter('contact')} onMouseLeave={() => handleMouseLeave('contact')}>
                            <a href="#" class="hover:text-gray-300">Contact</a>
                            <ul class="absolute top-full left-0 bg-white border border-gray-200 py-2 px-4 gap-2 flex flex-col hidden group-hover:flex">
                                <li><a href="#" class="hover:text-gray-300">Contact 1</a></li>
                                <li><a href="#" class="hover:text-gray-300">Contact 2</a></li>
                                <li><a href="#" class="hover:text-gray-300">Contact 3</a></li>
                            </ul>
                        </li>
                        <li class="relative group" onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={() => handleMouseLeave('about')}>
                            <a href="#" class="hover:text-gray-300">À propos</a>
                            <ul class="absolute top-full left-0 bg-white border border-gray-200 py-2 px-4 gap-2 flex flex-col hidden group-hover:flex">
                                <li><a href="#" class="hover:text-gray-300">À propos 1</a></li>
                                <li><a href="#" class="hover:text-gray-300">À propos 2</a></li>
                                <li><a href="#" class="hover:text-gray-300">À propos 3</a></li>
                            </ul>
                        </li>
                        <li class="relative group" onMouseEnter={() => handleMouseEnter('langue')} onMouseLeave={() => handleMouseLeave('langue')}>
                            <a href="#" class="hover:text-gray-300">Langue</a>
                            <ul class="absolute top-full left-0 bg-white border border-gray-200 py-2 px-4 gap-2 flex flex-col hidden group-hover:flex">
                                <li><a href="#" class="hover:text-gray-300">Français</a></li>
                                <li><a href="#" class="hover:text-gray-300">Anglais</a></li>
                            </ul>
                        </li>
                    </ul>
    
                    <div class="flex items-center gap-4">
                        
                        <Link to="/Register">   <button class="hover:text-yellow-300 bg-[#483F3F] rounded-md w-[100px] h-[50px] text-[#FFFFFF] text-base font-[inter] font-bold">
                                S'inscrire
                            </button></Link>
                            <Link to="/Login">
                            <button class="hover:text-yellow-300 bg-[#EEEAEA] rounded-md w-[100px] h-[50px] text-black text-base font-[inter] font-bold">
                                Connexion
                            </button></Link>
                    </div>
                </div>
            </nav>
        </header>
    </div>
    
    )

}
export default Header;