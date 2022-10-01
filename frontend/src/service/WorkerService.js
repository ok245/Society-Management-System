import axios from 'axios';

class WorkerService{

    getAllVisitors(){
        return axios.get("http://localhost:8080/api/auth/worker");
    }

    createVisitor(visitor){
        console.log('api call : fetch all');
        return axios.post("http://localhost:8080/api/auth/worker",visitor);
    }

    getVisitorById(visitorId){
        return axios.get("http://localhost:8080/api/auth/worker/"+visitorId);
    }

    updateVisitor(visitorId, visitor){
        return axios.put("http://localhost:8080/api/auth/worker/"+visitorId,visitor);
    }

    deleteVisitor(visitorId){
        return axios.delete("http://localhost:8080/api/auth/worker/"+visitorId);
    }
}

export default new WorkerService();