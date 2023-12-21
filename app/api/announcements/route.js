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
    return NextResponse.json(announcements);
}