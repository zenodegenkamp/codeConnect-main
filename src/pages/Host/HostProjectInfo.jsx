import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {
    const { currentVan } = useOutletContext()
    
    return (
        <section className="bg-gray-900 text-gray-300 py-8 mb-4 rounded-lg">
        <div className="bg-gray-900 p-6 rounded-lg host-van-detail-info">
          <h4 className="text-lg font-semibold mt-2">Name: <span className="text-gray-500">{currentVan.name}</span></h4>
          <h4 className="text-lg font-semibold mt-2">Category: <span className="text-gray-500">{currentVan.type}</span></h4>
          <h4 className="text-lg font-semibold mt-2">Description: <span className="text-gray-500">{currentVan.description}</span></h4>
          <h4 className="text-lg font-semibold mt-2">Visibility: <span className="text-gray-500">Public</span></h4>
        </div>
      </section>
      
    )
}