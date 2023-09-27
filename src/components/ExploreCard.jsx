import { motion } from "framer-motion"
import { Link } from 'react-router-dom';


export default function ExploreCard({ id, imageUrl, name, price, type, handleClick, searchParams, typeFilter, active }) {

    return (

        <div key={id} className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
            } flex items-center justify-center min-w-[170px] h-[550px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer `} onClick={() => handleClick(id)}>

            <img src={imageUrl}
                className="absolute w-full h-full object-cover rounded-[24px]"
            />
            {active !== id ? (
                <h3 className=" text-dimWhite font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
                    {name}
                </h3>
            ) : (
                <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
                    <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
                        {name}
                    </p>
                    <h2 className="mt-[16px] font-semibold sm:text-[32px] text-[24px] text-white">
                        {price} euros/project
                    </h2>
                    <div className="flex items-center justify-between">
                    <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase mt-2">
                        {type}
                    </p>

                    {searchParams ? <Link
                        to={id}
                         state={{
                             search: `?${searchParams.toString()}`,
                             type: typeFilter
                         }}
                         className="mt-4 size-xl text-white font-bold"
                    >
                        See more
                    </Link> : "" 
                    }
                    
                    </div>
                </div>
            )}

        </div>

    )
}


