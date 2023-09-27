import React from "react";
import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faUsers,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Features from '../components/Features'
import Explanation from "../components/Explanation";
import About from '../components/About'
import Cta from "../components/Cta"
import Footer from '../components/Footer'
import styles from '../style'

export default function Home() {
  return (
    <>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <Stats />
          <Features />
          <Explanation />
          <About />
          <Cta />
          <Footer />
        </div>


      </div>

    </>
  )
}
