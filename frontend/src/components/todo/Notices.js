import { useState } from "react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AdminServices from "../../service/AdminServices";

const Notices = () => {

    const[notice, setnotice] = useState([])

    const getAllNotices= () => {
        AdminServices.getAllNotices().then((resp) => {
            setnotice(resp.data)
            console.log(resp.data);
        }).catch(error =>{
               console.log(error);
        })
    }

    useEffect(() => {
        getAllNotices();
}, [])

return(
    <div className="container">
    <h2 className="text-center">Notices</h2>
    <Link to= "/Admin/Notice/Add" className="btn btn-primary mb-2">Add Notice</Link>
    <table className="table table-borders table-stripd">
     <thead>
         <th>Notice Id</th>
         <th>Notice Date</th>
         <th>Notice Description</th>
     </thead>
     <tbody>
         {
             notice.map(
                Notices =>
                 <tr key={Notices.id}>
                     <td>{Notices.id}</td>
                     <td>{Notices.n_date}</td>
                     <td>{Notices.n_description}</td>
                 </tr>
             )
         }
     </tbody>
    </table>
</div>
);
}

export default Notices