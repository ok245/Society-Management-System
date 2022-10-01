import { useEffect, useState } from "react"
import { Link, useHistory, useParams } from "react-router-dom"
import AdminServices from "../../service/AdminServices"

const AddNewMember = () => {
    const [f_name,setF_name] = useState('')
    const [f_email,setF_email] = useState('')
    const [f_password,setPassword] = useState('')
    const [f_mobilenum,setF_mobilenum] = useState('')
    const [roles,setroles] = useState('')
    const history = useHistory();
    const {id} = useParams();

    const saveOrUpdateMember = (e) => {
        e.preventDefault();
       
        const member = {f_name,f_email,f_password,f_mobilenum,'roles':[roles]}

        if(id){
         AdminServices.updateMember(id,member).then((resp) => {
               history.push(`/Admin`);
         }).catch(error => {
            console.log(error)
         })
        }else{
         AdminServices.createMember(member).then((resp) => {
            console.log(resp.data)
            history.push(`/Admin`);
        }).catch(error => {
            console.log(error)
        })
    }
}

    useEffect(() => {
          AdminServices.getMemberById(id).then((resp) => {
               setF_name(resp.data.f_name)
               setF_email(resp.data.f_email)
               setPassword(resp.data.f_password)
               setF_mobilenum(resp.data.f_mobilenum)
               setroles(resp.data.roles.roleName)
          }).catch(error => {
                  console.log(error)
          })
    }, [])

    const title = () => {
        if(id){
            return<h2 className="text-center">Update Member</h2>
        }else{
            return<h2 className="tect-center">Add Member</h2>
        }
    }

    return (
<div>
      <div className="container">
        <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
               {
                title()
               }
                <div className="card-body">
                    <form>
                        <div className="form-group mb-1">
                            <label className="form-lable">Name</label>
                            <input type="text" placeholder="Enter your name"
                            name="f_name" className="form-control"
                            value={f_name}
                            onChange = {(e) => setF_name(e.target.value)} >
                            </input>
                        </div>
                        <div className="form-group mb-1">
                            <label className="form-lable">Email</label>
                            <input type="text" placeholder="Enter your email"
                            name="f_email" className="form-control"
                            value={f_email}
                            onChange = {(e) => setF_email(e.target.value)} >
                            </input>
                        </div>
                        <div className="form-group mb-1">
                            <label className="form-lable">Password</label>
                            <input type="text" placeholder="Enter your Password"
                            name="f_password"
                            className="form-control"
                            value={f_password}
                            onChange = {(e) => setPassword(e.target.value)} >
                            </input>
                        </div>
                        <div className="form-group mb-1">
                            <label className="form-lable">Mobile Number</label>
                            <input type="number" placeholder="Enter your mobile number"
                            name="f_mobilenum"
                            className="form-control"
                            value={f_mobilenum}
                            onChange = {(e) => setF_mobilenum(e.target.value)} >
                            </input>
                        </div>
                        
                        <div className="form-group mb-1">
                            <label className="form-lable">Role</label>
                            <input type="text" placeholder="Enter your Role"
                            name="roles"
                            className="form-control"
                            value={roles}
                            onChange = {(e) => setroles(e.target.value)} >
                            </input>
                        </div>

                        
                        <button className="btn btn-success" onClick={(e) => saveOrUpdateMember(e)}>Submit</button>
                        <Link to="/admin" className="btn btn-danger">cancel</Link>
                    </form>
                </div>
            </div>
        </div>
      </div>
</div>
    )
}

export default AddNewMember