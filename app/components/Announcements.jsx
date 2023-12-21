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

export default function Announcements({announcements}){


    const [isVisible2, setIsVisible2] = useState(false);
    const toggleVisibility2 = () =>{
        setIsVisible2(!isVisible2);
    }

    const [isVisible1, setIsVisible1] = useState(false);
    const toggleVisibility1 = () =>{
        setIsVisible1(!isVisible1);
    }

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
                        <><tr key={announcement.ads_id} className="hover:bg-slate-400 bg-white mb-4">
                            <td className="whitespace-nowrap lg:whitespace-normal">
                                <div className="p-2">
                                    <p className="text-base font-medium">{announcement.name}</p>
                                    <p className="text-sm" >{announcement.ads_id}</p>
                                    <p className="text-sm ">{announcement.sku}</p>
                                    <button 
                                        className="h-10 px-4 mr-2 border-teal-300 border rounded-md w-24 text-sm hover:bg-blue-300" 
                                        onClick={toggleVisibility1}
                                    >     
                                        Detalhes
                                    </button>
                                    <button 
                                        className="h-10 px-4 mr-2 border-teal-300 border rounded-md w-24 text-sm hover:bg-blue-300"
                                        onClick={toggleVisibility2}
                                        >
                                            Pedido
                                    </button>
                                </div>
                            </td>
                            <td className="text-base lg:text-lg">{announcement.value}</td>
                            <td className="text-base lg:text-lg">{announcement.quantity}</td>
                            <td className="text-base lg:text-lg">{announcement.sale_fee}</td>
                            <td className="text-base lg:text-lg">{announcement.shipping_price}</td>

                        </tr>
                        <tr>
                        {isVisible1 &&
                            <table>
                                <thead className="bg-slate-300">
                                    <th className="title-subtable">id</th>
                                    <th className="title-subtable">Data</th>
                                    <th className="title-subtable">Imposto</th>
                                    <th className="title-subtable">Valor Total</th>

                                </thead>
                                <tbody>
                                    {announcement.orders_detail.map(detail => (
                                        <tr key={detail.order_id}>
                                            <td>{detail.order_id}</td>
                                            <td>{detail.date}</td>
                                            <td>{detail.shipping_price}</td>
                                            <td>{detail.total_value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        }
                        </tr>
                        <tr>
                        {isVisible2 && 
                            <table>
                                <thead className="bg-slate-300">
                                    <th className="title-subtable">id</th>
                                    <th className="title-subtable">valor</th>  
                                    <th className="title-subtable">Quantidade</th>
                                    <th className="title-subtable">Valor Total</th>
                                    <th className="title-subtable">Taxa de Transação</th>
                                    <th className="title-subtable">Imposto</th>  
                                </thead>
                                <tbody>
                                    {announcement.orders_group.map(group => (
                                        <tr key={group.order_id}>
                                            <td>{group.order_id}</td>
                                            <td>{group.value}</td>
                                            <td>{group.quantity}</td>
                                            <td>{group.total_value}</td>
                                            <td>{group.sale_fee}</td>
                                            <td>{group.shipping_price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        }
                            
                        </tr>
                        
                        </>
                    ))}
                </tbody>
            </table>
        </div>


        </>
    )
}