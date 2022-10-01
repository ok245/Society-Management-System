import {useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useHistory, useParams } from "react-router-dom"
import AdminServices from "../../service/AdminServices"

const CreateNewNotice = () => {
    const [n_date,setN_date] = useState('')
    const [n_description,setN_description] = useState('')
    const history = useHistory();
    const {id} = useParams();

    const saveNotice = (e) => {
        e.preventDefault();
       
        const notice = {n_date,n_description}

        if(id){
         AdminServices.updateNotice(id,notice).then((resp) => {
               history.push(`/Admin/Notice`);
         }).catch(error => {
            console.log(error)
         })
        }else{
         AdminServices.createNotice(notice).then((resp) => {
            console.log(resp.data)
           toast.success("New Notice circuilated throughout Society Successfully");
            history.push(`/Admin/Notice`);
        }).catch(error => {
            console.log(error)
        })
    }
}


    const title = () => {
       return<h2 className="tect-center">Add Notice</h2>
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
                            name="n_date" className="form-control"
                            value={n_date}
                            onChange = {(e) => setN_date(e.target.value)} >
                            </input>
                        </div>
                        <div className="form-group mb-1">
                            <label className="form-lable">Description</label>
                            <input type="text" placeholder="Enter Description"
                            name="n_description"
                            className="form-control"
                            value={n_description}
                            onChange = {(e) => setN_description(e.target.value)} >
                            </input>
                        </div>

                        
                        <button className="btn btn-success" onClick={(e) => saveNotice(e)}>Submit</button>
                        <Link to="/Admin/Notice" className="btn btn-danger">cancel</Link>
                    </form>
                </div>
            </div>
        </div>
      </div>
</div>
    )
}

export default CreateNewNotice