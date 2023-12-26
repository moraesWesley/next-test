import { useState } from "react";

import Announcements from "./Announcements";

export default function OrderDetail({data}){
    const [isVisible1, setIsVisible1] = useState(false);
    const toggleVisibility1 = () => {
        setIsVisible1(!isVisible1);
    }
    const [isVisible2, setIsVisible2] = useState(false);
    const toggleVisibility2 = () => {
        setIsVisible2(!isVisible2);
    }

    //console.log(data)

    return(
        <>
        <tr key={data.ads_id} className="hover:bg-slate-400 bg-white mb-4">
                            <td className="whitespace-nowrap lg:whitespace-normal">
                                <div className="p-2">
                                    <p className="text-base font-medium">{data.name}</p>
                                    <p className="text-sm" >{data.ads_id}</p>
                                    <p className="text-sm ">{data.sku}</p>
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
                            <td className="text-base lg:text-lg">{data.value}</td>
                            <td className="text-base lg:text-lg text-center">{data.quantity}</td>
                            <td className="text-base lg:text-lg">{data.sale_fee}</td>
                            <td className="text-base lg:text-lg">{data.shipping_price}</td>

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
                                    {data.orders_detail.map(detail => (
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
                                    {data.orders_group.map(group => (
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
    )
}