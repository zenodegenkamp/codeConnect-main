import React from 'react'
import Spline from "@splinetool/react-spline";
import styles, { layout } from "../style";
import { aboutus } from '../assets'

export default function About() {


    return (
        <section id="about" className={`${layout.section} relative`}>
           
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Bridging the gap <br className="sm:block hidden" /> for starting devs
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    At CodeConnect, we're passionate about practical coding education. Our
                    platform bridges beginners to real projects, fostering growth for
                    programmers and aiding businesses. We embrace collaboration, nurturing
                    a culture of learning. Join us today to unleash the potential of
                    hands-on learning and shape your tech future!
                </p>
            </div>
           
            <div className={layout.sectionImg}>
                {/* <Spline className='w-[100] h-[100]' scene="https://prod.spline.design/UW8H7quzv7TEYgdB/scene.splinecode" /> */}
                <img src={aboutus} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
            </div>
        </section>
    )
}