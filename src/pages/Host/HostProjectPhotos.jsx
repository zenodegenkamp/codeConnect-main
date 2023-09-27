import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {
    const { currentVan } = useOutletContext()
    return (
        <img src={currentVan.imageUrl} className=" w-[200px] object-contain my-4 rounded-lg" />
    )
}