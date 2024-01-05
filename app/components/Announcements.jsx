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
import Image from "next/image";


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

    let verificacao = true;

    if(Object.keys(announcements).length === 0){
        verificacao = false
    }else{
        verificacao = true
    }

    return(
        <>

        {verificacao ? 
        

        <div className="overflow-auto lg:overflow-visible rounded-lg shadow wrap-table">
            <table className="w-full border-separate border-spacing-10-px" >
                <thead className="bg-gray-100 border-gray-200 ">
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
        : 

        <div className="flex flex-row items-center p-10">
            <div>
                <Image src="/images/error.png" alt="me" width="164" height="164"/>
            </div>
            <div className="ml-6">
                <h2 className="text-cyan-700">Nenhum produto encontrado</h2>     
            </div>
        </div>
        }

        </>
    )
}