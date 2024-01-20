'use client'

import { GetServerSideProps } from 'next';
import React, { useState, useEffect, useRef, useContext } from 'react';
import { setToken, setIsAuthenticated, clearToken } from '../../../store/reducers/authReducer';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation'
import logoPic from "@/public/herramientas.jpg";
import style from './header.module.css'

import { FaSearch } from 'react-icons/fa';
import { IoNotifications, IoMenu, IoClose } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';
import Link from 'next/link';
import { SidebarContext } from '@/contexts/SidebarContext';
import { getLogout } from '@/services/auth/AuthService';

const Header = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
    const [isVisibleMoldaSearch, setIsVisibleMoldaSearch] = useState(false);
    const [isVisibleMenuProfile, setIsVisibleMenuProfile] = useState(false);
    const divRefProfile1 = useRef<HTMLDivElement>(null);
    const divRefProfile = useRef<HTMLDivElement>(null);

    const divRefSearch = useRef<HTMLDivElement>(null);
    const divRefSearchBtn = useRef<HTMLButtonElement>(null);

    const toggleVisibilityMoldaSearch = () => {
        setIsVisibleMoldaSearch(!isVisibleMoldaSearch);
    };

    const toggleVisibilityMenuProfile = () => {
        setIsVisibleMenuProfile(!isVisibleMenuProfile);
        
    };
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {

            if (divRefProfile.current && !divRefProfile.current.contains(event.target as Node) &&
                !(!divRefProfile1.current || divRefProfile1.current.contains(event.target as Node))
            ) {
                setIsVisibleMenuProfile(false);
            }
        };

        const handleClickOutsideSearch = (event: MouseEvent) => {

            if (divRefSearch.current && !divRefSearch.current.contains(event.target as Node) && 
            !(!divRefSearchBtn.current || divRefSearchBtn.current.contains(event.target as Node))) {
                setIsVisibleMoldaSearch(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("mousedown", handleClickOutsideSearch);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("mousedown", handleClickOutsideSearch);
        };
    }, []);

    const onSubmitLogout = async (data: any) => {
        try {
            const res = await getLogout();
            handleAuthentication();
            router.push("/login");
        } catch (error) {
            handleAuthentication();
            router.push("/login");
            console.log("Ups no Dio",error);
            
        }
    };

    const handleAuthentication = () => {
        // Realiza la autenticación y obtén el token
        dispatch(clearToken());
        dispatch(setIsAuthenticated(false));
      };


    const user = {
        name: "Jhonny Lakewood",
        rol: "ADMIN"
    }

    return (
        <div className='header topbar shadow'>
            <div className='container-topbar-left'>
                <form >
                    <div className='input-group'>
                        <input 
                        type="search" 
                        className='form-control input-search-header' 
                        name="search" 
                        id="search" 
                        placeholder='Buscar'/>
                        <div className="input-group-append">
                            <button className='btn btn-sqr btn-primary'><FaSearch/></button>
                        </div>
                    </div>
                </form>
            </div>
            <div className='container-topbar-right'>
                {/* Notificarion */}
                <div className='container-badges'>
                    { isVisibleMoldaSearch && 
                    <div  className='modal-search-header' id='hiddenDivModalSearch'>
                            <div ref={divRefSearch} className=''>
                                <input 
                                type="search" 
                                className='form-control input-search-badge' 
                                name="search" 
                                id="search" 
                                placeholder='Buscar'/>
                            </div>
                        </div>}
                    <div className="icon-search">
                        <button ref={divRefSearchBtn} className='badge-icon' onClick={toggleVisibilityMoldaSearch}><FaSearch className='icon'/></button>
                    </div>
                    <button className='badge-icon badge-icon-glow' data-value={"9+"}><IoNotifications className='icon'/></button>
                </div>
                {/* Profile */}
                <div 
                ref={divRefProfile1}
                className='profile-box' 
                onClick={toggleVisibilityMenuProfile}>
                    <div className='user-box-img'>
                        <Image src={logoPic} alt='profile avatar' className='avatar-img'/>
                    </div>
                    <div className='user-box-text'>
                        <label>{user.name}</label>
                        <label>{user.rol}</label>
                    </div>
                    <span><IoIosArrowDown className='icon-right-profile'/></span>    
                </div>

                <div 
                className={`profile-menu shadow ${ isVisibleMenuProfile ? 'show-menu-profile' : '' }`}
                ref={divRefProfile}
                >
                    <Link href={""}>Perfil</Link>
                    <Link href={""}>Ajuste</Link>
                    <Link href={""}>Actividad Log</Link>
                    <hr className='sidebar-divider'/>
                    <button onClick={onSubmitLogout}>Cerrar Sesion</button>
                </div>



                <div className='icon-menu'>
                    <button 
                    className='toggle-menu' 
                    onClick={toggleSidebar}>
                        {sidebarToggle? <IoClose className=''/> : <IoMenu className=''/>}
                        </button>
                </div>
            </div>
        </div>
    );
}

export default Header