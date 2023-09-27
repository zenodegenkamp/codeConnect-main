import React from "react"
import { Link, useSearchParams } from "react-router-dom"
import { getProjects } from "../../../api"
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import ExploreCard from "../../components/ExploreCard";
import styles from '../../style'

const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  });

export default function Projects() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [projects, setProjects] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const [active, setActive] = React.useState("2")

    const typeFilter = searchParams.get("type")

    React.useEffect(() => {
        async function loadProjects() {
            setLoading(true)
            try {
                const data = await getProjects()
                setProjects(data)
                console.log(setProjects)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadProjects()
    }, [])

    const displayedProjects = typeFilter
        ? projects.filter(project => project.type === typeFilter)
        : projects

    function handleFilterChange(key, value) {

        console.log("value" + value)
        if(value === "front-end"){
            setActive("1")
        }
        else if(value === "back-end"){
            setActive("2")
        }
        else if(value === "ux-design"){
            setActive("3")
        }
        
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    if (loading) {
        return <h1>Loading...</h1>
    }
    
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }


    return (
        <section className={`${styles.paddings} relative h-screen`} id="explore">

            <div className="flex items-center justify-center text-white z-[5]  p-6 rounded-[24px]"> 
                    <button
                        onClick={() => handleFilterChange("type", "front-end")}
                        className={
                            `
                         ${typeFilter === "front-end" ? "button-gradient" : "bg-discount-gradient"} text-white mb-4 md:mb-0 py-2 px-4 font-poppins font-medium text-[18px] text-primary  rounded-[10px] outline-none mr-4 ${styles}`
                        }
                    >Front-end</button>
                    <button
                        onClick={() => handleFilterChange("type", "back-end")}
                        className={
                            `
                         ${typeFilter === "back-end" ? "button-gradient" : "bg-discount-gradient"}  text-white  py-2 px-4 font-poppins font-medium text-[18px] text-primary rounded-[10px] outline-none mr-4 ${styles}`
                        }
                    >Back-end</button>
                    <button
                        onClick={() => handleFilterChange("type", "ux-design")}
                        className={
                            ` 
                         ${typeFilter === "ux-design" ? "button-gradient" : "bg-discount-gradient"} text-white py-2 px-4 font-poppins font-medium text-[18px] text-primary rounded-[10px] outline-none mr-4 ${styles}`
                        }
                    >Ux-design</button>

                    {typeFilter ? (
                        <button
                            onClick={() => handleFilterChange("type", null)}
                            className="project-type clear-filters relative"
                        >Clear filter</button>
                    ) : null}

            
            </div>
       
          <div className="mt-[20px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
            {displayedProjects .map((project, index) => (
              <ExploreCard
                key={project.id}
                {...project}
                index={index}
                active={active}
                handleClick={setActive}
                searchParams={searchParams}
                typeFilter={typeFilter}
              />
            ))}
          </div>

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[40%] -left-1/2 bottom-0 rounded-full white__gradient" />
          <div className="absolute z-[2] w-[40%] h-[40%] -left-1/2 bottom-0 rounded-full pink__gradient" />
          {/* gradient end */}
      </section>
    )
}

// <div className="project-list-container">
//             <div className="project-list-header">
//             <h1 className="project-list-h1"><span className="highligted-text">Explore</span> the available projects</h1>
//             <div className="project-list-filter-buttons">
//                 <button
//                     onClick={() => handleFilterChange("type", "front-end")}
//                     className={
//                         `project-type simple 
//                         ${typeFilter === "front-end" ? "selected" : ""}`
//                     }
//                 >Front-end</button>
//                 <button
//                     onClick={() => handleFilterChange("type", "back-end")}
//                     className={
//                         `project-type luxury 
//                         ${typeFilter === "back-end" ? "selected" : ""}`
//                     }
//                 >Back-end</button>
//                 <button
//                     onClick={() => handleFilterChange("type", "ux-design")}
//                     className={
//                         `project-type rugged 
//                         ${typeFilter === "ux-design" ? "selected" : ""}`
//                     }
//                 >Ux-design</button>

//                 {typeFilter ? (
//                     <button
//                         onClick={() => handleFilterChange("type", null)}
//                         className="project-type clear-filters"
//                     >Clear filter</button>
//                 ) : null}

//             </div>
//             </div>
//             <div className="project-list">
//                 {projectElements}
               
//             </div>
//             <div className="project-list-bottom-section">
//             { <Spline 
//                 zIndex="-1"
//                 className="spline-background-projects"scene="https://prod.spline.design/xo9Z214VQTCYaekx/scene.splinecode" /> }
//             </div>
//         </div>