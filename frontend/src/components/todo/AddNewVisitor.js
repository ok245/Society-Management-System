import { useEffect, useState } from "react"
import { Link, useHistory, useParams } from "react-router-dom"
import FlatownerServices from "../../service/FlatownerServices"
import WorkerService from "../../service/WorkerService"

const AddNewVisitor = () => {
    const [v_mobileno,setV_mobileno] = useState('')
    const [v_name,setV_name] = useState('')
    const [flatowner,setFlatowner] = useState({id:1})
    const history = useHistory();
    const {id} = useParams();

    const saveOrUpdateVisitor = (e) => {
        e.preventDefault();
       
        const visitor = {v_mobileno,v_name}

        if(id){
         WorkerService.updateVisitor(id,visitor).then((resp) => {
               history.push(`/worker`);
         }).catch(error => {
            console.log(error)
         })
        }else{
         WorkerService.createVisitor(visitor).then((resp) => {
            console.log(resp.data)
            history.push(`/worker`);
        }).catch(error => {
            console.log(error)
        })
    }
}

    useEffect(() => {
          WorkerService.getVisitorById(id).then((resp) => {
               setV_name(resp.data.v_name)
               setV_mobileno(resp.data.v_mobileno)
               setFlatowner(resp.data.flatowner)
          }).catch(error => {
                  console.log(error)
          })
    }, [])

    const title = () => {
        if(id){
            return<h2 className="text-center">Update Visitor</h2>
        }else{
            return<h2 className="tect-center">Add Visitor</h2>
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
                            name="v_name" className="form-control"
                            value={v_name}
                            onChange = {(e) => setV_name(e.target.value)} >
                            </input>
                        </div>
                        <div className="form-group mb-1">
                            <label className="form-lable">Mobile Number</label>
                            <input type="number" placeholder="Enter your mobile number"
                            name="v_mobileno"
                            className="form-control"
                            value={v_mobileno}
                            onChange = {(e) => setV_mobileno(e.target.value)} >
                            </input>
                        </div>
                        <div className="form-group mb-1">
                            <label className="form-lable">Visiting Flat No.</label>
                            <input type="number" placeholder="Enter Visiting Flat No."
                            name="id"
                            className="form-control"
                            value={flatowner.id}
                            onChange = {(e) => setFlatowner(e.target.value)} >
                            </input>
                        </div>

                        
                        <button className="btn btn-success" onClick={(e) => saveOrUpdateVisitor(e)}>Submit</button>
                        <Link to="/worker" className="btn btn-danger">cancel</Link>
                    </form>
                </div>
            </div>
        </div>
      </div>
</div>
    )
}

export default AddNewVisitor