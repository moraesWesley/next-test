"use client"


import { useState } from "react"

export default function SearchAnnouncements({getSearchResults} : any){
    const [query, setQuery] = useState('')

    const handleSubmit = async (e : any) => {
        e.preventDefault()
        const response = await fetch(`api/announcements/search?query=${query}`)

        const announcement = await response.json()

        getSearchResults(announcement)

        
        
    }

    return(
        <div className="mb-8 ">
            <form onSubmit={handleSubmit} className="flex items-center">
                <input 
                    className="h-10 px-4 mr-2 border-teal-300 border rounded-md w-3/4 text-sm"
                    type="text"    
                    placeholder="Procurar Produto..."
                    value = {query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button 
                    type="submit"
                    className="h-10 bg-blue-500 hover:bg-blue-700 text-black rounded w-1/4 text-sm"    
                >
                    Procurar
                </button>
            </form>
        </div>
    )
}
