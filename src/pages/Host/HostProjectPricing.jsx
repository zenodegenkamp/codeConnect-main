import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanPricing() {
    const { currentVan } = useOutletContext()
    return (
        <h3 className="rounded-[24px] bg-gray-900 p-4 text-gray-300 my-4 ">${currentVan.price}<span>/day</span></h3>
    )
}