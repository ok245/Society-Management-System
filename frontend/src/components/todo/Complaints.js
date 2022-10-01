import { useState } from "react";
import React, { useEffect } from "react";
import AdminServices from "../../service/AdminServices";

const Complaints = () => {

    const[complaint, setComplaint] = useState([])

    const getAllComplaints= () => {
        AdminServices.getAllComplaints().then((resp) => {
            setComplaint(resp.data)
            console.log(resp.data);
        }).catch(error =>{
               console.log(error);
        })
    }

    useEffect(() => {
        getAllComplaints();
}, [])

return(
    <div className="container">
    <h2 className="text-center">Complaints</h2>
    <table className="table table-borders table-stripd">
     <thead>
         <th>Complaint Id</th>
         <th>Complaint Date</th>
         <th>Complaint</th>
         <th>Flat No.</th>
     </thead>
     <tbody>
         {
             complaint.map(
                complaints =>
                 <tr key={complaints.id}>
                     <td>{complaints.id}</td>
                     <td>{complaints.c_date}</td>
                     <td>{complaints.c_description}</td>
                     <td>{complaints.flatowner.id}</td>
                 </tr>
             )
         }
     </tbody>
    </table>
</div>
);
}

export default Complaints