import { useState } from "react";
import React, { useEffect } from "react";
import FlatownerServices from "../../service/FlatownerServices";

const FBill = () => {

    const[bill, setbill] = useState([])

    const getAllFBills= () => {
        FlatownerServices.getAllFBills().then((resp) => {
            setbill(resp.data)
            console.log(resp.data);
        }).catch(error =>{
               console.log(error);
        })
    }

    useEffect(() => {
        getAllFBills();
}, [])

return(
    <div className="container">
    <h2 className="text-center">Bill</h2>
    <table className="table table-borders table-stripd">
     <thead>
         <th>Bill Id</th>
         <th>Bill Date</th>
         <th>Visitor Amount</th>
     </thead>
     <tbody>
         {
             bill.map(
                bills =>
                 <tr key={bills.id}>
                     <td>{bills.id}</td>
                     <td>{bills.b_date}</td>
                     <td>{bills.b_amount}</td>
                    
                 </tr>
             )
         }
     </tbody>
    </table>
</div>
);
}

export default FBill