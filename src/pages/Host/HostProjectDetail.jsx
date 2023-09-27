import React from "react"
import { useParams, Link, NavLink, Outlet } from "react-router-dom"
import { getVan } from "../../../api.js"

export default function HostVanDetail() {
    const [currentVan, setCurrentVan] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const { id } = useParams()

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVan(id)
                setCurrentVan(data)
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

    const activeStyles = {
        fontWeight: "bold",
        color: "#AE67FA"
    }

    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            {currentVan &&
                <div className="flex flex-col h-screen font-poppins">
                    
                    <div className="flex-1 host-van-detail rounded-lg relative ">
                        <img src={currentVan.imageUrl} className="absolute w-full h-full object-cover rounded-[24px] min-h-[200px]"/>
                        <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] text-white gap-y-4">
                            <i
                                className={`van-type van-type-${currentVan.type}`}
                            >
                                {currentVan.type}
                            </i>
                            <h3>{currentVan.name}</h3>
                            <h4>${currentVan.price}/day</h4>
                        </div>
                    </div>

                    <nav className="flex gap-x-4 text-white my-4">
                        <NavLink
                            to="."
                            end
                            style={({ isActive }) => isActive ? activeStyles : null}
                        >
                            Details
                    </NavLink>
                        <NavLink
                            to="pricing"
                            style={({ isActive }) => isActive ? activeStyles : null}
                        >
                            Pricing
                    </NavLink>
                        <NavLink
                            to="photos"
                            style={({ isActive }) => isActive ? activeStyles : null}
                        >
                            Photos
                    </NavLink>
                    </nav>
                    <div>
                    <Outlet context={{ currentVan }} />
                    </div>
                    
                </div>}
        </section>
    )
}
