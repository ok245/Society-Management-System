import axios from "axios";

class AdminServices{
    getAllMembers(){
        return axios.get("http://localhost:8080/api/auth/Admin");
    }

    createMember(member){
        console.log('api call : fetch all');
        return axios.post("http://localhost:8080/api/auth/signup",member);
    }

    getMemberById(memberId){
        return axios.get("http://localhost:8080/api/auth/Admin/"+memberId);
    }

    updateMember(memberId, member){
        return axios.put("http://localhost:8080/api/auth/Admin/"+memberId,member);
    }

    deleteMember(memberId){
        return axios.delete("http://localhost:8080/api/auth/Admin/"+memberId);
    }

    getAllVisitors(){
        return axios.get("http://localhost:8080/api/auth/Admin/visitors");
    }

    getAllComplaints(){
        return axios.get("http://localhost:8080/api/auth/Admin/Complaints");
    }

    getAllBills(){
        return axios.get("http://localhost:8080/api/auth/Admin/Bills");
    }

    createBill(bill){
        return axios.post("http://localhost:8080/api/auth/Admin/Bills/Add",bill);
    }

    getAllNotices(){
        return axios.get("http://localhost:8080/api/auth/Admin/Notice");
    }

    createNotice(notice){
        return axios.post("http://localhost:8080/api/auth/Admin/Notice/Add",notice);
    }
}

export default new AdminServices;