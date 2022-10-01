import { useState } from "react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AdminServices from "../../service/AdminServices";

const Bill = () => {

    const[bill, setbill] = useState([])
    const[state, setState ]=useState(false);

    const getAllBills= () => {
        AdminServices.getAllBills().then((resp) => {
            setbill(resp.data)
            console.log(resp.data);
        }).catch(error =>{
               console.log(error);
        })
    }

    const toggle=()=>{
setState(!state)
    }

    useEffect(() => {
        getAllBills();
}, [])

return(
    <div className="container">
    <h2 className="text-center">Bills</h2>
    <Link to= "/Admin/Bills/Add" className="btn btn-primary mb-2">Add Bill</Link>
    <table className="table table-borders table-stripd">
     <thead>
         <th>Bill Id</th>
         <th>Bill Date</th>
         <th> Amount</th>
         <th>Flat No.</th>
         <th>Payments</th>
     </thead>
     <tbody>
         {
             bill.map(
                bills =>
                 <tr key={bills.id}>
                     <td>{bills.id}</td>
                     <td>{bills.b_date}</td>
                     <td>{bills.b_amount}</td>
                     <td>{bills.flatowner.id}</td>
                     </tr>
                 
             )
         }
     </tbody>
    </table>
</div>
);
}

export default Bill