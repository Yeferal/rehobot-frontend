'use client'
import { ReactNode } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import PropTypes from 'prop-types';
import style from "./scrollbar.module.css";
import { relative } from "path";

interface ScrollbarProps {
    className?: string;
    children?: ReactNode;
    rest?: any;
  }

export default function Scrollbar({ className, children, ...rest }: ScrollbarProps) {
    return (
        // <Scrollbars style={{ width: 290, height: 800 }}>
        //     <p>Some great content...</p>
        // </Scrollbars>
        // <Scrollbars 
        // autoHide
        // universal
        // // style={style}
        // style={{ width: 288, height: 800 }}
        // >
        //     <p>Some great content...</p>
        //     <p>Some great content...</p>
        //     <p>Some great content...</p>
        // </Scrollbars>
        <Scrollbars 
        autoHide
        universal
        style={
            { 
                width: "288px", 
                height: "100vh", 
                // background: "red",
                position: "relative",
                zIndex: 15
                
                
            }}
        renderThumbVertical={() => {
            return (
                <div className={style.scrollDiv}/>
            );
        }}
        {...rest}
        >
            {/* <p>Some great content...</p>
            <p>Some great content...</p>
            <p>Some great content...</p> */}
            {/* {children} */}
        </Scrollbars>
    );
}

Scrollbar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };
  