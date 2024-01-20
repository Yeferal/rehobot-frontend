'use client'

import Link from "next/link";
import { FaCalendar, FaCheck, FaPlus } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { useRef, useEffect } from 'react';

export default function Example() {

    const spanRef = useRef<HTMLSpanElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const span = spanRef.current;
        const btn = buttonRef.current;
        if (span) {
          const fontSize = window.getComputedStyle(span).getPropertyValue('font-size');
        //   console.log("SPAN:");
        //   console.log('font-size: '+fontSize);
        //   console.log(': '+window.getComputedStyle(span).getPropertyValue('font-size'));
          
          
        }
        if (btn) {
            const heigth = window.getComputedStyle(btn).getPropertyValue('height');
            // console.log('BUTTON:');
            // console.log('font-size: '+window.getComputedStyle(btn).getPropertyValue('font-size'));
            // console.log('height: '+heigth);
            // console.log('width: '+window.getComputedStyle(btn).getPropertyValue('width'));
            
            
        }
        

      }, []);

    return (
    <>
        {/* Page Heading */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Cards</h1>
            </div>

            <div className="row">
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Earnings (Monthly)</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800 text-nunito">$40,000</div>
                                </div>
                                <div className="col-auto">
                                    <FaCalendar className="card-icon text-gray-300"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        Earnings (Annual)</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                                    </div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                        </div>
                                        <div className="col">
                                            <div className="progress progress-sm mr-2">
                                                <div className="progress-bar bg-info" role={"progressbar"}
                                                    style={{width: 100 }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                        Pending Requests</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-comments fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">

                <div className="col-lg-6">
                    <div className="card mb-4">
                        <div className="card-header">
                            Default Card Example
                        </div>
                        <div className="card-body">
                            This card uses Bootstraps default styling with no utility classNamees added. Global
                            styles are the only things modifying the look and feel of this default card example.
                        </div>
                    </div>

                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Basic Card Example</h6>
                        </div>
                        <div className="card-body">
                            The styling for this basic card example is created by using default Bootstrap
                            utility classNamees. By using utility classNamees, the style of the card component can be
                            easily modified with no need for any custom CSS!
                        </div>
                    </div>

                </div>

                <div className="col-lg-6">

                    <div className="card shadow mb-4">
                        <div
                            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Dropdown Card Example</h6>
                            <div className="dropdown no-arrow">
                                <Link className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <BsThreeDotsVertical className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"/>
                                </Link>
                                <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in show"
                                    aria-labelledby="dropdownMenuLink">
                                    <div className="dropdown-header">Dropdown Header:</div>
                                    <Link className="dropdown-item" href="#">Action</Link>
                                    <Link className="dropdown-item" href="#">Another action</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" href="#">Something else here</Link>
                                </div>
                            </div>
                        </div>

                        <div className="card-body">
                            Dropdown menus can be placed in the card header in order to extend the functionality
                            of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis
                            icon in the card header can be clicked on in order to toggle a dropdown menu.
                        </div>
                    </div>

                    <div className="card shadow mb-4">
                        <Link href="#collapseCardExample" className="d-block card-header py-3" data-toggle="collapse"
                            role="button" aria-expanded="true" aria-controls="collapseCardExample">
                            <h6 className="m-0 font-weight-bold text-primary">Collapsable Card Example</h6>
                            {/* <MdOutlineKeyboardArrowRight className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"/> */}
                        </Link>
                        
                        <div className="collapse show" id="collapseCardExample">
                            <div className="card-body">
                                This is a collapsable card example using Bootstraps built in collapse
                                functionality. <strong>Click on the card header</strong> to see the card body
                                collapse and expand!
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>


        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Botones</h1>
        </div>

        <div className="row">
            <div className="col-lg-6">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Circle Buttons</h6>
                    </div>
                    
                    <div className="card-body">
                        <div className="mb-2">
                            <code>.btn-circle</code>
                        </div>
                        <button className="btn btn-primary btn-circle">
                            <FaPlus/>
                        </button>
                        <button className="btn btn-success btn-circle">
                            <FaPlus/>
                        </button>
                        <button className="btn btn-info btn-circle">
                            <FaPlus/>
                        </button>
                        <button className="btn btn-warning btn-circle">
                            <FaPlus/>
                        </button>
                        <button className="btn btn-danger btn-circle">
                            <FaPlus/>
                        </button>
                        <button className="btn btn-secondary btn-circle">
                            <FaPlus/>
                        </button>
                        <button className="btn btn-light btn-circle">
                            <FaPlus/>
                        </button>


                        <div className="mt-4 mb-2">
                            <code>.btn-circle .btn-sm</code>
                        </div>
                        <button className="btn btn-primary btn-circle btn-sm">
                            <FaPlus/>
                        </button>
                        <button className="btn btn-success btn-circle btn-sm">
                            <FaPlus/>
                        </button>
                        <button className="btn btn-info btn-circle btn-sm">
                            <FaPlus/>
                        </button>
                        <button className="btn btn-warning btn-circle btn-sm">
                            <FaPlus/>
                        </button>
                        <button className="btn btn-danger btn-circle btn-sm">
                            <FaPlus/>
                        </button>
                        <button className="btn btn-secondary btn-circle btn-sm">
                            <FaPlus/>
                        </button>
                        <button className="btn btn-light btn-circle btn-sm">
                            <FaPlus/>
                        </button>


                        <div className="mt-4 mb-2">
                            <code>.btn-circle .btn-lg</code>
                        </div>
                        <button className="btn btn-primary btn-circle btn-lg">
                            <FaPlus/>
                        </button>
                        <button className="btn btn-success btn-circle btn-lg">
                            <FaPlus/>
                        </button>
                        <button className="btn btn-info btn-circle btn-lg">
                            <FaPlus/>
                        </button>
                        <button className="btn btn-warning btn-circle btn-lg">
                            <FaPlus/>
                        </button>
                        <button className="btn btn-danger btn-circle btn-lg">
                            <FaPlus/>
                        </button>
                        <button className="btn btn-secondary btn-circle btn-lg">
                            <FaPlus/>
                        </button>
                        <button className="btn btn-light btn-circle btn-lg">
                            <FaPlus/>
                        </button>
                    </div>
                </div>
            {/* </div> */}


            {/* <div className="col-lg-6"> */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Buttons</h6>
                    </div>

                    <div className="card-body">
                        <div className="mb-2">
                            <code>.btn-sm</code>
                        </div>
 
                        <button  className="btn btn-primary btn-sm mb-1">
                            <span  className="text">Button Haz Un Click Por Favor</span>
                        </button>

                        <div className="mb-2">
                            <code>.btn-TYPE</code>
                        </div>

                        <button  className="btn btn-primary mb-1">
                            <span  className="text">Button Haz Un Click Por Favor</span>
                        </button>

                        <div className="mb-2">
                            <code>.btn-lg</code>
                        </div>

                        <button  className="btn btn-primary btn-lg mb-1">
                            <span className="text">Button Haz Un Click Por Favor</span>
                        </button>
                        
                        <div className="mt-4 mb-2">
                            <code>.btn-sqr</code>
                        </div>

                        <button  className="btn btn-success btn-sqr mb-1 mr-1">
                            <span  ><FaPlus/></span>
                        </button>


                        <div className="mt-4 mb-2">
                            <code>.btn-sqr .btn-sm</code>
                        </div>


                        <button  className="btn btn-success btn-sqr btn-sm mb-1 mr-1">
                            <span ><FaPlus/></span>
                        </button>

                        <div className="mt-4 mb-2">
                            <code>.btn-sqr .btn-lg</code>
                        </div>

                        <button ref={buttonRef} className="btn btn-success btn-sqr btn-lg mb-1 mr-1">
                            <span ref={spanRef} ><FaPlus/></span>
                        </button>


                        <div className="mt-4 mb-2">
                            <code>.btn-icon</code>
                        </div>

                        <button className="btn btn-info btn-icon">
                            <span className="icon text-white-50">
                                <FaPlus/>
                            </span>
                            <span className="text">Button</span>
                        </button>

                        <div className="mt-4 mb-2">
                            <code>.btn-icon .btn-sm</code>
                        </div>

                        <button className="btn btn-info btn-icon btn-sm">
                            <span className="icon text-white-50">
                                <FaPlus/>
                            </span>
                            <span className="text">Button</span>
                        </button>

                        <div className="mt-4 mb-2">
                            <code>.btn-icon .btn-lg</code>
                        </div>

                        <button className="btn btn-info btn-icon btn-lg">
                            <span className="icon text-white-50">
                                <FaPlus/>
                            </span>
                            <span className="text">Icon Button Info</span>
                        </button>

                    </div>
                </div>
            </div>


            <div className="col-lg-6">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Split Buttons with Icon</h6>
                    </div>
                    
                    <div className="card-body">
                        <div className="mb-2">
                            <code>.btn-icon-split</code>
                        </div>
                        <button className="btn btn-primary btn-icon-split mb-1">
                            <span className="icon text-white-50">
                                <FaPlus/>
                            </span>
                            <span className="text">Split Button Primary</span>
                        </button>
                        <button className="btn btn-success btn-icon-split mb-1">
                            <span className="icon text-white-50">
                                <FaPlus/>
                            </span>
                            <span className="text">Split Button Success</span>
                        </button>
                        <button className="btn btn-info btn-icon-split mb-1">
                            <span className="icon text-white-50">
                                <FaPlus/>
                            </span>
                            <span className="text">Split Button Info</span>
                        </button>
                        <button className="btn btn-warning btn-icon-split mb-1">
                            <span className="icon text-white-50">
                                <FaPlus/>
                            </span>
                            <span className="text">Split Button Warning</span>
                        </button>
                        <button className="btn btn-danger btn-icon-split mb-1">
                            <span className="icon text-white-50">
                                <FaPlus/>
                            </span>
                            <span className="text">Split Button Danger</span>
                        </button>
                        <button className="btn btn-secondary btn-icon-split mb-1">
                            <span className="icon text-white-50">
                                <FaPlus/>
                            </span>
                            <span className="text">Split Button Secondary</span>
                        </button>
                        <button className="btn btn-light btn-icon-split mb-1">
                            <span className="icon text-white-50">
                                <FaPlus/>
                            </span>
                            <span className="text">Split Button Light</span>
                        </button>

                        <div className="mb-4"></div>
                        <p>Also works with small and large button classes!</p>
                        <button className="btn btn-secondary btn-icon-split btn-sm mb-1">
                            <span className="icon text-white-50">
                                <FaPlus/>
                            </span>
                            <span className="text">Split Button Secondary</span>
                        </button>
                        <button className="btn btn-light btn-icon-split btn-lg mb-1">
                            <span className="icon text-white-50">
                                <FaPlus/>
                            </span>
                            <span className="text">Split Button Light</span>
                        </button>

                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Table</h6>
                    </div>
                    <div className="card-body">
                        
                    </div>
                </div>
            </div>
        </div>


    </>
  )
}
