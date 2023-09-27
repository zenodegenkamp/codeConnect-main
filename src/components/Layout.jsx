import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Navbar from './Navbar'
import styles from '../style'

export default function Layout() {
    return (
        <>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
                <Outlet />
            </div>
        </div>

          
            {/* <Footer /> */}
       
        </>
    )
}