/*
<ul>
            {announcements.map(announcement => (
                <li key={announcement.ads_id}>
                    <h3>{announcement.name}</h3>
                    <p>Sku: {announcement.sku}</p>
                    <p>Quantidade: {announcement.quantity}</p>
                </li>
            ))}
        </ul>
*/

import { useState } from "react"
import OrderDetail from "./OrderDetail"


export default function Announcements({announcements}){

    /*
    const [isVisible2, setIsVisible2] = useState(false);
    const toggleVisibility2 = () =>{
        setIsVisible2(!isVisible2);
    }

    const [isVisible1, setIsVisible1] = useState(false);
    const toggleVisibility1 = () =>{
        setIsVisible1(!isVisible1);
    }
    */
    return(
        <>
        <div className="overflow-auto lg:overflow-visible rounded-lg shadow w-full pl-4 pr-4">
            <table className="w-full border-collapse" >
                <thead className="bg-gray-50 border-gray-200">
                    <tr>
                    <th className="title-table">Produto</th>
                    <th className="title-table">Preço</th>
                    <th className="title-table">Quantidade</th>
                    <th className="title-table">Taxa</th>
                    <th className="title-table">Shipping</th>
                    </tr>
                </thead>
                <tbody className=" divide-y divide-blue-200 ">
                    {announcements.map(announcement => (
                        <>
                        <OrderDetail data={announcement} />
                        </>
                    ))}
                </tbody>
            </table>
        </div>


        </>
    )
}