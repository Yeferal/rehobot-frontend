'use client'

import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { MouseEventHandler, useContext } from "react";
import { IoIosArrowForward, IoIosArrowDown, IoMdPeople } from 'react-icons/io';
import { MdPointOfSale, MdEditDocument, MdInventory2, MdOutlineInventory2 } from 'react-icons/md';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { GiTruck } from 'react-icons/gi';;
import { TbReportSearch } from 'react-icons/tb';;
import { RiUserSettingsFill } from 'react-icons/ri';;


import { useState, useRef, useEffect } from 'react';
import { SidebarContext } from '@/contexts/SidebarContext';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';

interface ListUl {
    id: number,
    state: boolean;
}

const SidebarMenu = () => {
    const { sidebarToggle, toggleSidebar, closeSidebar } = useContext(SidebarContext);
    const navRef = useRef<HTMLDivElement>(null);
    const role = useSelector((state: RootState) => state.auth.role);

    // console.log("Role del Usuario: "+role);
    
    const [expandedUl, setExpandedUl] = useState<Array<ListUl>>([
        {id: 11, state: false},
        {id: 12, state: false},
        {id: 13, state: false},
        {id: 21, state: false},
        {id: 31, state: false},
        {id: 32, state: false},
        {id: 33, state: false},
    ]);

    const getItemById = (itemId: number) => {
        const item = expandedUl.find((item) => item.id === itemId);
        return item;
    };
    
    const updateItem = (id: number, newState: boolean) => {
        setExpandedUl((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, state: newState } : item
        )
      );
    };

    const updateAllItems = (newState: boolean) => {
        setExpandedUl((prevItems) =>
            prevItems.map((item) => ({ ...item, state: newState }))
        );
    };

    const handleItemClick = (id: number, newState: boolean) => {
        const item = getItemById(id);
        if (item && item.state) {
            updateItem(id, false)
        }else {
            updateAllItems(false);
            updateItem(id, newState);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {

            if (navRef.current && !navRef.current.contains(event.target as Node)){
                closeSidebar();
            }
        };


        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    if (role == undefined) {
        return( <></>);
    } else {
        return (
            <nav ref={navRef} className={`sidebar-wrapper ${sidebarToggle? 'sidebar-wrapper-show' : ''}`} id='hiddenSidebar'>
                <div className='container-title-home'>
                    <Link href={"/dashboard"} className='title-home'>
                        <span>Rehobot</span>
                        <span>Ferreteria</span>
                    </Link>
    
                    <Link href={"/dashboard"} className="title-home-2">
                        <span className="title-home-text">FR</span>
                    </Link>
                </div>
                
                {/* <hr/> */}
                <hr className="sidebar-divider"/>
    
                <menu className='menu-bar'>
                    <div className='menu'>
                        {/* SEARCH DEL SIDEBAR */}
                        <span>Tienda</span>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                
                                <button key={11} className='nav-link-father' onClick={() => handleItemClick(11, true)}>
                                    <div className="link-sec-1">
                                            <MdPointOfSale className='icon-sidebar'/>
                                        <span className="text nav-text">Venta</span>
                                    </div>
                                    <div>
                                        <i className="bx-l">
                                            {!expandedUl[0].state && <IoIosArrowForward/>}
                                            {expandedUl[0].state && <IoIosArrowDown/>}
                                            
                                        </i>
                                    </div>
                                </button>
                                {/* {expandedUl[0].state && 
                                <div className={`nav-link-child expand-links` }>
                                    <ul className='menu-links-child'>
                                        <li><Link href={""} className="links-child">Realizar Venta</Link></li>
                                        <li><Link href={""} className="links-child">Modificar Venta</Link></li>
                                        <li><Link href={""} className="links-child">Reintegra Producto</Link></li>
                                        <li><Link href={""} className="links-child">Sugerencia</Link></li>
                                    </ul>
                                </div>
                                } */}
                                <div className={`nav-link-child ${expandedUl[0].state ? 'expand-links' : ''}` }>
                                    <ul className='menu-links-child'>
                                        <li><Link href={""} className="links-child">Realizar Venta</Link></li>
                                        <li><Link href={""} className="links-child">Modificar Venta</Link></li>
                                        <li><Link href={""} className="links-child">Reintegra Producto</Link></li>
                                        <li><Link href={""} className="links-child">Sugerencia</Link></li>
                                    </ul>
                                </div>
                            </li>
    
                        </ul>
                        
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <button key={12} className='nav-link-father' onClick={() => handleItemClick(12, true)}>
                                    <div className="link-sec-1">
                                            <GiTruck className='icon-sidebar'/>
                                        <span className="text nav-text">Pedido</span>
                                    </div>
                                    <div >
                                        <i className="bx-l">
                                            {!expandedUl[1].state && <IoIosArrowForward/>}
                                            {expandedUl[1].state && <IoIosArrowDown/>}
                                        </i>
                                    </div>
                                </button>
                                <div className={`nav-link-child ${expandedUl[1].state ? 'expand-links' : ''}` }>
                                    <ul className='menu-links-child'>
                                        <li><Link href={""} className="links-child">Realizar Pedido</Link></li>
                                        <li><Link href={""} className="links-child">Modificar Pedido</Link></li>
                                        <li><Link href={""} className="links-child">Pedidos Pendientes</Link></li>
                                    </ul>
                                </div>
                            </li>
    
                        </ul>
                        
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <button key={13} className='nav-link-father' onClick={() => handleItemClick(13, true)}>
                                    <div className="link-sec-1">
                                            <IoMdPeople className='icon-sidebar'/>
                                        <span className="text nav-text">Clientes</span>
                                    </div>
                                    <div >
                                        <i className="bx-l">
                                            {!expandedUl[2].state && <IoIosArrowForward/>}
                                            {expandedUl[2].state && <IoIosArrowDown/>}
                                        </i>
                                    </div>
                                </button>
                                <div className={`nav-link-child ${expandedUl[2].state ? 'expand-links' : ''}` }>
                                    <ul className='menu-links-child'>
                                        <li><Link href={""} className="links-child">Pendientes de Pago</Link></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
    
                        <hr />
    
                        <span>Productos</span>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                
                                <button key={21} className='nav-link-father' onClick={() => handleItemClick(21, true)}>
                                    <div className="link-sec-1">
                                        <MdOutlineInventory2 className='icon-sidebar'/>
                                        <span className="text nav-text">Inventario</span>
                                    </div>
                                    <div >
                                        <i className="bx-l">
                                            {!expandedUl[3].state && <IoIosArrowForward/>}
                                            {expandedUl[3].state && <IoIosArrowDown/>}
                                        </i>
                                    </div>
                                </button>
                                <div className={`nav-link-child ${expandedUl[3].state ? 'expand-links' : ''}` }>
                                    <ul className='menu-links-child'>
                                        <li><Link href={""} className="links-child">Lista de Productos</Link></li>
                                        <li><Link href={""} className="links-child">Buscar Producto</Link></li>
                                        <li><Link href={""} className="links-child">Reintegra Producto</Link></li>
                                        <li><Link href={""} className="links-child">Sugerencia</Link></li>
                                    </ul>
                                </div>
                            </li>
    
                        </ul>
                        <hr />
                        <span>Administracion</span>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                
                                <button key={31} className='nav-link-father' onClick={() => handleItemClick(31, true)}>
                                    <div className="link-sec-1">
                                        <RiUserSettingsFill className='icon-sidebar'/>
                                        <span className="text nav-text">Usuarios</span>
                                    </div>
                                    <div >
                                        <i className="bx-l">
                                            {!expandedUl[4].state && <IoIosArrowForward/>}
                                            {expandedUl[4].state && <IoIosArrowDown/>}
                                        </i>
                                    </div>
                                </button>
                                <div className={`nav-link-child ${expandedUl[4].state ? 'expand-links' : ''}` }>
                                    <ul className='menu-links-child'>
                                        <li><Link href={"/dashboard/admin-users"} className="links-child">Administrar Usuarios</Link></li>
                                        <li><Link href={"/dashboard/add-users"} className="links-child">Agregar Usuario</Link></li>
                                        <li><Link href={"/dashboard/list-users"} className="links-child">Lista Usuarios</Link></li>
                                    </ul>
                                </div>
                            </li>
    
                        </ul>
                        
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <button key={32} className='nav-link-father' onClick={() => handleItemClick(32, true)}>
                                    <div className="link-sec-1">
                                        <MdInventory2 className='icon-sidebar'/>
                                        <span className="text nav-text">Inventario</span>
                                    </div>
                                    <div >
                                        <i className="bx-l">
                                            {!expandedUl[5].state && <IoIosArrowForward/>}
                                            {expandedUl[5].state && <IoIosArrowDown/>}
                                        </i>
                                    </div>
                                </button>
                                <div className={`nav-link-child ${expandedUl[5].state ? 'expand-links' : ''}` }>
                                    <ul className='menu-links-child'>
                                        <li><Link href={""} className="links-child">Inventario</Link></li>
                                        <li><Link href={""} className="links-child">Agregar Producto</Link></li>
                                        <li><Link href={""} className="links-child">Ingreso de Productos</Link></li>
                                        <li><Link href={""} className="links-child">Productos de Entrega</Link></li>
                                        <li><Link href={""} className="links-child">Categorias</Link></li>
                                        <li><Link href={""} className="links-child">Marcas</Link></li>
                                        <li><Link href={""} className="links-child">Proveedores</Link></li>
                                    </ul>
                                </div>
                            </li>
    
                        </ul>
                        
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <button key={33} className='nav-link-father' onClick={() => handleItemClick(33, true)}>
                                    <div className="link-sec-1">
                                        <TbReportSearch className='icon-sidebar'/>
                                        <span className="text nav-text">Reportes</span>
                                    </div>
                                    <div >
                                        <i className="bx-l">
                                            {!expandedUl[6].state && <IoIosArrowForward/>}
                                            {expandedUl[6].state && <IoIosArrowDown/>}
                                        </i>
                                    </div>
                                </button>
                                <div className={`nav-link-child ${expandedUl[6].state ? 'expand-links' : ''}` }>
                                    <ul className='menu-links-child'>
                                        <li><Link href={""} className="links-child">Reporte de Ventas</Link></li>
                                        <li><Link href={""} className="links-child">Reporte de Ventas por Usuario</Link></li>
                                        <li><Link href={""} className="links-child">Reporte de Ventas por Cliente</Link></li>
                                        <li><Link href={""} className="links-child">Reporte de Clientes</Link></li>
                                        <li><Link href={""} className="links-child">Reporte de Pedidos</Link></li>
                                        <li><Link href={""} className="links-child">Reporte de Logs</Link></li>
                                        <li><Link href={""} className="links-child">Reporte General</Link></li>
                                    </ul>
                                </div>
                            </li>
    
                        </ul>
                        <hr />
                    </div>
                </menu>
                <div>
                    Footer Sidebar
                </div>
            </nav>
        );
        
    }
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {


    return {
        props:{

        }
    }
}

export default SidebarMenu