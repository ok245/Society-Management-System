import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useHistory, useParams } from "react-router-dom"
import AdminServices from "../../service/AdminServices"

const CreateNewBill = () => {
    const [b_amount,setB_amount] = useState('')
    const [b_date,setB_date] = useState('')
    const [flatowner,setFlatowner] = useState({id:2})
    const history = useHistory();

    const saveBill = (e) => {
        e.preventDefault();
       
        const bill = {b_amount,b_date,flatowner}

         AdminServices.createBill(bill).then((resp) => {
            console.log(resp.data)
           
            history.push(`/Admin/Bills`);
        }).catch(error => {
            console.log(error)
        })
    }


    const title = () => {
       return<h2 className="tect-center">Add Bill</h2>
    }

    return (
        <>
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
                            name="b_date" className="form-control"
                            value={b_date}
                            onChange = {(e) => setB_date(e.target.value)} >
                            </input>
                        </div>
                        <div className="form-group mb-1">
                            <label className="form-lable">Amount</label>
                            <input type="number" placeholder="Enter Bill Amount"
                            name="b_amount"
                            className="form-control"
                            value={b_amount}
                            onChange = {(e) => setB_amount(e.target.value)} >
                            </input>
                        </div>
                        <div className="form-group mb-1">
                            <label className="form-lable">Flat No.</label>
                            <input type="number" placeholder="Enter Visiting Flat No."
                            name="id"
                            className="form-control"
                            value={flatowner.id}
                            onChange = {(e) => setFlatowner(e.target.value)} >
                            </input>
                        </div>

                       
                        <button className="btn btn-success" onClick={(e) => saveBill(e)}>Submit</button>
                       
                        <Link to="/Admin/Bills" className="btn btn-danger">cancel</Link>
                    </form>
                </div>
            </div>
        </div>
      </div>
</div>
<ToastContainer />
</>
    )
}

export default CreateNewBill