import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { getVan } from "../../../api";
import Spline from "@splinetool/react-spline";

export default function VanDetail() {
  const [project, setProject] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const { id } = useParams()
  const location = useLocation()

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true)
      try {
        const data = await getVan(id)
        setProject(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    loadVans()
  }, [id])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>
  }

  const search = location.state?.search || ""
  const type = location.state?.type || "all"


  return (
    <div className="h-screen relative font-poppins ">
      <div className="project-detail-back-btn">
        <Link to={`..${search}`} relative="path" className="back-button text-gray-400 hover:underline">
          &larr; <span>Back to {type} projects</span>
        </Link>
      </div>
      {project && (
        <div className="flex-col md:flex-row bg-gray-900 text-gray-200 flex justify-center items-center gap-8 w-full p-8 mx-auto rounded-lg mt-20 opacity-90">
          <div className="w-100 bg-cover flex-1 flex-start">
            <img src={project.imageUrl} className="w-full h-full object-contain rounded-lg " />
          </div>
          <div className="flex-2 flex-col text-sm leading-6">
            <div className="flex flex-col md:flex-row gap-x-4 md:items-center items-start justify-start border-b-2 border-white mb-4">
              <h2 className="text-m leading-6 mb-4">{project.name} </h2>
              <h2 className="text-m leading-4 mb-4">{project.type}</h2>
              <p className="project-price text-1.25rem mb-4">
                <span className="font-bold text-m">${project.price}</span>/ for the project
              </p>
            </div>
            <p className="max-w-screen-sm">{project.description}</p>
            <button className={`button-gradient text-white mt-6 md:mb-0 py-2 px-4 font-poppins font-medium text-[12px] text-primary  rounded-[10px] outline-none mr-4`}>Rent this project</button>
          </div>
        </div>
      )}
    </div>

  )
}
