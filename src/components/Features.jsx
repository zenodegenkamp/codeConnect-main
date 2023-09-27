import React from 'react'
import styles, { layout } from "../style";
import { features } from "../constants"

export default function Features(){



    return (
        <section id="features" className={layout.section}>
            <div className={`text-white flex-1 flex-col flex-start space-y-8`}>
                <h2 className={styles.heading2} >Unlock your coding potential</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Unlock your potential in the world of coding and experience success on your own terms. With us, you get:</p>
                <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary button-gradient rounded-[10px] outline-none ${styles}`}>
                    Get Started
                </button>
            </div>
            <div className={`flex-1 flex-col space-y-4 ${styles.flexStart} space-y-4 `}>
                {features.map((feature, index) => {
                    return (
                        <div key={index} className={`flex flex-row p-6 rounded-[20px]  space-x-8 feature-card`}>
                            <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                                <img className="w-[50%] h-[50%] object-contain" src={feature.icon} alt={`icon for ${feature.title}`} />
                            </div>
                            <div className='flex-1 flex flex-col ml-3'>
                                <h3 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">{feature.title}</h3>
                                <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">{feature.content}</p>
                            </div>
                        </div>
                    )
                })}
            </div>



        </section>

    )
}

// flex flex-col flex-1 flex-start