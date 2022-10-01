import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AdminServices from "../../service/AdminServices"

const Admin = () => {
    const[members, setMember] = useState([])
    const[order, setOrder] = useState("ASC");
    const[search, setSearch] = useState("");

    useEffect(() => {
              getAllMembers();
    }, [])

    const getAllMembers = () => {
        AdminServices.getAllMembers().then((resp) => {
            setMember(resp.data)
            console.log(resp.data);
        }).catch(error =>{
               console.log(error);
        })
    }

         const deleteMember = (memberId) => {
            AdminServices.deleteMember(memberId).then((resp) => {
                 getAllMembers();
            }).catch(error => {
               console.log(error);
            })
         }

         const sorting =(col)=>{
            if(order ==="ASC"){
                const sorted = [...members].sort((a,b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);
                setMember(sorted);
                setOrder("DSC");
            }
            if(order ==="DSC"){
                const sorted = [...members].sort((a,b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1);
                setMember(sorted);
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
           <h2 className="text-center">List Members</h2>
           <Link to= "/add-Member" className="btn btn-primary mb-2">Add Member</Link>
           <table className="table table-borders table-stripd">
            <thead>
                <th onClick={() => sorting("id")}>Member Id</th>
                <th onClick={() => sorting("f_name")}>Member Name</th>
                <th onClick={() => sorting("f_email")}>Member Email</th>
                <th>Member Mobile No.</th>
                <th>Role</th>
            </thead>
            <tbody>
                {
            members.filter((val) => {
                if(search === ""){
                    return val;
                }else if(
                    val.f_name.toLowerCase().includes(search.toLowerCase()) ||
                    val.f_email.toLowerCase().includes(search.toLowerCase())
                ){
                    return val;
                }
            }).map(
                        member =>
                        <tr key={member.id}>
                            <td>{member.id}</td>
                            <td>{member.f_name}</td>
                            <td>{member.f_email}</td>
                            <td>{member.f_mobilenum}</td>
                            <td>{member.roles.roleName}</td>
                            <td>
                                <Link className="btn btn-info" to={`/edit-member/${member.id}`}>Update</Link>
                                <button className="btn btn-danger" onClick={() => deleteMember(member.id)}
                                style = {{marginLeft:"10pxl"}}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
           </table>
       </div>
    )
}

export default Admin