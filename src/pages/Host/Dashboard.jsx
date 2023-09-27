import React from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { BsStarFill } from "react-icons/bs"
import { getHostProjects } from "../../../api.js"
import { getAuth, signOut } from "firebase/auth"
import ExploreCard from "../../components/ExploreCard.jsx"

function LogoutButton({ navigate }) {
  function handleLogout() {
    const auth = getAuth()
    signOut(auth)
      .then(() => {
        navigate("/login")
      })
      .catch((error) => {
        console.error("Error", error);
      })
  }

  return (
    <button className="text-white w-100 flex items-center justify-center" onClick={handleLogout}>
      Log out
    </button>
  );
}

export default function Dashboard() {
  const [projects, setProjects] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [active, setActive] = React.useState("2")

  const auth = getAuth()
  const user = auth.currentUser
  const navigate = useNavigate()

  React.useEffect(() => {
    setLoading(true)
    getHostProjects()
      .then((data) => setProjects(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, []);

  function renderProjectElements(projects) {
    const hostProjectEls = projects.map((project) => (
      <div className="host-project-single" key={project.id}>
        <img src={project.imageUrl} alt={`Photo of ${project.name}`} />
        <div className="host-project-info">
          <h3>{project.name}</h3>
          <p>${project.price}/day</p>
        </div>
        <Link to={`projects/${project.id}`}>View</Link>
      </div>
    ));

    return (
      <div className="host-project-list">
        <section>{hostProjectEls}</section>
      </div>
    )
  }

  if (error) {
    return <h1>Error: {error.message}</h1>
  }
  return (
    <div className="pb-[5px]"> 
    <div className="flex flex-col md:flex-row items-start mb-4 p-4 font-poppins">
      <h1 className="text-2xl text-white">Welcome {user?.email}!</h1>
    </div>
  
    <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
  
      <section className="w-full md:w-1/3 bg-gray-900 p-6 rounded-lg text-white">
        <div className="info">
          <p>
            Your due payments for <span className="font-bold">the end of the month</span>
          </p>
          <h2 className="text-3xl font-semibold">$2,260</h2>
        </div>
        <Link to="income" className="text-white mt-4 block">Details</Link>
      </section>
  
      <section className="w-full md:w-1/3 bg-gray-900 p-6 rounded-lg text-white">
        <h2 className="text-2xl font-semibold">Review score</h2>
        <div className="flex items-center">
          <BsStarFill className="star text-pink-500 text-2xl" />
          <p className="text-xl"><span className="font-bold">5.0</span>/5</p>
        </div>
        <Link to="reviews" className="text-white mt-4 block">Details</Link>
      </section>
  
      <section className="w-full md:w-1/3 bg-gray-900 p-6 rounded-lg text-white">
        <h2 className="text-2xl font-semibold">
          Currently{" "}
          <span className="font-bold">2 </span>
          active projects
        </h2>
      </section>
  
    </div>
  
    <section className="max-w-5xl mx-auto bg-gray-900 p-6 rounded-lg text-white mt-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Your listed projects</h2>
        <Link to="projects" className="text-white">View all</Link>
      </div>
      {loading && !projects ? (
        <h1>Loading...</h1>
      ) : (

        <div className="mt-[20px] flex lg:flex-row flex-col min-h-[400px] gap-5">
            {projects.map((project, index) => (
              <ExploreCard
                key={project.id}
                {...project}
                index={index}
                active={active}
                handleClick={setActive}
               
              />
            ))}
          </div>
        )}
      </section>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-between mb-4 p-4 font-poppins">

        <LogoutButton navigate={navigate} />
      </div>

      </div>
 
  )
  }




// function LogoutButton({ navigate }) {
//   function handleLogout() {
//     const auth = getAuth()
//     signOut(auth)
//       .then(() => {
//         navigate("/login")
//       })
//       .catch((error) => {
//         console.error("Error", error);
//       })
//   }

//   return (
//     <button className="log-out-btn" onClick={handleLogout}>
//       Log out
//     </button>
//   );
// }

// export default function Dashboard() {
//   const [projects, setProjects] = React.useState([])
//   const [loading, setLoading] = React.useState(false)
//   const [error, setError] = React.useState(null)

//   const auth = getAuth()
//   const user = auth.currentUser
//   const navigate = useNavigate()

//   React.useEffect(() => {
//     setLoading(true)
//     getHostProjects()
//       .then((data) => setProjects(data))
//       .catch((err) => setError(err))
//       .finally(() => setLoading(false))
//   }, []);

//   function renderProjectElements(projects) {
//     const hostProjectEls = projects.map((project) => (
//       <div className="host-project-single" key={project.id}>
//         <img src={project.imageUrl} alt={`Photo of ${project.name}`} />
//         <div className="host-project-info">
//           <h3>{project.name}</h3>
//           <p>${project.price}/day</p>
//         </div>
//         <Link to={`projects/${project.id}`}>View</Link>
//       </div>
//     ));

//     return (
//       <div className="host-project-list">
//         <section>{hostProjectEls}</section>
//       </div>
//     )
//   }

//   if (error) {
//     return <h1>Error: {error.message}</h1>
//   }
//   return (
//     <>
//     <div className="flex flex-col md:flex-row gap-8 items-center justify-between mb-4 p-4">
//       <h1 className="text-2xl text-white">Welcome {user?.email}!</h1>
//       <LogoutButton navigate={navigate} className="log-out-btn text-white" />
//     </div>
  
//     <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
  
//       <section className="w-full md:w-1/3 bg-gray-900 p-6 rounded-lg text-white">
//         <div className="info">
//           <p>
//             Your due payments for <span className="font-bold">the end of the month</span>
//           </p>
//           <h2 className="text-3xl font-semibold">$2,260</h2>
//         </div>
//         <Link to="income" className="text-white mt-4 block">Details</Link>
//       </section>
  
//       <section className="w-full md:w-1/3 bg-gray-900 p-6 rounded-lg text-white">
//         <h2 className="text-2xl font-semibold">Review score</h2>
//         <div className="flex items-center">
//           <BsStarFill className="star text-pink-500 text-2xl" />
//           <p className="text-xl"><span className="font-bold">5.0</span>/5</p>
//         </div>
//         <Link to="reviews" className="text-white mt-4 block">Details</Link>
//       </section>
  
//       <section className="w-full md:w-1/3 bg-gray-900 p-6 rounded-lg text-white">
//         <h2 className="text-2xl font-semibold">
//           Currently{" "}
//           <span className="font-bold">2 </span>
//           active projects
//         </h2>
//       </section>
  
//     </div>
  
//     <section className="max-w-5xl mx-auto bg-gray-900 p-6 rounded-lg text-white mt-8">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-semibold">Your listed projects</h2>
//         <Link to="projects" className="text-white">View all</Link>
//       </div>
//       {loading && !projects ? (
//         <h1>Loading...</h1>
//       ) : (
//         <div>{renderProjectElements(projects)}</div>
//       )}
//     </section>
//     </>
//   )
//   }