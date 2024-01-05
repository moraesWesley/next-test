//backend
//Pagina de convenção

import { NextResponse } from "next/server";
async function fetchAnnoucements(){

    
    const response = await fetch("https://api.jsonbin.io/v3/b/6581c3fddc7465401885537d", {
        "method" : "GET",
        "Content-Type" : "application/json",
    })

    const announcements = await response.json();
    console.log(announcements)
    return announcements;

}

export async function GET(request){
    const announcements = await fetchAnnoucements();
    const {searchParams} = new URL(request.url);
    console.log(searchParams.get('query'));
    const query = searchParams.get('query');

    const filteredAnnouncements = announcements.record.filter((announcement) =>{
        return announcement.name.toLowerCase().includes(query.toLowerCase()) 
        || announcement.sku.toLowerCase().includes(query.toLowerCase())
        || announcement.ads_id.toLowerCase().includes(query.toLowerCase())
    })


    return NextResponse.json(filteredAnnouncements)
}
