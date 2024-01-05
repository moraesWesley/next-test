"use client"

import { useState, useEffect, Suspense } from "react"
import Announcements from "./components/Announcements"
import SearchAnnouncements from "./components/SearchAnnouncements"

import Loading from "./loading"

import Image from "next/image"
import localImageNext from "../public/images/next_logo.png"

export default function Home() {


  const [announcements, setAnnouncements] = useState([]);

  useEffect(() =>{
    const getAnnouncements = async () =>{
      const response = await fetch("/api/announcements")
      const announcements = await response.json();
      setAnnouncements(announcements.record)
      console.log(announcements)
    }

    getAnnouncements();
  }, [])

  return (
    <div className="bg-gray-200 w-full h-full flex flex-col items-center justify-center">
      
      <div className="w-full h-32 bg-gradient-to-r from-blue-950 to-blue-500 mb-10">
        <h2 className="text-center pt-12 text-4xl text-white ">Next Teste!</h2>
      </div>

      <Suspense fallback={ <Loading />}>
        <SearchAnnouncements getSearchResults={(results : any) => setAnnouncements(results)} />
        <Announcements announcements={announcements} />
      </Suspense>
        
    </div>
  )
}
