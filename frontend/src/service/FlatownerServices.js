import axios from "axios";

class FlatownerServices{

    getFlatowner(user){
        console.log(user+'flatowner')
        return axios.post("http://localhost:8080/api/auth/flatowner",{user});
    }

    getAllVisitors(){
        return axios.get("http://localhost:8080/api/auth/flatowner/visitors");
    }

    getAllFBills(){
        return axios.get("http://localhost:8080/api/auth/flatowner/Bills");
    }

    getAllNotices(){
        return axios.get("http://localhost:8080/api/auth/flatowner/Notices");
    }

    createComplaint(complaint){
   return axios.post("http://localhost:8080/api/auth/flatowner/Complaints/Add",complaint);
}
}

export default new FlatownerServices