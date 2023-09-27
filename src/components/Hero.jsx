import React from 'react'
import styles from '../style'
import { discount, robot, heroImg } from '../assets'
import Getstarted from './GetStarted'
import Spline from '@splinetool/react-spline'

export default function Hero() {


    return (
        <>

            <section id="home" className={`flex flex-col md:flex-row ${styles.paddingY}`}>
                <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>


                    <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
                        <p className={`${styles.paragraph} ml-2`}>
                            <span className="text-white">20%</span> Discount For{" "}
                            <span className="text-white">1 Month</span> Account
                        </p>
                    </div>

                    <div className="flex flex-row justify-between items-center w-full">
                        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                            Empowering <br className="sm:block hidden" />{" "}
                            <span className="text-gradient">Coders</span>{" "}
                        </h1>
                        <div className="ss:flex hidden md:mr-4 mr-0">
                            <Getstarted />
                        </div>
                    </div>

                    <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                        For succes
                    </h1>

                    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                        We offer starting devs a possibility to learn through meaningful
                        projects, collaborate with pros, conquer real challenges and a possiblity to build your
                        portfolio!
                    </p>


                </div>


                <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative `}>
                    {/* <img src={heroImg} alt="billing" className='w-[100%] h-[100%] relative z-[5]' /> */}
                    <Spline
                        className='w-[50%] h-[50%] max-w-[400px] max-h-[600px] relative z-[5]'
                        scene="https://prod.spline.design/FPwD6dYoSsCKYU1j/scene.splinecode"
                    />

                    {/* gradient start */}
                    <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                    <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                    <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                    {/* gradient end */}
                </div>


            </section>
        </>
    )
}

{/* <div className="home-section">
<div className="home-section-text">
  <h1>
    Boost your <span className="highligted-text">Carreer</span>
  </h1>
  <p className="home-section-text-gray max-width">
    We offer starting devs a possibility to learn through meaningful
    projects, collaborate with pros, conquer real challenges, build your
    portfolio!
  </p>
  <Link className="home-section-button" to="vans">
    Discover Projects
  </Link>
</div>
<div className="home-section-spline">
  <Spline
    className="spline"
    scene="https://prod.spline.design/DfnEI2jU5sZ79h9t/scene.splinecode"
  />
</div>
</div>
<div className="home-section-advantages">
<h1 className="advantage">
  Hands on learning<br></br>
  <FontAwesomeIcon className="home-icon" icon={faLaptopCode} />
</h1>
<h1 className="advantage">
  Work with professionals<br></br>{" "}
  <FontAwesomeIcon className="home-icon" icon={faUsers} />
</h1>
<h1 className="advantage">
  Tackling real challanges <br></br>
  <FontAwesomeIcon className="home-icon" icon={faLightbulb} />
</h1>
</div> */}