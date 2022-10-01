import {useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useHistory, useParams } from "react-router-dom"
import FlatownerServices from "../../service/FlatownerServices"

const CreateNewComplaints = () => {
    const [c_date,setC_date] = useState('')
    const [c_description,setC_description] = useState('')
    const [flatowner,setFlatowner] = useState({id:2})
    const history = useHistory();
    const {id} = useParams();

    const saveComplaint = (e) => {
        e.preventDefault();
       
        const complaint = {c_date,c_description,flatowner}

        if(id){
         FlatownerServices.updateNotice(id,complaint).then((resp) => {
               history.push(`/Admin/Complaints/Add`);
         }).catch(error => {
            console.log(error)
         })
        }else{
         FlatownerServices.createComplaint(complaint).then((resp) => {
            console.log(resp.data)
          
            history.push(`/flatowner`);
            alert("Complaint registered Successfully");
        }).catch(error => {
            console.log(error)
        })
    }
}


    const title = () => {
       return<h2 className="tect-center">Add Complaint</h2>
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
                            <label className="form-lable">Date</label>
                            <input type="date" placeholder="Enter Date yy-mm-dd"
                            name="c_date" className="form-control"
                            value={c_date}
                            onChange = {(e) => setC_date(e.target.value)} >
                            </input>
                        </div>
                        <div className="form-group mb-1">
                            <label className="form-lable">Description</label>
                            <input type="text" placeholder="Enter Description"
                            name="c_description"
                            className="form-control"
                            value={c_description}
                            onChange = {(e) => setC_description(e.target.value)} >
                            </input>
                        </div>
                        <div className="form-group mb-1">
                            <label className="form-lable">Flat No.</label>
                            <input type="number" placeholder="Enter Flat No."
                            name="id"
                            className="form-control"
                            value={flatowner.id}
                            onChange = {(e) => setFlatowner(e.target.value)} >
                            </input>
                        </div>

                        
                        <button className="btn btn-success" onClick={(e) => saveComplaint(e)}>Submit</button>
                        <Link to="/flatowner" className="btn btn-danger">cancel</Link>
                    </form>
                </div>
            </div>
        </div>
      </div>
</div>
    )
}

export default CreateNewComplaints