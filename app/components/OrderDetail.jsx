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

    function formatarData(data){

        var data = new Date(data),
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        hora = data.getHours().toString(),
        horaF = (hora.length == 1) ? '0'+hora : hora,
        minuto = data.getMinutes().toString(),
        minutoF = (minuto.length == 1) ? '0'+minuto : minuto,
        anoF = data.getFullYear();


        return " "+diaF+"/"+mesF+"/"+anoF+" - " + horaF + ":" + minutoF;
        
    }

    

    //console.log(data)

    return(
        <>
        <tr key={data.ads_id} className="hover:bg-slate-400 bg-white mb-4 odd:bg-white even:bg-gray-300 ">
                            <td className="whitespace-nowrap lg:whitespace-normal">
                                <div className="p-2">
                                    <p className="text-base font-medium">{data.name}</p>
                                    <p className="text-sm" >{data.ads_id}</p>
                                    <p className="text-sm ">{data.sku}</p>
                                    <button 
                                        className="h-10 px-4 mr-2 text-white rounded-md w-24 text-sm
                                        bg-blue-900
                                        hover:bg-blue-700" 
                                        onClick={toggleVisibility1}
                                    >     
                                        Detalhes
                                    </button>
                                    <button 
                                        className="h-10 px-4 mr-2 text-white rounded-md w-24 text-sm
                                        bg-blue-900
                                        hover:bg-blue-700"
                                        onClick={toggleVisibility2}
                                        >
                                            Pedido
                                    </button>
                                </div>
                            </td>
                            <td className="text-base lg:text-lg text-center">{data.value}</td>
                            <td className="text-base lg:text-lg text-center">{data.quantity}</td>
                            <td className="text-base lg:text-lg text-center">{data.sale_fee.toString().substring(0,6)}</td>
                            <td className="text-base lg:text-lg text-center">{data.shipping_price}</td>

                        </tr>
                        <tr>
                        {isVisible1 &&
                            <table className="border-separate border-spacing-10-px">
                                <thead className="bg-gray-400">
                                    <th className="title-subtable">id</th>
                                    <th className="title-subtable">Data</th>
                                    <th className="title-subtable">Imposto</th>
                                    <th className="title-subtable">Valor Total</th>

                                </thead>
                                <tbody className="bg-white">
                                    {data.orders_detail.map(detail => (
                                        <tr key={detail.order_id}>
                                            <td className="text-center">{detail.order_id}</td>
                                            <td className="text-center">{formatarData(detail.date)}</td>
                                            <td className="text-center">{detail.shipping_price}</td>
                                            <td className="text-center">{detail.total_value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        }
                        </tr>
                        <tr>
                        {isVisible2 && 
                            <table className="border-separate border-spacing-10-px">
                                <thead className="bg-gray-400">
                                    <th className="title-subtable">id</th>
                                    <th className="title-subtable">valor</th>  
                                    <th className="title-subtable">Quantidade</th>
                                    <th className="title-subtable">Valor Total</th>
                                    <th className="title-subtable">Taxa de Transação</th>
                                    <th className="title-subtable">Imposto</th>  
                                </thead>
                                <tbody className="bg-white">
                                    {data.orders_group.map(group => (
                                        <tr key={group.order_id}>
                                            <td className="text-center">{group.order_id}</td>
                                            <td className="text-center">{group.value}</td>
                                            <td className="text-center">{group.quantity}</td>
                                            <td className="text-center">{group.total_value}</td>
                                            <td className="text-center">{group.sale_fee.toString().substring(0,6)}</td>
                                            <td className="text-center">{group.shipping_price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        }
                            
                        </tr>
        </>
    )
}