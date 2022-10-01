import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FlatownerServices from "../../service/FlatownerServices";

const Flatowner = () => {
   
    const[flatowner, setFlatowner] = useState([])

    useEffect(() => {
              getFlatowner();
    }, [])

    const getFlatowner = () => {
        FlatownerServices.getFlatowner().then((resp) => {
            setFlatowner(resp.data)
            console.log(resp.data);
        }).catch(error =>{
               console.log(error);
        })
    }

    return(
       <div className="container">
           <h2 className="text-center">Welcome to Profile</h2>
           <table className="table table-borders table-stripd">
            <thead>
                <th>Your Flat No.</th>
                <th>Name</th>
                <th>Your Email</th>
                <th>Your Mobile No.</th>
                <th>Update</th>
            </thead>
            <tbody>
                {
            flatowner.map(
                        flat =>
                        <tr key={flat.id}>
                            <td>{flat.id}</td>
                            <td>{flat.f_name}</td>
                            <td>{flat.f_email}</td>
                            <td>{flat.f_mobilenum}</td>
                            <td>
                                <Link className="btn btn-info" to={`/edit-flat/${flat.id}`}>Update</Link>
                            </td>
                        </tr>
                    )
                }
            </tbody>
           </table>
       </div>
    )
}

export default Flatowner