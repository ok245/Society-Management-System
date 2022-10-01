import React, { useEffect } from "react";
import { useState } from "react";
import FlatownerServices from "../../service/FlatownerServices";

const Visitor = () => {

    const[visitors, setVisitor] = useState([])
    const[order, setOrder] = useState("ASC");
    const[search, setSearch] = useState("");

    useEffect(() => {
              getAllVisitors();
    }, [])

    const getAllVisitors = () => {
        FlatownerServices.getAllVisitors().then((resp) => {
            setVisitor(resp.data)
            console.log(resp.data);
        }).catch(error =>{
               console.log(error);
        })
    }

    const sorting =(col)=>{
        if(order ==="ASC"){
            const sorted = [...visitors].sort((a,b) =>
            a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);
            setVisitor(sorted);
            setOrder("DSC");
        }
        if(order ==="DSC"){
            const sorted = [...visitors].sort((a,b) =>
            a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1);
            setVisitor(sorted);
            setOrder("ASC");
        }
     }

    return(
       <div className="container">
        <input type="text" placeholder='search...' className='form-control' 
        style={{marginTop:50,marginBottom:20,width:"40%"}}
        onChange={(e) => {
            setSearch(e.target.value);
        }}></input>
           <h2 className="text-center">List Visitors</h2>
           <table className="table table-borders table-stripd">
            <thead>
                <th>Visitor Id</th>
                <th onClick={() => sorting("v_name")}>Visitor Name</th>
                <th>Visitor Mobile No.</th>
                <th>flatowner</th>
            </thead>
            <tbody>
                {
            visitors.filter((val) => {
                if(search === ""){
                    return val;
                }else if(
                    val.v_name.toLowerCase().includes(search.toLowerCase())
                ){
                    return val;
                }
            }).map(
                        visitor =>
                        <tr key={visitor.id}>
                            <td>{visitor.id}</td>
                            <td>{visitor.v_name}</td>
                            <td>{visitor.v_mobileno}</td>
                            <td>{visitor.flatowner.id}</td>
                        </tr>
                    )
                }
            </tbody>
           </table>
       </div>
    )
}

export default Visitor