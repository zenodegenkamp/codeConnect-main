import { apple, bill, google, dashboard} from "../assets";
import styles, { layout } from "../style";
import Spline from '@splinetool/react-spline'
import {people01} from '../assets/index'

export default function Explanation(){


    return (
        <section id="product" className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
            {/* gradient start */}
          <div className="absolute z-[10] top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[20] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
          {/* gradient end */}
          <img src={dashboard} alt="billing" className="w-[100%] h-[100%] relative " />
         
    
          
        </div>
    
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            Easily control projects <br className="sm:block hidden" /> in the dashboard
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 leading-[30px]`}>
          Our intuitive dashboard environment provides you with complete control over all your projects. With powerful tools and a streamlined interface, you can effortlessly manage tasks, track progress, and collaborate with your team. 
          </p>
                <div className="flex flex-row items-center py-[12px] px-8 bg-discount-gradient rounded-[10px] mt-8 mb-2 gap-x-2">
                    <img src={people01} alt="person" className="w-[52px] h-[52px]" />
                    <div className="flex flex-col">
                    <p className={`${styles.paragraph} ml-2`}>
                        <span className="text-white">"A very easy to use dashboard!"</span> 
                        
                    </p>
                    <p className={`${styles.paragraph} text-[14px] ml-2 text-center`}>
                    Gerdy Dekker, Founder & CEO
                    </p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

<section id="product" className={`${layout.sectionReverse} relative`}>
<div className={layout.sectionImgReverse}>
  <img src={dashboard} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
 

  {/* gradient start */}
  <div className="absolute z-[10] top-0 right-0 w-[100%] h-[50%] rounded-full white__gradient" />
  <div className="absolute z-[20] w-[50%] right-0 h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
  {/* gradient end */}
</div>

<div className={layout.sectionInfo}>
  <h2 className={styles.heading2}>
    Easily control projects <br className="sm:block hidden" /> in the dashboard
  </h2>
  <p className={`${styles.paragraph} max-w-[470px] mt-5 leading-[30px]`}>
  Our intuitive dashboard environment provides you with complete control over all your projects. With powerful tools and a streamlined interface, you can effortlessly manage tasks, track progress, and collaborate with your team. 
  </p>
        <div className="flex flex-row items-center py-[12px] px-8 bg-discount-gradient rounded-[10px] mt-8 mb-2 gap-x-2">
            <img src={people01} alt="person" className="w-[52px] h-[52px]" />
            <div className="flex flex-col">
            <p className={`${styles.paragraph} ml-2`}>
                <span className="text-white">"A very easy to use dashboard!"</span> 
                
            </p>
            <p className={`${styles.paragraph} text-[14px] ml-2 text-center`}>
            Gerdy Dekker, Founder & CEO
            </p>
            </div>
            
        </div>
    </div>
</section>